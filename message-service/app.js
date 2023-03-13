import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import messageRouter from "./routes/message-router";

dotenv.config()

const app = express()
app.use(express.json())
app.use('/api/message', messageRouter)

mongoose.set('strictQuery', true)
mongoose
    .connect(process.env.MONGO_DB_CONNECTION_URL)
    .then(() => app.listen(6000))
    .then(() => console.log("PORT 6000 connected"))
    .catch((err) => console.log(err))
