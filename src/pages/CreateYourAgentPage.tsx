import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const CreateYourAgentPage: React.FC = () => {
  const navigate = useNavigate();
  const [agentName, setAgentName] = useState("");
  const [voice, setVoice] = useState("");
  const [tone, setTone] = useState("");
  const [languages, setLanguages] = useState("");
  const [productInfo, setProductInfo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      agentName,
      voice,
      tone,
      languages,
      productInfo,
    });
    navigate("/"); // Redirect to homepage or dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 p-4">
      <Card className="w-full max-w-lg shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-center mb-2 text-blue-600">
          Create Your AI Agent
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Customize your agent to match your brand & sales goals.
        </p>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Agent Name"
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              required
              className="rounded-xl p-3"
            />

            <Select onValueChange={(value) => setVoice(value)}>
              <SelectTrigger className="rounded-xl p-3">
                <SelectValue placeholder="Select Voice" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Neutral">Neutral</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => setTone(value)}>
              <SelectTrigger className="rounded-xl p-3">
                <SelectValue placeholder="Select Tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Friendly">Friendly</SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
                <SelectItem value="Casual">Casual</SelectItem>
              </SelectContent>
            </Select>

            <Input
              type="text"
              placeholder="Supported Languages (comma separated)"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              required
              className="rounded-xl p-3"
            />

            <Textarea
              placeholder="Paste your product information, sales material, or FAQs here..."
              value={productInfo}
              onChange={(e) => setProductInfo(e.target.value)}
              className="rounded-xl p-3"
              rows={4}
            />

            <Button type="submit" className="w-full p-3 text-lg rounded-xl">
              Save Agent & Continue
            </Button>
          </form>

          <div className="text-center mt-4">
            <Button variant="ghost" onClick={() => navigate("/")}>
              ← Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateYourAgentPage;
