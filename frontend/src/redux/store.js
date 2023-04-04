import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/userSlice'
import activeFriendReducer from './activeFriendSlice'

export default configureStore({
  	reducer: {
    	user: userReducer,
		activeFriend: activeFriendReducer
  	},
})