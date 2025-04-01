import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "1. Create Your Account",
    description: "Sign up for free and access your personal dashboard.",
  },
  {
    title: "2. Set Up Your AI Sales Agent",
    description:
      "Define your agent’s name, voice, communication tone, and supported languages.",
  },
  {
    title: "3. Train Your Agent",
    description:
      "Upload product information, sales materials, FAQs, and objection-handling strategies to prepare your agent.",
  },
  {
    title: "4. Deploy Across Channels",
    description:
      "Use chat, voice, and email integrations to connect your agent with potential clients in real-time.",
  },
  {
    title: "5. Monitor & Improve",
    description:
      "Track your agent’s performance using the built-in analytics and refine it for better results.",
  },
];

const GuidePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Getting Started Guide</h2>
        <p className="text-gray-500 mb-12">
          Follow these simple steps to launch your AI Sales Agent and start converting clients.
        </p>

        <div className="space-y-8 text-left">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button onClick={() => navigate("/")}>← Back to Home</Button>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
