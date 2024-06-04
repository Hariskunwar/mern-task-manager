

function TaskItem({task}){
    return (
        <div>
         <div>
            {new Date(task.createdAt).toLocaleString('en-US')}
         </div>
         <h1>
            {task.task}
         </h1>
        </div>
      
    )
}

export default TaskItem;