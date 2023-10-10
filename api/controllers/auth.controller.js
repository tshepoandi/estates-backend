import User from "../models/user.model.js"

export const signup = async(req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body)
    const newUser = new User({ username, email, password })
    await newUser.save().then(() => {
        res.status(201).json("User Created ")
    })
}