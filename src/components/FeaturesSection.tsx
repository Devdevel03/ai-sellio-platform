
import { Card } from '@/components/ui/card';
import { MessageSquare, Globe, Volume2, BarChart3, Cpu, Database } from 'lucide-react';

const features = [
  {
    title: "Multi-Channel Communication",
    description: "Engage with customers via chat, voice, and email interfaces for a seamless experience across all touchpoints.",
    icon: <MessageSquare className="h-10 w-10 text-brand-500" />,
  },
  {
    title: "Multilingual Support",
    description: "Break language barriers with AI agents that communicate fluently in over 20 languages to expand your global reach.",
    icon: <Globe className="h-10 w-10 text-brand-500" />,
  },
  {
    title: "Voice-Enabled Interactions",
    description: "Create more natural conversations with advanced voice recognition and text-to-speech capabilities.",
    icon: <Volume2 className="h-10 w-10 text-brand-500" />,
  },
  {
    title: "Performance Analytics",
    description: "Gain insights with detailed metrics on user interactions, conversions, and sales performance over time.",
    icon: <BarChart3 className="h-10 w-10 text-brand-500" />,
  },
  {
    title: "Advanced AI Training",
    description: "Easily train your agent with product information, FAQs, and sales strategies through our intuitive interface.",
    icon: <Cpu className="h-10 w-10 text-brand-500" />,
  },
  {
    title: "CRM Integration",
    description: "Seamlessly connect with your existing tools including Salesforce, HubSpot, and Zoho for unified data management.",
    icon: <Database className="h-10 w-10 text-brand-500" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span> for Modern Sales Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI Sales Agents combine cutting-edge technology with sales expertise
            to deliver exceptional customer experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
