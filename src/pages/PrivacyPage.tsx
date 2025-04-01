import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl text-left">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Privacy Policy</h2>
        <p className="text-gray-600 mb-12">Last updated: March 31, 2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              1. Introduction
            </h3>
            <p>
              At AI Sellio, we are committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard your
              personal information.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              2. Information We Collect
            </h3>
            <p>
              We may collect personal information such as your name, email
              address, company details, and payment information when you use our
              platform.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              3. How We Use Your Information
            </h3>
            <p>
              We use your information to provide and improve our services,
              communicate with you, and comply with legal obligations.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              4. Data Sharing & Third Parties
            </h3>
            <p>
              We do not sell or rent your personal data. We may share your
              information with trusted third-party service providers to operate
              our platform.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              5. Data Security
            </h3>
            <p>
              We implement strong security measures to protect your personal
              data against unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              6. Your Rights
            </h3>
            <p>
              You have the right to access, correct, or delete your personal
              information. You can also object to data processing or request data
              portability.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              7. Contact Us
            </h3>
            <p>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at support@aisellio.com.
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

export default PrivacyPage;
