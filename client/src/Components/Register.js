import { useState } from "react";


function Register(){

   const [formData,setFormData]=useState({
    name:'',email:'',password:'',cpassword:''
   });

   const {name,email,password,cpassword}=formData;

   const onChange=(e)=>{
       setFormData((prevState)=>({
        ...prevState,[e.target.name]:e.target.value
       }))

       //or we can do : setFormData(()=>{return {...formData,[e.target.name]:e.target.value}})
   }

   const onSubmit=(e)=>{
      e.preventDefault();
      console.log(formData);
   }

    return (
        <div>
            <h1>Register</h1>
            <p>Please create an account</p>
            <div>
                <form onSubmit={onSubmit}>
                 <div>
                    <input type="text" id="name" name="name" 
                    placeholder="Enter your name" onChange={onChange} value={name}
                    />
                 </div>
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
                 <div>
                    <input type="password" id="cpassword" name="cpassword" value={cpassword}
                    placeholder="Confirm your password" onChange={onChange}
                    />
                 </div>
                 <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Register;