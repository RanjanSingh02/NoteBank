import React from 'react';
import { ArrowRight, BookOpen, Download, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 mb-6">
              <TrendingUp className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">India's #1 Student Notes Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500">
              Deposit Notes.<br />Withdraw Income.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              Share your class notes with peers while earning real income. Or find quality study material to ace your exams.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button size="lg" className="group">
                <span>Start Browsing</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Become a Contributor
              </Button>
            </div>
            
            <div className="flex justify-center md:justify-start mt-8 space-x-6">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-sky-500">100K+</span>
                <span className="text-gray-500">Students</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-green-500">50K+</span>
                <span className="text-gray-500">Notes</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-yellow-500">₹2M+</span>
                <span className="text-gray-500">Paid to Contributors</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <BookOpen className="h-8 w-8 text-sky-500 mr-2" />
                  <h3 className="text-xl font-semibold">Engineering Notes</h3>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">₹4.5k Earned</span>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Data Structures</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Complete semester notes</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-sm">2.3k</span>
                    <Download className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Algorithm Design</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Exam preparation kit</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-sm">1.8k</span>
                    <Download className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Operating Systems</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Lab manual with solutions</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-sm">3.5k</span>
                    <Download className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Earnings</p>
                    <p className="text-lg font-bold">₹12,500</p>
                  </div>
                  <Button variant="primary" size="sm">
                    View Stats
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-sky-400 rounded-full opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;