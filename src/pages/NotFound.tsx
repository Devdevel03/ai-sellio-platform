
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-16 sm:px-6 sm:py-24 md:py-32 lg:px-8">
          <h1 className="text-6xl font-extrabold text-brand-500 sm:text-8xl">404</h1>
          <p className="mt-2 text-2xl font-semibold text-gray-900">Page not found</p>
          <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
          <div className="mt-10">
            <Button 
              onClick={() => navigate('/')}
              className="bg-brand-500 hover:bg-brand-600"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
