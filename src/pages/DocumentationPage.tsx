import React from "react";

const docsSections = [
  {
    title: "Getting Started",
    content: [
      "Creating your account",
      "Setting up your first AI Sales Agent",
      "Quick-start deployment guide",
    ],
  },
  {
    title: "Agent Customization",
    content: [
      "Choosing agent identity",
      "Defining languages and voice",
      "Adjusting tone & style guidelines",
    ],
  },
  {
    title: "Training Your Agent",
    content: [
      "Uploading product & service data",
      "Preparing FAQs & objection handling",
      "Using scripts and conversation flows",
    ],
  },
  {
    title: "Deployment",
    content: [
      "Web integration (embed & API)",
      "Voice channel setup",
      "Email and chat integrations",
    ],
  },
  {
    title: "Analytics & Insights",
    content: [
      "Understanding your dashboard",
      "Analyzing conversions and lead quality",
      "Exporting data & reports",
    ],
  },
  {
    title: "Support & Escalation",
    content: [
      "Setting escalation triggers",
      "Human fallback logic",
      "Best practices for customer support",
    ],
  },
];

const DocumentationPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
          AI Sellio Documentation
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Find everything you need to set up, customize, and optimize your AI Sales Agents.
        </p>

        <div className="space-y-8">
          {docsSections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                {section.title}
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {section.content.map((item, idx2) => (
                  <li key={idx2}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
