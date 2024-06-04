import axios from 'axios';

const URL='http://localhost:4000/api/users';

const register=async (userData)=>{
   
        const response=await axios.post(`${URL}`,userData);
        if(response.data){
            localStorage.setItem('user',JSON.stringify(response.data));
        }
        return response.data;   
}

const logout=()=>localStorage.removeItem('user');

const login=async (userData)=>{
   const response=await axios.post(`${URL}/login`,userData);
   if(response.data){
    localStorage.setItem('user',JSON.stringify(response.data));
   }
   return response.data;
}

//This line creates an object named authService. The object has a single property register.
const authService={register,logout,login};//object creation with shorthand property
//without shorthand: const authService={register:register}
export default authService;