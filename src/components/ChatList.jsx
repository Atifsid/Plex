import React from 'react';
import Avatar from './Avatar';
import Tag from './Tag';

const ChatList = ({ activeChat, setActiveChat }) => {
    const chatList = [
        {
            id: 1,
            name: 'Elmer Laverty',
            lastMessage: 'Haha oh man 🔥',
            time: '12m',
            tags: [
                { text: 'Question', color: 'orange' },
                { text: 'Help wanted', color: 'green' }
            ]
        },
        {
            id: 2,
            name: 'Florencio Dorrance',
            lastMessage: 'woohoooo',
            time: '24m',
            tags: [{ text: 'Some content', color: 'gray' }]
        },
        {
            id: 3,
            name: 'Lavern Laboy',
            lastMessage: 'Haha that\'s terrifying 😂',
            time: '1h',
            tags: [
                { text: 'Bug', color: 'orange' },
                { text: 'Hacktoberfest', color: 'green' }
            ]
        },
        {
            id: 4,
            name: 'Titus Kitamura',
            lastMessage: 'omg, this is amazing',
            time: '5h',
            tags: [
                { text: 'Question', color: 'orange' },
                { text: 'Some content', color: 'gray' }
            ]
        },
        {
            id: 5,
            name: 'Geoffrey Mott',
            lastMessage: 'ayy 👌',
            time: '2d',
            tags: [{ text: 'Request', color: 'green' }]
        },
        {
            id: 6,
            name: 'Alfonzo Schuessler',
            lastMessage: 'perfect!',
            time: '1m',
            tags: [{ text: 'Follow up', color: 'gray' }]
        }
    ];

    return (
        <div className="overflow-y-auto flex-1">
            {chatList.map((chat) => (
                <div
                    key={chat.id}
                    className={`flex p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50
          ${chat.name === activeChat ? 'bg-gray-100' : ''}`}
                    onClick={() => setActiveChat(chat.name)}
                >
                    <Avatar user={chat.name} emoji={chat.avatar} />
                    <div className="ml-3 flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-sm font-medium truncate">{chat.name}</h3>
                            <span className="text-xs text-gray-400">{chat.time}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-1 truncate">{chat.lastMessage}</p>
                        <div className="flex flex-wrap gap-1">
                            {chat.tags.map((tag, index) => (
                                <Tag key={index} text={tag.text} color={tag.color} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatList;