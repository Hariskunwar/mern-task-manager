const errorHandler=(err,req,res,next)=>{
    err.statusCode=err.statusCode?err.statusCode:500;
    res.status(err.statusCode).json({msg:err.message})
}

export default errorHandler;