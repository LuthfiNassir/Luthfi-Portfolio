import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
  icon: ReactNode;
}

export interface Education {
  degree: string;
  institution: string;
  years: string;
  grade: string;
  location: string;
  achievements: string[];
  courses: string[];
  image: string;
  icon: ReactNode;
}

export interface Achievement {
  title: string;
  description: string;
  icon: ReactNode;
}