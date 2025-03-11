import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import DirectoryPanel from './components/DirectoryPanel';

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
