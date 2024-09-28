

export const errorHandler=(statusCode,message)=>{
   const error=new Error() 
   error.statusCode=statusCode
   error.message=message
   return error  //returns a new error object with the provided statusCode and message
}