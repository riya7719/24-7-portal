import React, { useState, useEffect, useRef } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./chatbot.css";

const VoiceChatbot = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! How can I help you today?", time: new Date() }
  ]);
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Bot speak
  const speak = (text) => {
    const voice = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    voice.voice =
      voices.find((v) => v.name.toLowerCase().includes("female")) || voices[0];
    window.speechSynthesis.speak(voice);
  };

  // Smart bot logic
  const getBotReply = (userMsg) => {
    const msgLower = userMsg.toLowerCase();
    if (msgLower.includes("hi") || msgLower.includes("hello")) return "Hi there! How can I assist you?";
    if (msgLower.includes("pricing")) return "Our pricing plans start from ₹5000 per seat. You can enquire for exact details.";
    if (msgLower.includes("book") || msgLower.includes("enquire")) return "Sure! You can click 'Book Now' on the workspace page or tell me your requirement.";
    return "Our assistant will contact you soon!";
  };

  // Send message
  const handleSend = () => {
    if (!msg.trim()) return;
    const userMsg = msg.trim();
    setMessages((prev) => [...prev, { from: "user", text: userMsg, time: new Date() }]);
    setMsg("");
    setTyping(true);

    setTimeout(() => {
      const botReply = getBotReply(userMsg);
      setMessages((prev) => [...prev, { from: "bot", text: botReply, time: new Date() }]);
      speak(botReply);
      setTyping(false);
    }, 800);
  };

  // Enter key to send
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="chat-icon-left" onClick={() => setOpen(!open)}>
        <BsFillChatDotsFill size={28} />
      </div>

      {open && (
        <div className="chat-box-left animate-popup">
          <div className="chat-header">
            <span>Assistant</span>
            <span className="close-chat" onClick={() => setOpen(false)}>×</span>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`message ${m.from}`}>
                <div className="icon">
                  {m.from === "bot" ? <BsFillChatDotsFill /> : <FaUserCircle />}
                </div>
                <div className="text">
                  {m.text}
                  <span className="time">{m.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
            ))}
            {typing && (
              <div className="message bot">
                <div className="icon"><BsFillChatDotsFill /></div>
                <div className="text typing">Typing...</div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-footer">
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </>
  );
};

export default VoiceChatbot;
