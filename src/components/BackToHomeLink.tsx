import React from "react";
import { Link } from "react-router-dom";

const BackToHomeLink: React.FC = () => {
  return (
    <Link
      to="/"
      className="text-gray-500 text-sm"
      onClick={() => window.scrollTo(0, 0)}
    >
      ← Back to Home
    </Link>
  );
};

export default BackToHomeLink;
