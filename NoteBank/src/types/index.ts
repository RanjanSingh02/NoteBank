export type User = {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'contributor' | 'admin';
  profileImage?: string;
  isPremium?: boolean;
};

export type Note = {
  id: string;
  title: string;
  description: string;
  subject: string;
  stream: string;
  semester: string;
  uploadedBy: string;
  uploadDate: string;
  fileUrl: string;
  thumbnailUrl?: string;
  views: number;
  downloads: number;
  likes: number;
  tags: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
};

export type Stream = {
  id: string;
  name: string;
};

export type Subject = {
  id: string;
  name: string;
  stream: string;
};

export type Semester = {
  id: string;
  name: string;
};

export type Filter = {
  stream?: string;
  subject?: string;
  semester?: string;
  search?: string;
};

export type Stats = {
  views: number;
  downloads: number;
  earnings: number;
  likes: number;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
};