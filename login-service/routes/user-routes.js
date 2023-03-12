import express from 'express'
import { signup, getAllUsers, login, sendOtp } from '../controller/user-controller'

const userRouter = express.Router()

userRouter.get("/", getAllUsers)
userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.post("/sendOtp", sendOtp)

export default userRouter