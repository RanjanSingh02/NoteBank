import React from 'react';
import { BookOpen, Upload } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-sky-500 to-green-500 text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your academic journey?</h2>
            <p className="text-white/90 mb-6 text-lg">
              Join thousands of Indian students who are already benefiting from NoteBank's ecosystem of sharing and learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-sky-600 hover:bg-gray-100 flex items-center justify-center"
                size="lg"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Join as Student
              </Button>
              <Button 
                className="bg-transparent border-2 border-white hover:bg-white/10 flex items-center justify-center"
                size="lg"
              >
                <Upload className="mr-2 h-5 w-5" />
                Join as Contributor
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">What makes NoteBank special?</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="bg-white/20 p-1 rounded-full mr-3">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>India's first platform that pays students for their notes</span>
              </li>
              <li className="flex items-center">
                <div className="bg-white/20 p-1 rounded-full mr-3">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Quality verified content from verified contributors</span>
              </li>
              <li className="flex items-center">
                <div className="bg-white/20 p-1 rounded-full mr-3">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Covers all major streams and universities in India</span>
              </li>
              <li className="flex items-center">
                <div className="bg-white/20 p-1 rounded-full mr-3">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Transparent earnings system with easy UPI withdrawals</span>
              </li>
              <li className="flex items-center">
                <div className="bg-white/20 p-1 rounded-full mr-3">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Affordable premium subscription with significant benefits</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;