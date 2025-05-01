import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Card, { CardContent } from '../ui/Card';
import Button from '../ui/Button';
import { BlogPost } from '../../types';

type BlogSectionProps = {
  posts: BlogPost[];
};

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest From Our Blog</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Educational tips, study strategies, and insights to help you succeed in your academic journey.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} hover className="h-full flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="flex text-sm text-gray-500 mb-2">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="text-sky-500 p-0 hover:bg-transparent hover:text-sky-600 justify-start">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;