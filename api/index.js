import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDB connected")
}).catch((error)=>console.log(error))

const app=express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(5000, () => console.log('Server running on port 5000'))