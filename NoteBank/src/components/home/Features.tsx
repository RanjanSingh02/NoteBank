import React from 'react';
import { FileText, Download, DollarSign, Search, Shield, BookOpen } from 'lucide-react';
import Container from '../ui/Container';

const featureItems = [
  {
    icon: <FileText className="h-10 w-10 text-sky-500" />,
    title: 'Quality Study Material',
    description: 'Access comprehensive, well-structured notes created by top students and professors across India.'
  },
  {
    icon: <Download className="h-10 w-10 text-green-500" />,
    title: 'Easy Downloads',
    description: 'Premium members can download notes for offline studying, perfect for exam preparation on-the-go.'
  },
  {
    icon: <DollarSign className="h-10 w-10 text-yellow-500" />,
    title: 'Earn While You Learn',
    description: 'Share your notes and earn money for every view, download, and like your content receives.'
  },
  {
    icon: <Search className="h-10 w-10 text-purple-500" />,
    title: 'Advanced Search',
    description: 'Find exactly what you need with powerful filtering by subject, stream, semester, and more.'
  },
  {
    icon: <Shield className="h-10 w-10 text-red-500" />,
    title: 'Quality Assurance',
    description: 'All content is reviewed by our team to ensure accuracy and educational value before being published.'
  },
  {
    icon: <BookOpen className="h-10 w-10 text-indigo-500" />,
    title: 'Ad-Free Experience',
    description: 'Premium subscribers enjoy an ad-free learning environment for uninterrupted studying.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NoteBank?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our platform offers a unique combination of quality education resources and earning opportunities for students across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;