import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../features/tasks/taskSlice";
import { useNavigate } from "react-router-dom";

function TaskForm(){
    
    const [task,setTask]=useState('');
    const navigate=useNavigate()
    const dispatch=useDispatch();

    const onSubmit=(e)=>{
      e.preventDefault();
      dispatch(createTask({task}))
      setTask('');  
      navigate('/alltasks')  
    }

    return (
        <div>
            <h1>TaskForm</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" id="task" name="task" value={task} onChange={(e)=>setTask(e.target.value)}  placeholder="Enter Task"/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;