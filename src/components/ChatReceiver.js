import React from 'react'

function ChatReceiver() {
    return (
        <div className="chat-body-div">
            <div className="chat-body">
                    <p className="chat-message chat-receiver">
                        <span className="chat-name">Sakshi</span>
                        This message is deleted
                        <span className="chat-timestamp">
                            {
                                new Date().toUTCString()
                            }
                        </span>
                    </p>
                </div>
            </div>
    )
}

export default ChatReceiver
