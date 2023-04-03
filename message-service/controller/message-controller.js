import Message from "../models/Message";
import dotenv from 'dotenv'

dotenv.config()

export const getAllMessages = async(req, res, next) => {
    let messages = []
    try {
        messages = await Message.find()
    } catch(err) {
        return res.status(400).json({
            message: "Error occurred",
            data: null
        })
    } 
    return res.status(200).json({
        message: messages.length == 0 ? "No messages found" : "Messages found",
        data: messages
    })
}


export const postMessage = async(req, res, next) => {
    const {content, from, to} = req.body
    if(!content || !from || !to) {
        return res.status(400).json({
            message: "Incorrect or no body found",
            data: null
        })
    }
    const message = new Message({
        content, 
        to, 
        from, 
        time: new Date()
    })
    try {
        await message.save()
    } catch(err) {
        return res.status(400).json({
            message: "Error occurred",
            data: null
        })
    }
    return res.status(200).json({
        message: "Message saved",
        data: message
    })
    
}

export const getUserMessages = async(req, res, next) => {
    // console.log(req.query.to)
    const { to, from} = req.query
    let messages = []
    try {
        messages = await Message.find().or([
            { to: to, from: from},
            { to: from, from : to}
        ]).sort({time: 1})
        // messages = await Message.find({to: to, from: from}).sort({time: -1})
    } catch(err) {
        return res.status(400).json({
            message: "Error occurred",
            data: null
        })
    }  
    if(!messages) {
        return res.status(200).json({
            message: "No messages found",
            data: messages
        })
    } 
    return res.status(200).json({
        message: "Messages found",
        data: messages
    })
}