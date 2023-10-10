import express from 'express'
import { signup } from '../controllers/auth.controller.js'
const route = express.Router()

const AuthRoute = route.post("/signup", signup);

export default AuthRoute