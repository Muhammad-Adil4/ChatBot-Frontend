import React, { useRef, useEffect } from 'react';
import { Plus, Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, onSend, disabled }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="absolute bottom-0 left-0 w-full bg-[#0e0f12] pt-2 pb-2 px-4">
      <div className="max-w-4xl mx-auto relative">
        <div className="bg-[#1c1f24] rounded-[2rem] flex items-end p-2 md:p-3 shadow-inner focus-within:ring-1 focus-within:ring-blue-600 transition-all">
          
          <button className="p-3 text-gray-400 hover:bg-gray-700 rounded-full transition-colors hidden md:block">
            <Plus size={20} />
          </button>

          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a prompt here"
            rows={1}
            className="flex-1 bg-transparent border-none focus:ring-0 resize-none py-3 px-2 md:px-4 max-h-48 overflow-y-auto text-gray-200 placeholder-gray-500 outline-none"
          />

          <div className="flex items-center gap-1 pb-1">
            <button 
              onClick={onSend}
              disabled={disabled || !input.trim()}
              className={`p-3 rounded-full transition-all duration-300 ${
                input.trim() 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' 
                  : 'bg-transparent text-gray-500 cursor-not-allowed'
              }`}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
        
        <div className="text-center mt-2">
           <p className="text-[10px] md:text-xs text-gray-500">
             Gemini may display inaccurate info, including about people, so double-check its responses.
           </p>
        </div>
      </div>
    </div>
  );
};
