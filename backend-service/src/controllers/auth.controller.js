import ApiResponse from "../utils/api.response.js"

const login = async (req, res) => {
    try {
        const { username, password } = req.body
        if (username == 'admin' && password == 'admin.pass') {
            return res.status(200).json(ApiResponse.success("Logged in successfully", {}))
        }
        return res.status(400).json(ApiResponse.error("Invalid credentials", {}))
    } catch (error) {
        console.log(error)
        return res.status(201).json(ApiResponse.error("Internal Server Error", {}))
    }
}

const authController = {
    login
}

export default authController