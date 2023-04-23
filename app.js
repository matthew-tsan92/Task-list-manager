require('./database/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./database/connect')
require('dotenv').config()

const port = 3000;

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks',tasks)

const startServer = async () => {
    //check if the connection to database works
    try {
        await connectDB(process.env.MONGO_CONNECTION_STRING)
        app.listen(port, console.log('port is listening'));
    } catch (error) {
        console.log(error)
    }
}

startServer()