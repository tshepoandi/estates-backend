import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router()

const UserRouter = router.get('/test', (req, res) => {
    res.json({
        message: "hello world"
    })
})

export default UserRouter