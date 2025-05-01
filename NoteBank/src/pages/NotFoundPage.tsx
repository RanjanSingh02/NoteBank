import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';

const NotFoundPage: React.FC = () => {
  return (
    <Container className="min-h-screen flex items-center justify-center py-12">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-sky-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="flex items-center mx-auto">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default NotFoundPage;