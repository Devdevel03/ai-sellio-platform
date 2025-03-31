
import { Avatar } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Sales, TechCorp',
    avatar: 'SC',
    content: 'The AI Sales Agent has been a game-changer for our team. We\'ve seen a 40% increase in qualified leads and our sales reps can focus on high-value activities instead of repetitive tasks.',
  },
  {
    name: 'Michael Johnson',
    role: 'E-commerce Director, Retail Plus',
    avatar: 'MJ',
    content: 'Implementing these AI agents on our website increased our conversion rate by 28% in just two months. The multilingual support has also helped us expand into new markets effortlessly.',
  },
  {
    name: 'Sophia Williams',
    role: 'Customer Success Manager, SaaS Solutions',
    avatar: 'SW',
    content: 'Our customers love the instant responses they get from our AI agent. The handoff between AI and human agents is seamless, and our team now handles 3x more inquiries with the same headcount.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">What Our Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how AI Sellio is transforming sales processes for businesses around the world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-12 w-12 bg-brand-100 text-brand-700">
                  <span className="text-lg font-medium">{testimonial.avatar}</span>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8">
            <img src="https://dummyimage.com/120x40/e0e0e0/999999&text=COMPANY+LOGO" alt="Client logo" className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://dummyimage.com/120x40/e0e0e0/999999&text=COMPANY+LOGO" alt="Client logo" className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://dummyimage.com/120x40/e0e0e0/999999&text=COMPANY+LOGO" alt="Client logo" className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://dummyimage.com/120x40/e0e0e0/999999&text=COMPANY+LOGO" alt="Client logo" className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://dummyimage.com/120x40/e0e0e0/999999&text=COMPANY+LOGO" alt="Client logo" className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
