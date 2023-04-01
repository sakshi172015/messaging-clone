import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import messageRouter from "./routes/message-router";
import cors from 'cors'

dotenv.config()

const app = express()
const options = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
  methods: 'GET, PUT, POST, DELETE',
}
app.use(cors(options))
app.use(express.json())

app.use('/api/message', messageRouter)

mongoose.set('strictQuery', true)
mongoose
    .connect(process.env.MONGO_DB_CONNECTION_URL)
    .then(() => app.listen(9000))
    .then(() => console.log("PORT 9000 connected"))
    .catch((err) => console.log(err))