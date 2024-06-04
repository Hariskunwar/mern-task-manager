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

const taskService={createTask};
export default taskService;