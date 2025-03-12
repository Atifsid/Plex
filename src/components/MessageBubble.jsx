import React from 'react';
import Avatar from './Avatar';

const MessageBubble = ({ text, isMine, avatar }) => {
    return (
        <div className={`flex ${isMine ? 'justify-end' : 'justify-start'} my-6`}>
            {!isMine && <Avatar img={avatar} emoji={avatar} isBigImg={false} />}
            <div className={`max-w-xs px-3 py-2 rounded-lg ${isMine ? 'bg-primary text-white ml-2' : 'bg-gray-100 mr-2'}`}>
                <p className="text-sm">{text}</p>
            </div>
        </div>
    );
};

export default MessageBubble;