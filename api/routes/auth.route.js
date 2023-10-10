import express from 'express'
import { signup } from '../controllers/auth.controller.js'
const route = express.Router()

Router.post("/signup", signup)

export default router