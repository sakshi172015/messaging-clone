import React from 'react'
import '../styling/Chat.css'

function ChatMessage({message}) {
    return (
        <div className="chat-body-div">
            <div className="chat-body">
                {
                    message.received ? (
                        <p className="chat-message chat-receiver">
                        <span className="chat-name">{message.name}</span>
                        {message.message}
                        <span className="chat-timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                    ) : (
                        <p className="chat-message">
                        <span className="chat-name">{message.name}</span>
                        {message.message}
                        <span className="chat-timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                    )
                }
                </div>
            </div>
    )
}

export default ChatMessage
