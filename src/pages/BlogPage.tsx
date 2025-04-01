import React from "react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "5 Ways AI Sales Agents Boost Your Revenue",
    date: "March 29, 2025",
    excerpt:
      "Discover how AI-powered agents can drastically improve your sales strategy and revenue growth.",
  },
  {
    id: 2,
    title: "Getting Started with AI Sellio in 10 Minutes",
    date: "March 24, 2025",
    excerpt:
      "A quick, step-by-step guide on creating and deploying your first AI Sales Agent effortlessly.",
  },
  {
    id: 3,
    title: "Top 7 Strategies for Effective AI Agent Training",
    date: "March 18, 2025",
    excerpt:
      "Maximize your agent's effectiveness by learning best practices for training and fine-tuning their interactions.",
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
          AI Sellio Blog
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Tips, insights, and strategies to get the most from your AI Sales Agents.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-blue-600">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{post.date}</p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Button variant="outline">Read More →</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
