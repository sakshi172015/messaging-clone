import React from 'react'
import { Avatar } from '@material-ui/core'
import '../styling/SidebarChat.css'

function SidebarChat() {
    return (
        <div className="sidebar-chat">
            <Avatar />
            <div className="sidebar-chat-info">
                <p>Chat header</p>
                <p>Chat content</p>
            </div>
        </div>
    )
}

export default SidebarChat
