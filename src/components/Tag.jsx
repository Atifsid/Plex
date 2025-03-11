import React from 'react';

const Tag = ({ text, color }) => {
    const getColorClasses = (colorName) => {
        switch (colorName) {
            case 'orange': return 'bg-orange-100 text-orange-600';
            case 'green': return 'bg-green-100 text-green-600';
            case 'gray':
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <span className={`text-xs px-2 py-0.5 rounded-md ${getColorClasses(color)}`}>
            {text}
        </span>
    );
};

export default Tag;