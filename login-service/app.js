import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from "./routes/user-routes";

dotenv.config()

const app = express()
app.use(express.json())

app.use('/api/user', userRouter)
mongoose.set('strictQuery', true)
mongoose
    .connect(
        process.env.MONGO_DB_CONNECTION_URL
    )
    .then(() => app.listen(5000))
    .then(() => console.log("Connected!!"))
    .catch((err) => console.log(err))