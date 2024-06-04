import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import taskRouter from './routes/taskRoute.js';
import errorHandler from './middleware/errorHandler.js';
import { CustomError } from './utils/CustomError.js';
import userRouter from './routes/userRoute.js';
import cors from 'cors';


dotenv.config({path:'config/config.env'});
connectDb();
const app=express(); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/tasks',taskRouter);
app.use('/api/users',userRouter);

app.all('*',(req,res,next)=>{
    next(new CustomError(`${req.originalUrl} not found`));
})

app.use(errorHandler)

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server listening at port : ${PORT}`);
})