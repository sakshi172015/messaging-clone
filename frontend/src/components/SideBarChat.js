import React from 'react'
import colors from './colors'
import '../styling/SideBarChat.css'

export default function SideBarChat() {
  return (
    <div className='container d-flex flex-row p-2'>
        <div className='d-flex flox-row'>
            <img src='https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2F31b064cd-e914-46c4-9261-f5cf1e300786.jpeg' 
                    className='profile-pic' />
            <div className="chat-info d-flex flex-column px-3">
                <span>Old Man</span>
                <span style={{fontSize: "13px", color: colors.icon}}>ill come by</span>
            </div>
        </div>
        <div className='d-flex flex-column p-3 align-self-center' style={{color: colors.icon, fontSize: "10px"}}>
            <span>12:14</span>
            <span>unread</span>
        </div>
    </div>
  )
}
