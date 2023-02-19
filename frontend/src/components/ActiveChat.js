import React from 'react'
import colors from './colors'
import '../styling/ActiveChat.css'
import { MoreVert, Search, InsertEmoticon, AttachFile, MicOutlined} from '@mui/icons-material'
import Message from './Message'

export default function ActiveChat() {
  return (
    <div className='d-flex flex-column active-chat-container' style={{flex: 16}}>
        <div className='top-bar d-flex flex-row align-items-center p-3 justify-content-between' style={{backgroundColor: colors.task_bar}}>
            <div>
            <img src='https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2F31b064cd-e914-46c4-9261-f5cf1e300786.jpeg' 
                className='side-bar-profile-pic' />
                <span className='p-3' style={{color: "white"}}>Old Man</span>
                </div>
            <div className='d-flex d-flex align-items-end ml-auto'>
                <div className='p-2'><Search sx={{color: colors.icon, fontSize: 22}} /></div>
                <div className='p-2'><MoreVert sx={{color: colors.icon, fontSize: 22}} /></div>
            </div>
        </div>
        <div style={{flex: 1}}>
          <Message />
        </div>
        <div className='bottom-bar d-flex align-self-end' style={{backgroundColor: colors.hover_chat}}>
          <div className='p-3'><InsertEmoticon sx={{color: colors.icon, fontSize: 25}} /></div>
          <div className='p-2'><AttachFile sx={{color: colors.icon, fontSize: 25}} /></div>
          <input
              className='send-input-box d-flex px-3'
              style={{backgroundColor: colors.selected_chat}} 
              placeholder={"Type a message"} 
          />
          <div className='p-3'><MicOutlined sx={{color: colors.icon, fontSize: 25}} /></div>
        </div>
    </div>
  )
}