import express from 'express';
import dotenv from 'dotenv';

dotenv.config({path:'config/config.env'});
const app=express(); 


const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server listening at port : ${PORT}`);
})