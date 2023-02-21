import express from 'express'
import { signup, getAllUsers, login } from '../controller/user-controller'

const userRouter = express.Router()

userRouter.get("/", getAllUsers)
userRouter.post("/signup", signup)
userRouter.post('/login', login)

export default userRouter