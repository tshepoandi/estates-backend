import express from 'express'
import { signup } from '../controllers/auth.controller.js'
const route = express.Router()

<<<<<<< HEAD
const AuthRoute = route.post("/signup", signup);

export default AuthRoute
=======
Router.post("/signup", signup)

export default router
>>>>>>> bfe499fce7c5ba626a318c66b47e3de70cba5f76
