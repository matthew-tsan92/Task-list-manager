const Task = require('../models/schema')

const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({errorMessage:error})
    }
}

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({errorMessage:error})
    }
    
    
}

const getTask = async (req,res) => {
    try {
        const {id:ID} = req.params
        const task = await Task.findOne({_id:ID})
        if (task === null) {
            res.status(404).json({errorMessage:'no such id'})
        } 
        res.status(200).son({task})
    } catch (error) {
        res.status(500).json({errorMessage:error})
    }
}

const updateTask = async (req,res) => {
    try {
        const {id:ID} = req.params
        const task = await Task.findOneAndUpdate({_id:ID}, req.body, {new: true, runValidators: true})
    }
    catch (error) {
        res.status(500).json({errorMessage:error})
    }
}

const deleteTask = async (req,res) => {
    try {
        const {id:ID} = req.params
        const task = await Task.findOneAndDelete({_id:ID})
        if (task === null) {
            res.status(404).json({errorMessage:'no such id'})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({errorMessage:error})
    }
}

module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask}
