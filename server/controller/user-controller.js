
import User from "../model/user-schema.js";


export const usersignup = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username })
        if (exist) {
            return response.status(400).json({ message: "user already exists" })
        }
        const user = request.body;
        const newuser = new User(user);
        await newuser.save();
        response.status(200).json({ message: "user created successfully" })
    } catch (error) {
        response.status(500).json({ message: "error creating user" })


    }

}