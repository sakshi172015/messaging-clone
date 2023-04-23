import express from 'express'
import { signup, getAllUsers, login, sendOtp, checkIfUserAlreadyExists } from '../controller/user-controller'

const userRouter = express.Router()

userRouter.get("/", getAllUsers)
userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.post("/sendOtp", sendOtp)
userRouter.get("/checkIfUserAlreadyExists", checkIfUserAlreadyExists)

export default userRouter