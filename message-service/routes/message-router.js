import express from 'express'
import {getAllMessages, postMessage, getUserMessages} from '../controller/message-controller'

const messageRouter = express.Router()

messageRouter.get("/", getAllMessages)
messageRouter.post("/", postMessage)
messageRouter.get("/userMessages", getUserMessages)

export default messageRouter