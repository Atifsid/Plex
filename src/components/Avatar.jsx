import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const Avatar = ({ img, showStatus = false, statusType = 'offline', isBigImg = true }) => {
    return (
        <div className="relative">
            <div className={`${isBigImg ? 'w-10 h-10' : 'w-8 h-8'} flex items-center justify-center bg-gray-100 rounded-full`}>
                {img ? <img src={img} alt='avatar' className={`${isBigImg ? 'w-10 h-10' : 'w-8 h-8 rounded-full'}`} /> : <FaUserCircle color='#615EF0' />}
            </div>
            {showStatus && (
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
        ${statusType.toLowerCase() === 'online' ? 'bg-green-500' : 'bg-gray-300'}`}></span>
            )}
        </div>
    );
};

export default Avatar;