import Task from "../models/taskModel.js"
import User from "../models/userModel.js";
import { CustomError, asyncHandler } from "../utils/CustomError.js"


export const setTask=asyncHandler(async (req,res,next)=>{
     if(!req.body.task){
       return next(new CustomError('Please enter a task',400));
     }
     const task=await Task.create({task:req.body.task,user:req.user._id});
     res.status(201).json(task)
})

export const getTask=asyncHandler(async (req,res,next)=>{
    const tasks=await Task.find({user:req.user._id});
    res.status(200).json(tasks);
})

export const updateTask=asyncHandler(async (req,res,next)=>{
    
    let task=await Task.findById(req.params.id)
;    if(!task){
        return next(new CustomError('Task not found',404));
    }
    const user=await User.findById(req.user._id);
    if(task.user.toString()!==user._id.toString()){
        return next(new CustomError('You are not authorized to update',401))
    }
    task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(task)
 })

export const deleteTask=asyncHandler(async (req,res,next)=>{
    const task=await Task.findById(req.params.id);
    if(!task){
        return next(new CustomError('Task not found',404));
    }
    const user=await User.findById(req.user._id);
    if(task.user.toString()!==user._id.toString()){
        return next(new CustomError('You are not authorized to update',401))
    }
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).json();
})