import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './routes/user.route.js'
import { signup } from './controllers/auth.controller.js'


dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to mongoDB")
}).catch((error) => {
    console.log(error)
})

const app = express();
app.use(express.json())

app.listen(4000, () => {
    console.log("server is running")
})

app.use("/api/user", UserRouter)
api.use("api/auth/signup", signup)