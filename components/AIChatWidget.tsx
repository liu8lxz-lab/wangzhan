import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquareText, X, Send, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '0', role: 'model', text: '您好！我是英创科研猫智能助手。有什么科研难题我可以帮您解答吗？(例如：Meta分析的流程是什么？)' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY || ''; 
      if (!apiKey) {
        throw new Error("API Key not configured");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: `System Instruction: You are an academic research assistant for 'Yingchuang Research Cat' (英创科研猫). Keep answers concise, professional, and helpful. Focus on academic writing, research methodology, and grant applications. \n\nUser Question: ${inputText}` }] }
        ],
      });

      let fullText = '';
      const modelMsgId = (Date.now() + 1).toString();
      
      // Add placeholder message
      setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: '' }]);

      for await (const chunk of responseStream) {
        const text = chunk.text;
        if (text) {
          fullText += text;
          setMessages(prev => prev.map(msg => 
            msg.id === modelMsgId ? { ...msg, text: fullText } : msg
          ));
        }
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: '抱歉，我现在无法回答。请稍后再试或联系人工客服。', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <Sparkles size={20} />
          <span className="font-medium">AI 科研助手</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col h-[500px] border border-gray-100 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-brand-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles size={18} />
              <h3 className="font-bold">科研猫智能助手</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-brand-700 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="询问关于Meta分析、生信等..."
                className="flex-1 bg-gray-50 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
                className={`p-2 rounded-full ${
                  isLoading || !inputText.trim() 
                    ? 'bg-gray-200 text-gray-400' 
                    : 'bg-brand-600 text-white hover:bg-brand-700'
                } transition-colors`}
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};