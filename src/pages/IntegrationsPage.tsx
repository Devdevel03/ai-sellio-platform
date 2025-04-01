import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plug, Mail, Headphones, Calendar } from "lucide-react";

const integrations = [
  {
    icon: <Plug className="w-6 h-6 text-blue-600" />,
    title: "API Integrations",
    description:
      "Easily integrate your AI Sales Agents into your website, apps, or CRM systems using our developer-friendly API.",
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    title: "Email & Chat Channels",
    description:
      "Connect your agents to popular email services and chat widgets to engage with clients in real-time.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-blue-600" />,
    title: "Voice & Call Systems",
    description:
      "Integrate with telephony platforms to enable inbound and outbound voice calls through your AI agents.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-blue-600" />,
    title: "CRM & Scheduling Tools",
    description:
      "Sync with HubSpot, Calendly, and other tools to automatically book meetings and update CRM records.",
  },
];

const IntegrationsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Integrations</h2>
        <p className="text-gray-500 mb-12">
          Seamlessly connect AI Sellio with your favorite platforms and tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {integrations.map((integration, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              {integration.icon}
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {integration.title}
                </h3>
                <p className="text-gray-600">{integration.description}</p>
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

export default IntegrationsPage;
