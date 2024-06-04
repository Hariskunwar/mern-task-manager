import axios from 'axios';

const URL='http://localhost:4000/api/tasks';

const createTask=async (taskData,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
   const response=await axios.post(`${URL}`,taskData,config);
   return response.data;
}

const getTasks=async (token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
   const response=await axios.get(`${URL}`,config);
   return response.data;
}

const deleteTask=async (id,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
   const response=await axios.delete(`${URL}/${id}`,config);
   return response.data;
}


const taskService={createTask,getTasks,deleteTask};
export default taskService;