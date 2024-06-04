import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { useNavigate } from "react-router-dom";

function TaskItem({task}){
    const dispatch=useDispatch();
    
    
    const handleDelete=()=>{
        dispatch(deleteTask(task._id))
        
    }
    
    return (
        <div>
         <div>
            {new Date(task.createdAt).toLocaleString('en-US')}
         </div>
         <h3>
            {task.task}
         </h3>
         <button onClick={handleDelete}>X</button>
        </div>
      
    )
}

export default TaskItem;