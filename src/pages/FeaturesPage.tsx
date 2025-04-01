import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Fully Customizable AI Agents",
    description:
      "Create agents with custom names, voices, tones, and multilingual capabilities tailored for your business.",
  },
  {
    title: "Real-time Engagement",
    description:
      "Engage potential clients instantly via chat, voice, and email channels, integrated seamlessly into your websites or apps.",
  },
  {
    title: "Agent Training",
    description:
      "Train agents by uploading your sales materials, FAQs, objection handling scripts, and product knowledge base.",
  },
  {
    title: "Central Dashboard",
    description:
      "Effortlessly manage multiple AI agents, view interactions, conversions, and customer insights in one central place.",
  },
  {
    title: "Multichannel Deployment",
    description:
      "Deploy AI agents across websites, landing pages, social media, or through custom API integrations.",
  },
  {
    title: "Built-in Analytics",
    description:
      "Track conversations, conversions, lead quality, and get actionable insights to refine your sales strategy.",
  },
  {
    title: "Flexible Conversation Flows",
    description:
      "Create dynamic conversation scripts including intros, qualification questions, objection handling, FAQs, and calls to action.",
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect seamlessly with your CRM, scheduling tools (Calendly, HubSpot), and customer databases for effortless follow-ups.",
  },
  {
    title: "Human Escalation & Fallbacks",
    description:
      "Set logic for seamless escalation to human agents when specific triggers occur or when complex inquiries are detected.",
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
          AI Sellio Features
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-3xl mx-auto">
          Empower your sales, support, and customer success teams with powerful, intelligent AI agents designed to convert, engage, and inform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-500 mr-2" />
                <h3 className="text-xl font-semibold text-blue-600">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="px-8 py-4 text-lg" onClick={() => window.location.href = "/register"}>
            Get Started Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
