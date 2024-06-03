import User from "../models/userModel.js";
import { CustomError, asyncHandler } from "../utils/CustomError.js";

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateJwtToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'5d'});
}

export const registerUser=asyncHandler(async (req,res,next)=>{
     const {name,email,password}=req.body;
     if(!name||!email||!password){
        return next(new CustomError("All fields are mandatory",400))
     }
     const userExists=await User.findOne({email});
     if(userExists){
        return next(new CustomError("User already exist",400));
     }
     const salt = await bcrypt.genSalt(10);
     const hashedPassword=await bcrypt.hash(password,salt);
     const user=await User.create({name,email,password:hashedPassword});
     res.status(201).json({id:user._id,name:user.name,email:user.email,token:generateJwtToken(user._id)})
})

export const loginUser=asyncHandler(async (req,res,next)=>{
      const {email,password}=req.body;
      if(!email||!password){
        return next(new CustomError("provide both email and password",400));
      }
      const user=await User.findOne({email});
      if(user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({id:user._id,name:user.name,email:user.email,token:generateJwtToken(user._id)})
      }else{
        next(new CustomError('Invalid data',400))
      }
});

export const getCurrentUser=asyncHandler(async (req,res,next)=>{
    const {_id,name,email}=await User.findById(req.user._id);
    res.status(200).json({_id,name,email});
})
