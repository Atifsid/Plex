import React from 'react';
import NavigationMenu from './NavigationMenu';
import ChatList from './ChatList';
import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

const Sidebar = ({ activeChat, setActiveChat }) => {
    return (
        <div className="flex h-full border-r border-gray-200">
            <NavigationMenu />
            <div className="flex flex-col w-60 border-r border-gray-200">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <div className="flex items-center">
                        <h2 className="text-base font-medium mr-2">Messages</h2>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">12</span>
                    </div>
                    <button className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                        <FaPlus />
                    </button>
                </div>
                <div className="p-2 border-b border-gray-200">
                    <div className="bg-gray-100 rounded-lg px-3 py-2 relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"><IoSearchOutline /></span>
                        <input
                            type="text"
                            placeholder="Search messages"
                            className="w-full bg-transparent border-none outline-none pl-6 text-sm"
                        />
                    </div>
                </div>
                <ChatList activeChat={activeChat} setActiveChat={setActiveChat} />
            </div>
        </div>
    );
}

export default Sidebar;