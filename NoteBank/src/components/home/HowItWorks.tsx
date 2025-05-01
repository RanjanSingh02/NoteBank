import React from 'react';
import { Upload, Download, DollarSign, BookOpen } from 'lucide-react';
import Container from '../ui/Container';

const steps = [
  {
    icon: <Upload className="h-12 w-12 text-sky-500" />,
    title: 'Upload Your Notes',
    description: 'Share your study materials, summaries, assignments, or any educational content.',
    color: 'bg-sky-100 dark:bg-sky-900/30',
    number: '1'
  },
  {
    icon: <BookOpen className="h-12 w-12 text-green-500" />,
    title: 'Help Other Students',
    description: 'Your notes get viewed and used by students across Indian colleges and universities.',
    color: 'bg-green-100 dark:bg-green-900/30',
    number: '2'
  },
  {
    icon: <Download className="h-12 w-12 text-yellow-500" />,
    title: 'Track Performance',
    description: 'Monitor views, downloads, and ratings your study materials receive.',
    color: 'bg-yellow-100 dark:bg-yellow-900/30',
    number: '3'
  },
  {
    icon: <DollarSign className="h-12 w-12 text-purple-500" />,
    title: 'Earn Real Money',
    description: 'Get paid ₹0.10 per view, ₹0.50 per download, and ₹0.05 per like.',
    color: 'bg-purple-100 dark:bg-purple-900/30',
    number: '4'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How NoteBank Works</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Turn your study notes into income in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`p-8 rounded-lg ${step.color} flex flex-col items-center text-center`}>
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md border-2 border-gray-200 dark:border-gray-700">
                  <span className="font-bold text-lg">{step.number}</span>
                </div>
                <div className="mb-5">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 text-gray-300 dark:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;