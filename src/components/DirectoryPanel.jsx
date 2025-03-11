import React from 'react';
import Avatar from './Avatar';
import FileItem from './FileItem';

const DirectoryPanel = () => {
    const teamMembers = [
        { name: 'Florencio Dorrance', role: 'Market Development Manager', avatar: '👨' },
        { name: 'Benny Spanbauer', role: 'Area Sales Manager', avatar: '👨' },
        { name: 'Jamel Eusebio', role: 'Administrator', avatar: '👨' },
        { name: 'Lavern Laboy', role: 'Account Executive', avatar: '👨' },
        { name: 'Alfonzo Schuessler', role: 'Proposal Writer', avatar: '👨' },
        { name: 'Daryl Nehls', role: 'Helping Assistant', avatar: '👨' }
    ];

    const files = [
        { name: 'i9.pdf', type: 'PDF', size: '2mb' },
        { name: 'Screenshot-3817.png', type: 'PNG', size: '4mb' },
        { name: 'sharefile.docx', type: 'DOC', size: '568kb' },
        { name: 'Jerry-2020_i-9_Form.xsl', type: 'XSL', size: '24mb' }
    ];

    return (
        <div className="w-64 border-l border-gray-200 overflow-y-auto hidden md:block">
            <h2 className="p-4 text-base font-medium border-b border-gray-200">Directory</h2>

            <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center p-4">
                    <h3 className="text-sm font-medium">Team Members</h3>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">6</span>
                </div>

                <div className="space-y-3 px-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex items-center">
                            <Avatar user={member.name} emoji={member.avatar} />
                            <div className="ml-3">
                                <h4 className="text-sm font-medium">{member.name}</h4>
                                <p className="text-xs text-gray-500">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center p-4">
                    <h3 className="text-sm font-medium">Files</h3>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">125</span>
                </div>

                <div className="space-y-3 px-4">
                    {files.map((file, index) => (
                        <FileItem
                            key={index}
                            name={file.name}
                            type={file.type}
                            size={file.size}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DirectoryPanel;