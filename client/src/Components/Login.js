import { useState } from "react";



function Login(){

  const [formData,setFormData] =useState({email:'',password:''})

  const {email,password}=formData;

  const onChange=(e)=>{
     setFormData((prevState)=>({...prevState,[e.target.name]:e.target.value}))
  }
  const onSubmit=(e)=>{
     e.preventDefault();
     console.log(formData);
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