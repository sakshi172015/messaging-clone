import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user-routes";

const app = express()
app.use(express.json())

app.use('/api/user', userRouter)
mongoose.set('strictQuery', true)
mongoose
    .connect(
        'mongodb+srv://admin:admin@cluster0.sb3jkn6.mongodb.net/test'
    )
    .then(() => app.listen(5000))
    .then(() => console.log("Connected!!"))
    .catch((err) => console.log(err))