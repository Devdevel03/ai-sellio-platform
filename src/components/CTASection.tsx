
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-brand-500 to-brand-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of businesses using AI Sellio to engage customers, boost conversions, and scale their sales operations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-white text-brand-600 hover:bg-gray-100 text-base px-6 py-6 w-full sm:w-auto"
              size="lg"
              onClick={() => navigate('/register')}
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              className="border-white border-2 text-white hover:bg-white/10 text-base px-6 py-6 w-full sm:w-auto"
              size="lg"
              onClick={() => navigate('/demo')}
            >
              Schedule a Demo
            </Button>
          </div>
          
          <p className="mt-6 text-sm opacity-80">
            No credit card required. 14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
