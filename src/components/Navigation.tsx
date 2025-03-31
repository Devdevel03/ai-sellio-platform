
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold gradient-text">AI Sellio</span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/features" className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium">
                Pricing
              </Link>
              <div className="relative group">
                <button className="text-gray-700 group-hover:text-brand-600 px-3 py-2 text-sm font-medium inline-flex items-center">
                  <span>Resources</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-0 pt-2 w-48 opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="py-1">
                      <Link to="/docs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Documentation</Link>
                      <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</Link>
                      <Link to="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/login')}
              className="text-gray-700"
            >
              Sign in
            </Button>
            <Button 
              variant="default" 
              onClick={() => navigate('/register')}
              className="bg-brand-500 hover:bg-brand-600"
            >
              Get Started
            </Button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-2">
            <Link 
              to="/features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/docs" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/support" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 px-4 flex flex-col space-y-3">
            <Button 
              variant="outline" 
              onClick={() => {
                navigate('/login');
                setIsMenuOpen(false);
              }}
              className="w-full justify-center"
            >
              Sign in
            </Button>
            <Button 
              variant="default" 
              onClick={() => {
                navigate('/register');
                setIsMenuOpen(false);
              }}
              className="w-full justify-center bg-brand-500 hover:bg-brand-600"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
