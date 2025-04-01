import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const supportOptions = [
  {
    icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
    title: "Live Chat",
    description: "Chat with our support team 24/7 for quick assistance.",
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    title: "Email Support",
    description: "Send us an email and get a reply within 24 hours.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: "Documentation",
    description: "Read our detailed documentation to get started and troubleshoot issues.",
    link: "/docs",
  },
];

const SupportPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Need Help?</h2>
        <p className="text-gray-500 mb-12">
          We're here to help you get the most out of AI Sellio. Choose an option below:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {supportOptions.map((option, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
              {option.icon}
              <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              {option.link && (
                <Button variant="outline" onClick={() => navigate(option.link)}>
                  View
                </Button>
              )}
            </div>
          ))}
        </div>

        <Button variant="default" onClick={() => navigate("/")}>
          ← Back to Home
        </Button>
      </div>
    </div>
  );
};

export default SupportPage;
