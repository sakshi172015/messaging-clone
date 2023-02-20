import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    isDelivered: {
        type: Boolean
    },
    isReceived: {
        type: Boolean
    },
    isRead: {
        type: Boolean
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