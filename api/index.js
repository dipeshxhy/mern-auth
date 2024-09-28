import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'

import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDB connected")
}).catch((error)=>console.log(error))

const app=express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT= process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

//routes

app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

//middlewares
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500
    const message=err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})