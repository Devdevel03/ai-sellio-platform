import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Lock, Database, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const securityFeatures = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Data Encryption",
    description:
      "All user data and conversations are encrypted in transit and at rest, following industry best practices.",
  },
  {
    icon: <Lock className="w-6 h-6 text-blue-600" />,
    title: "Access Control",
    description:
      "Only authorized users have access to your AI agents, settings, and sensitive information.",
  },
  {
    icon: <Database className="w-6 h-6 text-blue-600" />,
    title: "GDPR & Compliance",
    description:
      "We fully comply with GDPR and data privacy regulations to ensure your customers' data is handled responsibly.",
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-blue-600" />,
    title: "Real-time Monitoring",
    description:
      "Our platform is monitored 24/7 to detect and respond to any unusual activity or security threats.",
  },
];

const SecurityPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Security & Privacy</h2>
        <p className="text-gray-500 mb-12">
          Your data is safe with us. We prioritize security at every level of our platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {securityFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              {feature.icon}
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
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

export default SecurityPage;
