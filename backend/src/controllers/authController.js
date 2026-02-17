import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken"

export const registerUser = async (req,res) => {
    try {
        const { name, email, password, role } = req.body;

        // check if user exist 
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({message:"User already exist "})
        }

        // Hash password 
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        
        // create user 
        const user = await User.create({
            name,
            email,
            password: hashPassword,
            role
        });

        res.status(200).json({
            message: "User registration sucessfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role:user.role
            }
        })

    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}



export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        
        if (!user) {
            res.status(400).json({message:"Invalid Crendentials"})
        }
        // compare password

        const match = await bcrypt.compare(password, user.password)
        
        if (!match) {
            res.status(400).json({message:"Invalid Crendentials"})
        }
        // create jwt token
        const token = jwt.sign(
            {
            id: user._id, role: user.role    
            }, process.env.JWT_SECRET,
            {expiresIn:"1d"}

        
        )

      return  res.json({
            message: "Login sucessfully ",
            token,
            user: {
                id: user._id,
                name: user.name,
                role:user.role,
            }
        })
        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
}