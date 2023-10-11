import bcryptjs from 'bcryptjs';
import User from "../models/user.model.js"
import { errorHandler } from '../utils/error.js';

export const signup = async(req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save().then(() => {
            res.status(201).json("User Created ")
        })
    } catch (error) {
        next(errorHandler(500, error.message));
    }


}