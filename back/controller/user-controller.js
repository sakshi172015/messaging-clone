import User from "../models/User";

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
    const {phoneNumber, fullName, about} = req.body
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
        return res.status(400).json(
            {
                message: "An account with this phone number already exists",
                data: null
            }
        )
    }
    if(!fullName && ! phoneNumber && !about) {
        return res.status(400).json({
            message: "Incorrect or no body passed",
            data: null
        })
    }
    const user = new User({
        fullName, 
        phoneNumber,
        profilePic: "",
        statusId: "",
        friends: [],
        about
    })
    try {
        await user.save();
    } catch(err) {
        return console.log(err)
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
        existingUser = User.find({ phoneNumber })
    } catch(err) {
        return res.status(200).json({
            message: err,
            data: null
        })
    }
    if(!existingUser) {
        return res.status(404).json({
            message: "Couldn't find the user",
            data: null
        })
    } 
    return res.status(200).json({
        message: "Logined",
        data: existingUser
    })
}