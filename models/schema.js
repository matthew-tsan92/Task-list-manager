const mongoose = require('mongoose')

//Use schema on Mongoose for strict data types into database
const Schema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        trim:true},
    completed: {
        type:Boolean,
        default:false},

})

module.exports = mongoose.model('task',Schema)