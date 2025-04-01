import React from "react";
import { Button } from "@/components/ui/button";

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Simple Pricing for Every Business
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Choose a plan that suits your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-gray-600 mb-6">
              Perfect for individuals or small teams getting started.
            </p>
            <p className="text-4xl font-bold mb-4">
              $19<span className="text-base font-normal">/mo</span>
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>✅ Up to 3 AI Sales Agents</li>
              <li>✅ Basic Analytics</li>
              <li>✅ Email Support</li>
            </ul>
            <Button className="mt-auto">Get Started</Button>
          </div>

          {/* Pro Plan */}
          <div className="bg-blue-600 text-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">Pro</h3>
            <p className="mb-6">
              Best value for growing businesses looking to scale.
            </p>
            <p className="text-4xl font-bold mb-4">
              $49<span className="text-base font-normal">/mo</span>
            </p>
            <ul className="mb-6 space-y-2">
              <li>✅ Up to 15 AI Sales Agents</li>
              <li>✅ Advanced Analytics</li>
              <li>✅ Priority Support</li>
              <li>✅ Custom Integrations</li>
            </ul>
            <Button className="mt-auto bg-white text-blue-600 hover:bg-gray-100">
              Choose Pro
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
            <p className="text-gray-600 mb-6">
              Fully customizable solution for large businesses.
            </p>
            <p className="text-4xl font-bold mb-4">Custom
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>✅ Unlimited AI Sales Agents</li>
              <li>✅ Enterprise Analytics</li>
              <li>✅ Dedicated Support</li>
              <li>✅ Tailored Integrations</li>
            </ul>
            <Button className="mt-auto">Contact Sales</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
