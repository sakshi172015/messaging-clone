import React from 'react'
import '../styling/Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert, SearchOutlined } from '@material-ui/icons'
import ChatMessage from './ChatMessage'
import ChatReceiver from './ChatReceiver'

function Chat() {
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar />
                <div className="chat-header-info">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat-header-right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat-message-div">
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatReceiver />
                <ChatReceiver />
                <ChatReceiver />
                <ChatReceiver />
            </div>
            <div className="chat-footer">
                <InsertEmoticon />
                <form>
                    <input 
                        placeholder="Type a message"
                        type="text"/>
                    <button
                        type="submit">
                        Send a message         
                    </button>
                </form>
                <MicOutlined />
            </div>
        </div>
    )
}

export default Chat
