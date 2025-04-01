import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DemoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          Watch AI Sellio in Action
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Discover how our AI Sales Agents engage, inform, and convert clients in real-time. Watch the demo below to see it in action.
        </p>

        {/* Demo Video Embed */}
        <div className="aspect-w-16 aspect-h-9 mb-12">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your real demo video link
            title="AI Sellio Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg w-full h-full"
          ></iframe>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Ready to build your AI Sales Agent?</h3>
        <Button
          className="px-8 py-4 text-lg mb-6"
          onClick={() => navigate("/register")}
        >
          Get Started for Free
        </Button>

        <div className="mt-4">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
