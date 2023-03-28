import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    from:{
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    }
})

export default mongoose.model("Message", messageSchema)