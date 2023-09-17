import Users from "../models/users.js"
import ApiResponse from "../utils/api.response.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await Users.findOne({ username })
        if (!user) return res.status(401).json(ApiResponse.error("Username or password is incorrect", {}))
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(401).json(ApiResponse.error("Username or password is incorrect", {}))
        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
        return res.status(200).json(ApiResponse.success("Login successfull", { user, token }))
    } catch (error) {
        console.log(error)
        return res.status(400).json(ApiResponse.error("Internal Server Error", {}))
    }
}

const authController = {
    login
}

export default authController