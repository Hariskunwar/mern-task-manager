import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskForm from "./TaskForm";


function Dashboard(){
  const {user}=useSelector(state=>state.auth);
  const navigate=useNavigate();
  useEffect(()=>{
    if(!user) navigate('/login');
  },[user,navigate])
    return(
      <div>
        <h1>Welcome {user&&user.name}</h1>
        <p>Task Dashboard</p>
        <TaskForm />
      </div>
    );
}

export default Dashboard;