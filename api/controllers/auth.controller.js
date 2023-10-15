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

export const signin = async(req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email: email });
        if (!validUser) return next(errorHandler(404, "User not found"));
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(401, "Wrong Credential"));
        console.log(validUser);
        // const {password} = validUser;
    } catch (error) {
        next(error)

    }
}