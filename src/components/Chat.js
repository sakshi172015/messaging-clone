import React, { useState } from 'react'
import '../styling/Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert, SearchOutlined } from '@material-ui/icons'
import ChatMessage from './ChatMessage'
import axios from '../axios'

function Chat({messages}) {
    const [input, setInput] = useState("")
    const sendMessage = async (e) => {
        e.preventDefault()
        await axios.post('/messages/new', {
            "message": input,
            "name": "Sakshi",
            "timestamp": "Just now",
            "received": true
        })
        setInput("")
    }
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
                {
                    messages.map((message) =>  (
                        <ChatMessage message={message} />
                    ))
                }
            </div>
            <div className="chat-footer">
                <InsertEmoticon />
                <form>
                    <input 
                        placeholder="Type a message"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)} />
                    <button
                        onClick={sendMessage}
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
