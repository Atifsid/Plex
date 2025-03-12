import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import DirectoryPanel from './components/DirectoryPanel';
import user1 from "/user1.png";
import user2 from "/user2.png";
import user3 from "/user3.png";
import user4 from "/user4.png";
import user5 from "/user5.png";
import user6 from "/user6.png";

const chatList = [
  {
    id: 1,
    name: 'Elmer Laverty',
    lastMessage: 'Haha oh man 🔥',
    time: '12m',
    tags: [
      { text: 'Question', color: 'orange' },
      { text: 'Help wanted', color: 'green' }
    ],
    avatar: user1
  },
  {
    id: 2,
    name: 'Florencio Dorrance',
    lastMessage: 'woohoooo',
    time: '24m',
    tags: [{ text: 'Some content', color: 'gray' }],
    avatar: user2
  },
  {
    id: 3,
    name: 'Lavern Laboy',
    lastMessage: 'Haha that\'s terrifying 😂',
    time: '1h',
    tags: [
      { text: 'Bug', color: 'orange' },
      { text: 'Hacktoberfest', color: 'green' }
    ],
    avatar: user3
  },
  {
    id: 4,
    name: 'Titus Kitamura',
    lastMessage: 'omg, this is amazing',
    time: '5h',
    tags: [
      { text: 'Question', color: 'orange' },
      { text: 'Some content', color: 'gray' }
    ],
    avatar: user4
  },
  {
    id: 5,
    name: 'Geoffrey Mott',
    lastMessage: 'ayy 👌',
    time: '2d',
    tags: [{ text: 'Request', color: 'green' }],
    avatar: user5
  },
  {
    id: 6,
    name: 'Alfonzo Schuessler',
    lastMessage: 'perfect!',
    time: '1m',
    tags: [{ text: 'Follow up', color: 'gray' }],
    avatar: user6
  }
];

function App() {
  const [activeChat, setActiveChat] = useState('Florencio Dorrance');

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary p-4">
      <div className="flex max-w-[1600px] w-main-width h-main-height bg-white rounded-xl overflow-hidden shadow-lg">
        <Sidebar activeChat={activeChat} setActiveChat={setActiveChat} />
        <ChatArea activeChatUser={activeChat} />
        {/* <DirectoryPanel /> */}
      </div>
    </div>
  )
}

export default App
