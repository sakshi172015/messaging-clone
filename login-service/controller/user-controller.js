import User from "../models/User";
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export const getAllUsers = async(req, res, next) => {
    let users = []
    try {
        users = await User.find()
    } catch(err) {
        return res.status(404).json({
            message: "No users found",
            data: []
        })
    }
    return res.status(200).json({
        message: users.length == 0 ? "No users found" : "Users found",
        data: users
    })
}

export const signup = async(req, res, next) => {
    const {email, fullName, about, phoneNumber} = req.body
    let existingUser;
    try {
        existingUser = await User.findOne({phoneNumber})
    } catch(err) {
        return res.status(400).json({
            message: err,
            data: null
        })
    }

    if(existingUser) {
        return res.status(400).json({
                message: "An account with this phone number already exists",
                data: null
            }
        )
    }
    if(!fullName || !email || !about || !phoneNumber) {
        return res.status(400).json({
            message: "Incorrect or no body passed",
            data: null
        })
    }
    const user = new User({
        fullName, 
        email,
        profilePic: "",
        statusId: "",
        friends: [],
        about,
        phoneNumber
    })
    try {
        await user.save();
    } catch(err) {
        return res.status(400).json({
            message: "Error occurred",
            data: err
        })
    }
    return res.status(200).json({
        message: "User successfully created",
        data: user
    })
}

export const login = async(req, res, next) => {
    const {phoneNumber} = req.body
    let existingUser;
    try {
        existingUser = await User.findOne({phoneNumber: phoneNumber });
    } catch(err) {
        return res.status(400).json({
            message: err,
            data: null
        })
    }
    if(existingUser) {
       const accessToken = jwt.sign(existingUser.toJSON(), process.env.ACCESS_TOKEN_SECRET)
        return res.status(200).json({
            data: {
                existingUser,
                accessToken
            }
        })
    }
}

export const sendOtp = async(req, res, next) => {
    const {email, otp} = req.body
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'messaging.clone@outlook.com',
            pass: 'Messaging@clone'
        }
    })
    const options = {
        from: "messaging.clone@outlook.com",
        to: email,
        subject: "Verification ",
        text: "Your code is " + otp
    }
    transporter.sendMail(options, function(err, info) {
        if(err) {
            return res.status(400).json({
                data: err
            })
        }
        return res.status(200).json({
            data: info.response
        })
    })
}

export const checkIfUserAlreadyExists = async(req, res, next) => {
    const {email, phoneNumber} = req.query
    let existingUser;
    try {
        existingUser = await User.findOne({phoneNumber})
    } catch(err) {
        return res.status(400).json({
            message: "Some error occurred",
            data: err
        })
    }
    if(existingUser) {
        return res.status(200).json({
            message: "User already exists",
            data: existingUser
        })
    }
    return res.status(200).json({
        message: "No such user exists",
        data: null
    })
}