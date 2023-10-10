import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to mongoDB")
}).catch((error) => {
    console.log(error)
})

const app = express();
app.listen(8080, () => {
    console.log("server is running")
})