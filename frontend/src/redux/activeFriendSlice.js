import { createSlice } from "@reduxjs/toolkit";

const activeFriendSlice =   createSlice({
    name: "activeFriend",
    initialState: {
        _id: "",
        fullName: "Sakshi JJJJJj",
        profilePic: "",
        statusId: "",
        email: "",
        friends: [],
        about: [],
        phoneNumber: ""
    },
    reducers: {
        updateActiveFriend: (state, action) => {
            console.log("payload", action.payload)
            state.fullName = action.payload.fullName
            state.profilePic = action.payload.profilePic
            state.statusId = action.payload.statusId
            state.email = action.payload.email
            state.friends = action.payload.friends
            state.about = action.payload.about
            state.phoneNumber = action.payload.phoneNumber
        }
    }
})
export const {updateActiveFriend} = activeFriendSlice.actions
export default activeFriendSlice.reducer