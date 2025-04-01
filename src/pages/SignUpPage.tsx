import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import BackToHomeLink from "@/components/BackToHomeLink";

<BackToHomeLink />


const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign Up form submitted");
  };

  const handleSocialSignUp = (provider: string) => {
    console.log(`Sign up with ${provider}`);
    // Add your OAuth logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-center mb-2 text-blue-600">
          Create your account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Get started with AI Sellio today!
        </p>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Full Name"
              required
              className="rounded-xl p-3"
            />
            <Input
              type="email"
              placeholder="Email"
              required
              className="rounded-xl p-3"
            />
            <Input
              type="password"
              placeholder="Password"
              required
              className="rounded-xl p-3"
            />
            <Button type="submit" className="w-full p-3 text-lg rounded-xl">
              Get Started
            </Button>
          </form>

          <div className="flex flex-col items-center mt-6 space-y-3">
            <p className="text-gray-500 text-sm">or continue with</p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => handleSocialSignUp("Google")}
              >
                <FcGoogle className="w-5 h-5" />
                Google
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => handleSocialSignUp("Facebook")}
              >
                <FaFacebook className="w-5 h-5 text-blue-600" />
                Facebook
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => handleSocialSignUp("LinkedIn")}
              >
                <FaLinkedin className="w-5 h-5 text-blue-600" />
                LinkedIn
              </Button>
            </div>

            <Link to="/signin" className="text-blue-600 text-sm mt-4">
              Already have an account? Sign In
            </Link>
            <Link to="/" className="text-gray-500 text-sm">
              ← Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
