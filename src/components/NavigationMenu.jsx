import React from 'react';
import { IoChatbubbleOutline, IoChatbubbleSharp } from "react-icons/io5";
import { BsGear } from "react-icons/bs";

const NavigationMenu = () => {
    const navItems = [
        { activeIcon: <IoChatbubbleSharp size={18} />, inactiveIcon: <IoChatbubbleOutline size={18} />, label: 'Chat', active: true }
    ];

    return (
        <div className="w-16 bg-gray-50 flex flex-col items-center py-4">
            <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl mb-6">
                P
            </div>
            <nav className="flex flex-col gap-4 flex-1">
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer
            ${item.active ? 'bg-gray-200 text-primary' : 'text-gray-500'}`}
                    >
                        {item.active ? <span>{item.activeIcon}</span> : <span>{item.inactiveIcon}</span>}
                    </div>
                ))}
            </nav>
            <div className="text-gray-500 cursor-pointer mt-4"><BsGear size={18} /></div>
        </div>
    );
};

export default NavigationMenu;