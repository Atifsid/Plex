import React from 'react';

const FileItem = ({ name, type, size }) => {
    const getFileColorClasses = (fileType) => {
        switch (fileType.toLowerCase()) {
            case 'pdf': return 'text-red-500 bg-red-50';
            case 'png':
            case 'jpg': return 'text-green-500 bg-green-50';
            case 'doc':
            case 'docx': return 'text-blue-500 bg-blue-50';
            case 'xls':
            case 'xlsx':
            case 'xsl': return 'text-purple-500 bg-purple-50';
            default: return 'text-gray-500 bg-gray-50';
        }
    };

    const getFileIcon = (fileType) => {
        switch (fileType.toLowerCase()) {
            case 'pdf': return '📕';
            case 'png':
            case 'jpg': return '🖼️';
            case 'doc':
            case 'docx': return '📄';
            case 'xls':
            case 'xlsx':
            case 'xsl': return '📊';
            default: return '📁';
        }
    };

    return (
        <div className="flex items-center">
            <div className={`w-8 h-8 flex items-center justify-center rounded-md ${getFileColorClasses(type)}`}>
                {getFileIcon(type)}
            </div>
            <div className="ml-3 flex-1 min-w-0">
                <h4 className="text-sm font-medium truncate">{name}</h4>
                <p className="text-xs text-gray-500">{type} · {size}</p>
            </div>
            <button className="text-blue-500">⬇️</button>
        </div>
    );
};

export default FileItem;