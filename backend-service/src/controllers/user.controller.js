import Users from "../models/users.js"
import ApiResponse from "../utils/api.response.js"
import bcrypt from 'bcryptjs'

const create = async (req, res) => {
    try {
        const { username, password } = req.body
        const hash = await bcrypt.hash(password, 10)
        const user = await new Users({ username, password: hash })
        await user.save()
        return res.status(201).json(ApiResponse.success("User created successfully", { user }))
    } catch (error) {
        console.log(error)
        return res.status(400).json(ApiResponse.error("Internal Server Error", {}))
    }
}

const resetPassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body
    try {
        const user = await Users.findById(req.user.id)
        if (!user) return res.status(401).json(ApiResponse.error("You are not logged in", {}))
        const isMatch = await bcrypt.compare(oldPassword, user.password)
        if (!isMatch) return res.status(401).json(ApiResponse.error("Old password is incorrect", {}))
        const hash = await bcrypt.hash(newPassword, 10)
        user.password = hash
        await user.save()
        return res.status(200).json(ApiResponse.success("Password changed successfully", { user }))
    }
    catch (error) {
        console.log(error)
        return res.status(400).json(ApiResponse.error("Internal Server Error", {}))
    }
}

const userController = {
    create,
    resetPassword
}

export default userController