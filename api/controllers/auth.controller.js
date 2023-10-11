<<<<<<< HEAD
import bcryptjs from 'bcryptjs';
=======
>>>>>>> bfe499fce7c5ba626a318c66b47e3de70cba5f76
import User from "../models/user.model.js"

export const signup = async(req, res) => {
    const { username, email, password } = req.body;
<<<<<<< HEAD
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save().then(() => {
            res.status(201).json("User Created ")
        })
    } catch (error) {
        res.status(500).json(error.message);
    }


=======
    const newUser = new User({ username, email, password })
    await newUser.save().then(() => {
        res.status(201).json("User Created ")
    })
>>>>>>> bfe499fce7c5ba626a318c66b47e3de70cba5f76
}