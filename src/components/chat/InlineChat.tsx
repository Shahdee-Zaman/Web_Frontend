import React, { useState, useRef, useEffect } from 'react';
import { CHAT_SYSTEM, SUGGESTIONS } from '../../constants/chat';

interface Message { role: 'user' | 'assistant'; content: string; }

const InlineChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [showSug, setShowSug]   = useState(true);
  const bottomRef               = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setShowSug(false);
    const userMsg: Message = { role: 'user', content: trimmed };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput('');
    setLoading(true);
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: CHAT_SYSTEM,
          messages: history,
          stream: true,
        }),
      });
      const reader  = res.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error('No stream');
      let acc = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        for (const line of decoder.decode(value, { stream: true }).split('\n').filter(l => l.startsWith('data: '))) {
          const raw = line.slice(6).trim();
          if (raw === '[DONE]') continue;
          try {
            const evt = JSON.parse(raw);
            if (evt.type === 'content_block_delta' && evt.delta?.type === 'text_delta') {
              acc += evt.delta.text;
              setMessages(prev => { const u = [...prev]; u[u.length - 1] = { role: 'assistant', content: acc }; return u; });
            }
          } catch { /* skip */ }
        }
      }
    } catch {
      setMessages(prev => { const u = [...prev]; u[u.length - 1] = { role: 'assistant', content: 'Something went wrong � please try again.' }; return u; });
    } finally { setLoading(false); }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input); }
  };

  const isTyping = loading && messages[messages.length - 1]?.content === '';

  return (
    <div className="eo-chat-box">
      <div className="eo-chat-head">
        <div className="eo-chat-head-left">
          <span className="eo-chat-status-dot" />
          <div>
            <p className="eo-chat-head-title">Portfolio Assistant</p>
            <p className="eo-chat-head-sub">Ask about Shahdee's skills &amp; projects</p>
          </div>
        </div>
      </div>

      {showSug && (
        <div className="eo-suggestions">
          {SUGGESTIONS.map(q => <button key={q} className="eo-suggestion" onClick={() => send(q)}>{q}</button>)}
        </div>
      )}

      <div className="eo-chat-messages">
        {messages.length === 0 && (
          <div className="eo-msg eo-msg-bot">Hi! Ask me anything about Shahdee's background, skills, or projects.</div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`eo-msg ${m.role === 'user' ? 'eo-msg-user' : 'eo-msg-bot'}`}>
            {m.content || (m.role === 'assistant' && isTyping && i === messages.length - 1 ? null : '')}
          </div>
        ))}
        {isTyping && <div className="eo-typing"><span /><span /><span /></div>}
        <div ref={bottomRef} />
      </div>

      <div className="eo-chat-input-row">
        <textarea
          className="eo-chat-input" rows={1} placeholder="Ask me anything."
          value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey} disabled={loading}
        />
        <button className="eo-chat-send" onClick={() => send(input)} disabled={!input.trim() || loading} aria-label="Send">?</button>
      </div>
    </div>
  );
};

export default InlineChat;
