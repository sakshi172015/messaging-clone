import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
    },
    statusId: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    friends: {
        type: Array
    },
    about: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: true
    }
})

export default mongoose.model("User", userSchema)