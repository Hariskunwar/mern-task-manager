import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";



function Login(){

  const [formData,setFormData] =useState({email:'',password:''})

  const {email,password}=formData;
 
  const navigate=useNavigate();
  const {user ,isError,isSuccess,message}=useSelector(state=>state.auth);
  const dispatch=useDispatch();

  useEffect(()=>{
   if(isError) alert(message);
   if(isSuccess||user) navigate('/');
   dispatch(reset())
  },[user,isError,isSuccess,message,dispatch,navigate]);

  const onChange=(e)=>{
     setFormData((prevState)=>({...prevState,[e.target.name]:e.target.value}))
  }
  const onSubmit=(e)=>{
     e.preventDefault();
    const userData={email,password};
    dispatch(login(userData))
  }
  
    return (
        <div>
            <h1>Login</h1>
            <p>Please Login to create tasks</p>
            <div>
                <form onSubmit={onSubmit}>
                 
                 <div>
                    <input type="email" id="email" name="email" value={email}
                    placeholder="Enter your email" onChange={onChange}
                    />
                 </div>
                 <div>
                    <input type="password" id="password" name="password" value={password}
                    placeholder="Enter your password" onChange={onChange}
                    />
                 </div>
                 
                 <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        
    );
}

export default Login;