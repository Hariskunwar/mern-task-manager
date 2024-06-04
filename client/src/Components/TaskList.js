import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTasks, reset } from "../features/tasks/taskSlice";

import TaskItem from './TaskItem';

function TaskList(){

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {tasks,isError,isLoading,message}=useSelector(state=>state.tasks);
    useEffect(()=>{
        if(isError) console.log(message);
        dispatch(getTasks())
        return ()=>dispatch(reset())
    },[navigate,isError,message,dispatch])

    return (
       <div>
        <h1>All Tasks</h1>
        {tasks.map(task=><TaskItem key={task._id} task={task} />)}
       </div>
    );
}

export default TaskList;