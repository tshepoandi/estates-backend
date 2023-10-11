import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './routes/user.route.js'
<<<<<<< HEAD
import signup from './routes/auth.route.js'
=======
import { signup } from './controllers/auth.controller.js'
>>>>>>> bfe499fce7c5ba626a318c66b47e3de70cba5f76


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
<<<<<<< HEAD
app.use("/api/auth", signup)
=======
api.use("api/auth/signup", signup)
>>>>>>> bfe499fce7c5ba626a318c66b47e3de70cba5f76
