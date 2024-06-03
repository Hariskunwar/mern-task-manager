import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import { CustomError, asyncHandler } from "../utils/CustomError.js";


export const protect=asyncHandler(async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token=req.headers.authorization.split(' ')[1];
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            const user=await User.findById(decoded.id);
           
            
            req.user=user;
            next();
        } catch (error) {
            console.log(error);
            next(new CustomError('You are not authorized',401))
        }
    }
    if(!token){
        next(new CustomError("Not authorized , no token"))
    }
})

