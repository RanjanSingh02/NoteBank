import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import FeaturedNotes from '../components/home/FeaturedNotes';
import HowItWorks from '../components/home/HowItWorks';
import Pricing from '../components/home/Pricing';
import CTASection from '../components/home/CTASection';
import BlogSection from '../components/home/BlogSection';
import { featuredNotes, recentNotes, testimonials, blogPosts } from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <FeaturedNotes notes={featuredNotes} title="Featured Notes" />
      <Testimonials testimonials={testimonials} />
      <FeaturedNotes notes={recentNotes} title="Recent Uploads" />
      <Pricing />
      <BlogSection posts={blogPosts} />
      <CTASection />
    </div>
  );
};

export default HomePage;