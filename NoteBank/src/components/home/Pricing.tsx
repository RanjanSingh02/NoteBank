import React from 'react';
import { Check, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    description: 'Basic access to study materials with ads',
    features: [
      { text: 'Read-only access to notes', included: true },
      { text: 'Basic search functionality', included: true },
      { text: 'Ad-supported experience', included: true },
      { text: 'Create account & bookmark notes', included: true },
      { text: 'Download notes', included: false },
      { text: 'Ad-free experience', included: false },
      { text: 'Advanced search filters', included: false },
      { text: 'Early access to new notes', included: false },
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline',
    popular: false,
  },
  {
    name: 'Premium',
    price: '₹49',
    period: 'per month',
    description: 'Enhanced learning experience without limitations',
    features: [
      { text: 'Read-only access to notes', included: true },
      { text: 'Basic search functionality', included: true },
      { text: 'Ad-free experience', included: true },
      { text: 'Create account & bookmark notes', included: true },
      { text: 'Download unlimited notes', included: true },
      { text: 'Advanced search filters', included: true },
      { text: 'Early access to new notes', included: true },
      { text: 'Priority support', included: true },
    ],
    buttonText: 'Subscribe Now',
    buttonVariant: 'primary',
    popular: true,
    highlight: '₹399/year (Save 32%)',
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that works best for you. All premium subscriptions help support our contributors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden relative ${
                plan.popular ? 'ring-2 ring-sky-500 transform md:-translate-y-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-sky-500 text-white text-sm py-1 px-3 absolute top-0 right-0 rounded-bl-lg font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                
                {plan.highlight && (
                  <div className="bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 text-sm py-2 px-4 rounded-lg mb-6">
                    {plan.highlight}
                  </div>
                )}
                
                <Button 
                  variant={plan.buttonVariant as 'primary' | 'outline'} 
                  size="lg" 
                  fullWidth
                >
                  {plan.buttonText}
                </Button>
              </div>
              
              <div className="p-6 md:p-8 bg-gray-50 dark:bg-gray-700/30">
                <h4 className="font-medium mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? '' : 'text-gray-500'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;