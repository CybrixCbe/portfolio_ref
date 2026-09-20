export type PageId = 'home' | 'projects' | 'about' | 'experience' | 'contact';

export interface ProjectItem {
  id: string;
  projectNumber: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  keyHighlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: 'Deployed' | 'Production Ready' | 'Active Tool';
}

export interface EducationItem {
  id: string;
  institution: string;
  period: string;
  degree: string;
  score: string;
  scoreLabel: 'CGPA' | 'Percentage';
  status?: string;
  highlights?: string[];
}

export interface InternshipItem {
  role: string;
  company: string;
  type: string;
  responsibilities: string[];
  tools: {
    name: string;
    description: string;
    icon: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  category: 'Cybersecurity' | 'Hackathon' | 'Competition';
  issuer?: string;
  description?: string;
}

export interface ContactDetails {
  fullName: string;
  preferredName: string;
  role: string;
  subRole: string;
  objective: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  githubDisplay: string;
  socStatus: string;
  threatLevel: string;
  systemVersion: string;
}
