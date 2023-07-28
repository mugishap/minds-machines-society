import ApiResponse from "../utils/api.response.js"

const login = async (req, res) => {
    try {
        const { username, password } = req.body
        if (username == 'admin' && password == 'admin.pass') {
            return ApiResponse.success("Logged in successfully", {})
        }
        return ApiResponse.error("Invalid credentials", {})
    } catch (error) {
        console.log(error)
        return res.status(201).json(ApiResponse.error("Internal Server Error", {}))
    }
}

const authController = {
    login
}

export default authController