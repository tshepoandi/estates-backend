import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect(process.env.MONGO)

const app = express();
app.listen(8080, () => {
    console.log("server is running")
})