import express from "express";

const app = express()
app.use(express.json())
const PORT = 3030

app.listen(PORT, () => console.log("listening to port 3030..."))

