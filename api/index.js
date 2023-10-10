import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './routes/user.route.js'


dotenv.config()
mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to mongoDB")
}).catch((error) => {
    console.log(error)
})

const app = express();
app.listen(4000, () => {
    console.log("server is running")
})

app.use("/api/user", UserRouter)