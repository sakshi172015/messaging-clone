import mongoose from "mongoose";

const Schema = mongoose.Schema;

const statusSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    viewedBy: {
        type: Array
    },
    time: {
        type: String,
        required: true
    }
})

export default mongoose.mode("Status", statusSchema)