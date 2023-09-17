import { Router } from "express";
import userController from "../controllers/user.controller.js";
import checkLoggedIn from "../middleware/auth.middleware.js";

const userRouter = Router()

userRouter.post("/create", userController.create)
userRouter.put("/reset-password", [checkLoggedIn], userController.resetPassword)

export default userRouter

