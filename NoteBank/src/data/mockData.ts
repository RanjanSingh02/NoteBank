import type {
  Note,
  Testimonial,
  Stream,
  Subject,
  Semester,
  BlogPost,
} from '../types';

export const streams: Stream[] = [
  { id: '1', name: 'Engineering' },
  { id: '2', name: 'Medicine' },
  { id: '3', name: 'Arts & Humanities' },
  { id: '4', name: 'Science' },
  { id: '5', name: 'Commerce' },
  { id: '6', name: 'Law' },
];

export const subjects: Subject[] = [
  { id: '1', name: 'Mathematics', stream: '1' },
  { id: '2', name: 'Physics', stream: '1' },
  { id: '3', name: 'Chemistry', stream: '1' },
  { id: '4', name: 'Anatomy', stream: '2' },
  { id: '5', name: 'Physiology', stream: '2' },
  { id: '6', name: 'Literature', stream: '3' },
  { id: '7', name: 'History', stream: '3' },
  { id: '8', name: 'Biology', stream: '4' },
  { id: '9', name: 'Economics', stream: '5' },
  { id: '10', name: 'Constitutional Law', stream: '6' },
];

export const semesters: Semester[] = [
  { id: '1', name: 'Semester 1' },
  { id: '2', name: 'Semester 2' },
  { id: '3', name: 'Semester 3' },
  { id: '4', name: 'Semester 4' },
  { id: '5', name: 'Semester 5' },
  { id: '6', name: 'Semester 6' },
  { id: '7', name: 'Semester 7' },
  { id: '8', name: 'Semester 8' },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ranjan Rajat',
    role: 'Software Developer',
    content:
      'NoteBank helped me ace my exams! The quality of notes is exceptional and the interface is so easy to use.',
    avatar:
      'https://img.freepik.com/free-photo/digital-art-style-illustration-graphic-designer_23-2151536966.jpg?t=st=1746073776~exp=1746077376~hmac=a12edbcd2ca71fd190d03858362db64a9b08b6e0e72265fe052a68f5ef0bb6c9&w=826',
  },
  {
    id: '2',
    name: 'Ranjan Rajat',
    role: 'Software Developer',
    content:
      "I've earned over ₹5,000 by sharing my class notes. It's a win-win for everyone in the community!",
    avatar:
      'https://img.freepik.com/free-photo/digital-art-style-illustration-graphic-designer_23-2151536966.jpg?t=st=1746073776~exp=1746077376~hmac=a12edbcd2ca71fd190d03858362db64a9b08b6e0e72265fe052a68f5ef0bb6c9&w=826',
  },
  {
    id: '3',
    name: 'Ranjan Rajat',
    role: 'Software Developer',
    content:
      'The premium subscription is worth every rupee. Ad-free experience and downloadable notes make studying so much easier.',
    avatar:
      'https://img.freepik.com/free-photo/digital-art-style-illustration-graphic-designer_23-2151536966.jpg?t=st=1746073776~exp=1746077376~hmac=a12edbcd2ca71fd190d03858362db64a9b08b6e0e72265fe052a68f5ef0bb6c9&w=826',
  },
  {
    id: '4',
    name: 'Ranjan Rajat',
    role: 'Software Developer',
    content:
      "Finding quality notes for niche subjects was always a challenge until I found NoteBank. It's a game-changer!",
    avatar:
      'https://img.freepik.com/free-photo/digital-art-style-illustration-graphic-designer_23-2151536966.jpg?t=st=1746073776~exp=1746077376~hmac=a12edbcd2ca71fd190d03858362db64a9b08b6e0e72265fe052a68f5ef0bb6c9&w=826',
  },
];

export const featuredNotes: Note[] = [
  {
    id: '1',
    title: 'Complete Engineering Mathematics',
    description:
      'Comprehensive notes covering all mathematics topics for engineering students.',
    subject: 'Mathematics',
    stream: 'Engineering',
    semester: 'Semester 3',
    uploadedBy: 'Prof. Sharma',
    uploadDate: '2025-04-15',
    fileUrl: '#',
    thumbnailUrl:
      'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=500',
    views: 1500,
    downloads: 750,
    likes: 230,
    tags: ['mathematics', 'engineering', 'calculus'],
  },
  {
    id: '2',
    title: 'Advanced Physics Lab Manual',
    description:
      'Detailed manual for all physics experiments with observations and conclusions.',
    subject: 'Physics',
    stream: 'Science',
    semester: 'Semester 4',
    uploadedBy: 'Dr. Kapoor',
    uploadDate: '2025-04-15',
    fileUrl: '#',
    thumbnailUrl:
      'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=500',
    views: 980,
    downloads: 450,
    likes: 175,
    tags: ['physics', 'lab', 'experiments'],
  },
  {
    id: '3',
    title: 'Indian Constitution Summary',
    description:
      'Concise summary of the Indian Constitution with important case studies.',
    subject: 'Constitutional Law',
    stream: 'Law',
    semester: 'Semester 2',
    uploadedBy: 'Adv. Gupta',
    uploadDate: '2025-04-15',
    fileUrl: '#',
    thumbnailUrl:
      'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=500',
    views: 2200,
    downloads: 1100,
    likes: 340,
    tags: ['law', 'constitution', 'india'],
  },
  {
    id: '4',
    title: 'Human Anatomy Diagrams',
    description:
      'Detailed diagrams of human anatomy systems with explanations.',
    subject: 'Anatomy',
    stream: 'Medicine',
    semester: 'Semester 1',
    uploadedBy: 'Dr. Reddy',
    uploadDate: '2025-04-15',
    fileUrl: '#',
    thumbnailUrl:
      'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=500',
    views: 1800,
    downloads: 890,
    likes: 265,
    tags: ['anatomy', 'medicine', 'diagrams'],
  },
];

export const recentNotes: Note[] = [
  {
    id: '5',
    title: 'Microeconomics Fundamentals',
    description:
      'Essential concepts of microeconomics explained with examples.',
    subject: 'Economics',
    stream: 'Commerce',
    semester: 'Semester 3',
    uploadedBy: 'Prof. Joshi',
    uploadDate: '2025-04-15',
    fileUrl: '#',
    thumbnailUrl:
      'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=500',
    views: 780,
    downloads: 320,
    likes: 95,
    tags: ['economics', 'commerce', 'microeconomics'],
  },
  {
    id: '6',
    title: 'Modern Poetry Analysis',
    description: 'Comparative analysis of modern poets with annotated poems.',
    subject: 'Literature',
    stream: 'Arts & Humanities',
    semester: 'Semester 5',
    uploadedBy: 'Dr. Desai',
    uploadDate: '2025-04-15',
    fileUrl: '#',
    thumbnailUrl:
      'https://images.pexels.com/photos/3157890/pexels-photo-3157890.jpeg?auto=compress&cs=tinysrgb&w=500',
    views: 650,
    downloads: 210,
    likes: 120,
    tags: ['literature', 'poetry', 'analysis'],
  },
  {
    id: '7',
    title: 'Organic Chemistry Reactions',
    description: 'Compilation of organic chemistry reactions with mechanisms.',
    subject: 'Chemistry',
    stream: 'Science',
    semester: 'Semester 4',
    uploadedBy: 'Prof. Kumar',
    uploadDate: '2025-04-15',
    fileUrl: '#',
    thumbnailUrl:
      'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=500',
    views: 920,
    downloads: 480,
    likes: 160,
    tags: ['chemistry', 'organic', 'reactions'],
  },
  {
    id: '8',
    title: 'Ancient Indian History',
    description:
      'Detailed notes on ancient Indian civilizations and dynasties.',
    subject: 'History',
    stream: 'Arts & Humanities',
    semester: 'Semester 2',
    uploadedBy: 'Dr. Sen',
    uploadDate: '2025-04-15',
    fileUrl: '#',
    thumbnailUrl:
      'https://images.pexels.com/photos/5710279/pexels-photo-5710279.jpeg?auto=compress&cs=tinysrgb&w=500',
    views: 1100,
    downloads: 520,
    likes: 180,
    tags: ['history', 'india', 'ancient'],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Study Techniques Backed by Science',
    excerpt:
      'Discover scientifically proven methods to improve your study efficiency and retention.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.',
    author: 'Dr. Mehra',
    date: '2025-04-15',
    imageUrl:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['study tips', 'productivity', 'research'],
  },
  {
    id: '2',
    title: 'How to Monetize Your Academic Skills',
    excerpt:
      'Learn effective strategies to earn while sharing your knowledge with others.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.',
    author: 'Vipul Agarwal',
    date: '2025-04-15',
    imageUrl:
      'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['earning', 'skills', 'monetization'],
  },
  {
    id: '3',
    title: 'Digital Note-Taking: Paper vs. Digital',
    excerpt:
      'Compare the benefits of traditional and digital note-taking methods for students.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.',
    author: 'Sneha Patel',
    date: '2025-04-15',
    imageUrl:
      'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['notes', 'digital', 'productivity'],
  },
];
