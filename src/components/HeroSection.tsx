
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <div className="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="gradient-text">
                AI Sales Agents
              </span> that convert
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Create fully customizable AI Sales Agents capable of engaging, informing, and converting potential clients in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => navigate('/register')}
                className="bg-brand-500 hover:bg-brand-600 text-base px-6 py-6"
                size="lg"
              >
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/demo')}
                className="border-brand-300 text-brand-700 hover:bg-brand-50 text-base px-6 py-6"
                size="lg"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-green-500 mr-2" fill="currentColor">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
              </svg>
              <span>No credit card required</span>
              
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-green-500 ml-6 mr-2" fill="currentColor">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
              </svg>
              <span>14-day free trial</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-100 to-brand-200 transform rotate-3 rounded-xl"></div>
              <div className="relative bg-white p-4 shadow-xl rounded-xl">
                <ChatPreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="bg-brand-500 text-white p-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-brand-500 font-semibold">AI</span>
          </div>
          <div>
            <p className="font-medium">Sales Assistant</p>
            <p className="text-xs opacity-80">Online</p>
          </div>
        </div>
        <button className="text-white text-sm border border-white/30 px-2 py-1 rounded hover:bg-white/10">
          Support 24/7
        </button>
      </div>
      <div className="bg-gray-50 p-3 h-64 overflow-y-auto">
        <div className="flex mb-3">
          <div className="max-w-[80%] bg-white p-2 rounded-lg shadow-sm text-sm">
            <p>Hi there! 👋 I'm Sarah, your AI sales assistant. How can I help you today?</p>
            <p className="text-xs text-gray-500 mt-1">9:05 AM</p>
          </div>
        </div>
        <div className="flex justify-end mb-3">
          <div className="max-w-[80%] bg-brand-500 p-2 rounded-lg text-white text-sm">
            <p>Hi Sarah! Can you tell me about your pricing plans?</p>
            <p className="text-xs opacity-80 mt-1">9:06 AM</p>
          </div>
        </div>
        <div className="flex mb-3">
          <div className="max-w-[80%] bg-white p-2 rounded-lg shadow-sm text-sm">
            <p>We offer several flexible pricing plans:</p>
            <ul className="list-disc pl-5 my-1">
              <li>Starter: $49/mo - 1 AI agent, basic features</li>
              <li>Pro: $99/mo - 3 AI agents, analytics, CRM integration</li>
              <li>Enterprise: Custom pricing for larger teams</li>
            </ul>
            <p>All plans come with a 14-day free trial. Would you like me to explain the features in more detail?</p>
            <p className="text-xs text-gray-500 mt-1">9:06 AM</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-3 border-t">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-300"
          />
          <button className="bg-brand-500 text-white px-4 py-2 rounded-r-md">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" strokeLinejoin="round" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
