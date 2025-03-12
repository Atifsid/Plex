import React, { useEffect, useRef } from 'react';
import Avatar from './Avatar';
import MessageBubble from './MessageBubble';
import { FaPhoneAlt } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { BsFillSendFill, BsThreeDotsVertical } from "react-icons/bs";
import user1 from "/user1.png";

const ChatArea = ({ activeChatUser }) => {
    const messagesEndRef = useRef(null);
    const chatData = {
        user: {
            name: 'Florencio Dorrance',
            status: 'Online',
            avatar: user1
        },
        messages: [
            { id: 1, sender: 'Florencio Dorrance', text: 'omg, this is amazing', time: '10:05' },
            { id: 2, sender: 'me', text: 'perfect! ✅', time: '10:06' },
            { id: 3, sender: 'Florencio Dorrance', text: 'Wow, this is really epic', time: '10:07' },
            { id: 4, sender: 'me', text: 'How are you?', time: '10:10' },
            { id: 5, sender: 'Florencio Dorrance', text: 'just ideas for next time', time: '10:12' },
            { id: 6, sender: 'Florencio Dorrance', text: 'I\'ll be there in 2 mins ⏰', time: '10:13' },
            { id: 7, sender: 'me', text: 'woohoooo', time: '10:15' },
            { id: 8, sender: 'me', text: 'Haha oh man', time: '10:16' },
            { id: 9, sender: 'me', text: 'Haha that\'s terrifying 😂', time: '10:17' },
            { id: 10, sender: 'Florencio Dorrance', text: 'aww', time: '10:20' },
            { id: 11, sender: 'Florencio Dorrance', text: 'omg, this is amazing', time: '10:21' },
            { id: 12, sender: 'Florencio Dorrance', text: 'woohoooo 🔥', time: '10:22' },
            { id: 13, sender: 'Florencio Dorrance', text: 'woohoooo 🔥', time: '10:22' },
            { id: 14, sender: 'Florencio Dorrance', text: 'woohoooo 🔥', time: '10:22' },
            { id: 15, sender: 'Florencio Dorrance', text: 'woohoooo 🔥', time: '10:22' },
            { id: 16, sender: 'Florencio Dorrance', text: 'woohoooo 🔥', time: '10:22' },
            { id: 17, sender: 'Florencio Dorrance', text: 'woohoooo 🔥', time: '10:22' },
            { id: 18, sender: 'Florencio Dorrance', text: 'woohoooo 🔥', time: '10:22' },
            { id: 19, sender: 'Florencio Dorrance', text: 'woohoooo 🔥', time: '10:22' },
            { id: 20, sender: 'Florencio Dorrance', text: 'woohoooo 🔥', time: '10:22' },
            { id: 21, sender: 'Florencio Dorrance', text: 'woohoooo 🔥', time: '10:22' },
            { id: 22, sender: 'Florencio Dorrance', text: 'woohoooo 🔥', time: '10:22' },
            { id: 23, sender: 'Florencio Dorrance', text: 'woohoooo 🔥', time: '10:22' },
        ],
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatData.messages]);

    return (
        <div className="flex flex-col flex-1 h-full">
            <div className="flex justify-between items-center p-3 border-b border-gray-200">
                <div className="flex items-center">
                    <Avatar img={chatData.user.avatar} />
                    <div className="ml-3">
                        <h2 className="text-base font-medium">{chatData.user.name}</h2>
                        <span className="text-xs text-green-500">{chatData.user.status}</span>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <button className="flex items-center gap-2 text-primary font-semibold bg-primary/10 rounded-lg px-4 py-2.5 text-sm">
                        <FaPhoneAlt color='#615EF0' size={12} />
                        <span>Call</span>
                    </button>
                    <BsThreeDotsVertical color='#615EF0' size={18} />
                </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-2">
                {chatData.messages.map((message) => (
                    <MessageBubble
                        key={message.id}
                        text={message.text}
                        time={message.time}
                        isMine={message.sender === 'me'}
                        avatar={message.sender === 'me' ? null : chatData.user.avatar}
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center p-3 border-t border-gray-200">
                <button className="text-gray-400 mx-2"><GrAttachment size={18} /></button>
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="text-primary mx-2"><BsFillSendFill size={18} /></button>
            </div>
        </div>
    );
};

export default ChatArea;