import mongoose  from "mongoose";

const taskSchema=new mongoose.Schema({
    task:{
        type:String,
        required:[true,"please provide task"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
},{timestamps:true});

const Task=mongoose.model('Task',taskSchema);
export default Task;