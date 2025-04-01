
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';
import { Send, Mic, MicOff } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
};

const demoResponses: { [key: string]: string } = {
  default: "Hi there! I'm your AI sales assistant. How can I help you today?",
  greeting: "Hello! I'm Sarah, your AI sales assistant. I'd be happy to tell you about our product features, pricing, or answer any questions you might have!",
  features: "Our platform offers several key features: 1) 24/7 customer engagement, 2) Multilingual support in over 20 languages, 3) Voice and text interaction capabilities, 4) Seamless integration with your existing CRM systems, and 5) Detailed analytics on customer interactions.",
  pricing: "We offer several flexible pricing plans. Our starter plan begins at $49/month and includes one AI agent with basic features. Our Pro plan at $99/month adds analytics and CRM integration. For enterprise needs, we have custom solutions - would you like me to connect you with our sales team?",
  demo: "I'd be happy to give you a demo! I'm actually an example of what your AI sales agent could be like. You can customize my responses, personality, and knowledge base to match your brand. What aspect would you like to know more about?",
  questions: "I'd be happy to answer your questions about our platform. You can ask about features, pricing, implementation, or success stories. What would you like to know?",
};

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your AI sales assistant. How can I help you today?",
      sender: 'agent',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

//  useEffect(() => {
  //  scrollToBottom();
  //}, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      let responseText = demoResponses.default;
      
      // Simple keyword matching
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        responseText = demoResponses.greeting;
      } else if (lowerInput.includes('feature') || lowerInput.includes('offer') || lowerInput.includes('do')) {
        responseText = demoResponses.features;
      } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('plan')) {
        responseText = demoResponses.pricing;
      } else if (lowerInput.includes('demo') || lowerInput.includes('show me') || lowerInput.includes('example')) {
        responseText = demoResponses.demo;
      } else if (lowerInput.includes('question') || lowerInput.includes('help') || lowerInput.includes('ask')) {
        responseText = demoResponses.questions;
      }
      
      const agentMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'agent',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      // This would normally connect to the Web Speech API
      // For the demo, we'll just simulate a voice input after a delay
      setTimeout(() => {
        setInput("Can you tell me about your pricing plans?");
        setIsRecording(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-md mx-auto border rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="bg-brand-500 text-white p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 border-2 border-white">
            <div className="bg-white text-brand-600 font-medium flex items-center justify-center h-full w-full text-sm">
              AI
            </div>
          </Avatar>
          <div>
            <h3 className="font-bold">Sales Assistant</h3>
            <p className="text-xs text-white/80">Online | Responds instantly</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user' 
                  ? 'bg-brand-500 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 shadow-sm rounded-tl-none'
              }`}
            >
              <p>{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-white/80' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-white text-gray-800 rounded-lg rounded-tl-none p-3 shadow-sm max-w-[80%]">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t p-3 bg-white">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleRecording}
            className={isRecording ? "text-red-500" : "text-gray-500"}
          >
            {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <Button 
            onClick={handleSendMessage}
            variant="default"
            size="icon"
            className="bg-brand-500 hover:bg-brand-600"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
