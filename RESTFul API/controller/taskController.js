import asyncHandler from "express-async-handler";
import { Task } from "../model/taskModel.js";

//create task
export const createTask = asyncHandler(async(req, res) => {
    const {task, active} = req.body;
    const todo = await Task.create({task, active});
    res.status(200).json({
        success: true,
        data: todo,
        message: "Task created successfuly"
    });
});

//update task
export const updateTask = asyncHandler(async(req, res) => {
    const {task, active} = req.body
    const existTask = await Task.findOne({ _id : req.params.id})
    if(existTask){
        existTask.task = task;
        existTask.active = active
        const updatedTask = await existTask.save();
        res.status(200).json({
            success: true,
            data: updatedTask,
            message: 'Task is updated successfully'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task is Not Found'
        })
    }
});

//delete task
export const deleteTask = asyncHandler(async(req, res) => {
    const existTask = await Task.findOne({ _id : req.params.id})
    if(existTask){
        await Task.findByIdAndDelete(existTask);
        res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task Not Found'
        })
    }
});

//get single task
export const getSingleTask = asyncHandler(async(req, res) => {
    const existTask = await Task.findOne({ _id : req.params.id})
    if(existTask){
        res.status(200).json({
            success: true,
            data:existTask,
            message: 'Task is fetched successfully'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task is Not Found'
        })
    }
});

//all task
export const getAllTask = asyncHandler(async(req, res) => {
    const allTasks = await Task.find({})
    if(allTasks){
        res.status(200).json({
            success: true,
            data: allTasks,
            message: 'All Tasks fetched  successfully'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Tasks are Not Found'
        })
    }
});



