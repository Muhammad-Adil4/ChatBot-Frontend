import React, { useState, useRef, useEffect } from "react";
import { ChatInput } from "../components/ChatInput";
import { MessageBubble } from "../components/MessageBubble";
import { TypingIndicator } from "../components/TypingIndicator";
import { WelcomeScreen } from "../components/WelcomeScreen";
import { Sparkles } from "lucide-react";
import type { Message } from "../lib/types";

export const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ----------------- Scroll function with offset -----------------
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      // Add 50px offset
      window.scrollBy(0, -50);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // ----------------- Send message -----------------
  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), content: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        content: `AI response to "${userMsg.content}"`,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-[80px]">
        <div className="flex flex-col space-y-4 w-full max-w-3xl mx-auto">
          {messages.length === 0 ? (
            <WelcomeScreen onSuggestionClick={(text) => setInput(text)} />
          ) : (
            messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)
          )}

          {isTyping && (
            <div className="flex gap-4 max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm mt-1">
                <Sparkles size={16} className="text-blue-500 animate-spin-slow" />
              </div>
              <TypingIndicator />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input sticky bottom */}
      <div className="sticky bottom-0 bg-white dark:bg-gray-900 mt-40 p-4 md:p-6">
        <ChatInput
          input={input}
          setInput={setInput}
          onSend={handleSend}
          disabled={false}
        />
      </div>
    </div>
  );
};
