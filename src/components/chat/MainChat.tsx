import React from 'react';
import InlineChat from './InlineChat';

const MainChat: React.FC = () => (
  <section id="chat" className="eo-chat-section">
    <p className="eo-sec-label">Portfolio Assistant</p>
    <InlineChat />
  </section>
);

export default MainChat;
