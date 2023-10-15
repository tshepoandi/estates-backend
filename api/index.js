import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './routes/user.route.js'
import signup from './routes/auth.route.js'


dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to mongoDB")
}).catch((error) => {
    console.log(error)
})

const app = express();
app.use(express.json())

app.listen(4000, () => {
    console.log("server is running on port 4000")
})

app.use("/api/user", UserRouter)
app.use("/api/auth", signup)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error"
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})