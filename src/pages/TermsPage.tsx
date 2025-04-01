import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TermsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl text-left">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          Terms & Conditions
        </h2>
        <p className="text-gray-600 mb-12">
          Last updated: March 31, 2025
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              1. Introduction
            </h3>
            <p>
              By accessing and using the AI Sellio platform, you agree to comply with these Terms and Conditions. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              2. Use of the Platform
            </h3>
            <p>
              You must use the AI Sellio platform only for lawful purposes and in compliance with all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              3. User Accounts
            </h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account is your responsibility.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              4. Data & Privacy
            </h3>
            <p>
              We collect and process your personal data according to our Privacy Policy. By using our platform, you consent to this processing.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              5. Intellectual Property
            </h3>
            <p>
              All content, branding, and technology related to AI Sellio are the intellectual property of our company and may not be copied or used without permission.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              6. Termination
            </h3>
            <p>
              We reserve the right to suspend or terminate your account if you violate these Terms & Conditions.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              7. Changes to Terms
            </h3>
            <p>
              We may update these Terms & Conditions from time to time. We will notify you of any significant changes.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Button variant="default" onClick={() => navigate("/")}>
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
