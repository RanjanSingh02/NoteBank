import React from 'react';
import { Download, Heart, Eye } from 'lucide-react';
import Container from '../ui/Container';
import Card, { CardContent } from '../ui/Card';
import Button from '../ui/Button';
import { Note } from '../../types';

type FeaturedNotesProps = {
  notes: Note[];
  title?: string;
};

const FeaturedNotes: React.FC<FeaturedNotesProps> = ({ 
  notes,
  title = "Featured Notes"
}) => {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            High-quality study materials created by top students and professors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {notes.map((note) => (
            <Card key={note.id} hover className="h-full flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={note.thumbnailUrl || 'https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=500'} 
                  alt={note.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs font-semibold">
                  {note.semester}
                </div>
              </div>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{note.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                    {note.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 px-2 py-0.5 rounded text-xs mr-2">
                      {note.subject}
                    </span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-0.5 rounded text-xs">
                      {note.stream}
                    </span>
                  </div>
                </div>
                
                <div className="border-t pt-3 mt-2">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="text-xs">By {note.uploadedBy}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(note.uploadDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{note.views}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        <span>{note.downloads}</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>{note.likes}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View All Notes
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedNotes;