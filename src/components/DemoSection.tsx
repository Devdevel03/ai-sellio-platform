
import { Button } from '@/components/ui/button';
import ChatDemo from './ChatDemo';
import { Link, useNavigate } from "react-router-dom";


export default function DemoSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">See It In Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Try our interactive demo to experience how your AI sales agent could engage with potential customers.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Interact with our Demo Agent</h3>
            <p className="text-gray-600 mb-6">
              This demo shows how your AI Sales Agent would interact with customers. Try asking about:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3">
                  <span className="text-sm font-medium">1</span>
                </div>
                <span className="text-gray-700">Features and capabilities</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3">
                  <span className="text-sm font-medium">2</span>
                </div>
                <span className="text-gray-700">Pricing information</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3">
                  <span className="text-sm font-medium">3</span>
                </div>
                <span className="text-gray-700">How the demo works</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3">
                  <span className="text-sm font-medium">4</span>
                </div>
                <span className="text-gray-700">Ask for help or general questions</span>
              </li>
            </ul>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 mb-8">
              <p className="text-sm text-gray-500">
                <strong className="text-gray-800">Pro tip:</strong> Try using the microphone icon to test voice interaction (simulated in this demo).
              </p>
            </div>
            
            <div>
          <Link to="/create-agent">
                <Button className="bg-brand-500 hover:bg-brand-600">
                    Create Your Own AI Agent
                </Button>
          </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <ChatDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
