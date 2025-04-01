import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign In form submitted");
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Sign in with ${provider}`);
    // Here you can trigger your OAuth logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-center mb-2 text-blue-600">
          Sign in to AI Sellio
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Welcome back! Please enter your credentials.
        </p>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
              Sign In
            </Button>
          </form>

          <div className="flex flex-col items-center mt-6 space-y-3">
            <p className="text-gray-500 text-sm">or continue with</p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => handleSocialLogin("Google")}
              >
                <FcGoogle className="w-5 h-5" />
                Google
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => handleSocialLogin("Facebook")}
              >
                <FaFacebook className="w-5 h-5 text-blue-600" />
                Facebook
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => handleSocialLogin("LinkedIn")}
              >
                <FaLinkedin className="w-5 h-5 text-blue-600" />
                LinkedIn
              </Button>
            </div>

            <Link to="/register" className="text-blue-600 text-sm mt-4">
              Don’t have an account? Get Started
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

export default SignInPage;
