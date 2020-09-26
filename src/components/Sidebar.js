import React from 'react'
import '../styling/Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from "./SidebarChat.js"
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEGeP0e4hMDHQaAUnqIVOw4pmtaZEX2clCXg&usqp=CAU"/>
                <div className="right-sidebar-header">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-search">
                <div className="sidebar-search-container">
                    <SearchOutlined />
                    <input placeholder="Search or start chat" />
                </div>
            </div>
            <div className="sidebar-chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
