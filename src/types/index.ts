export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  image?: string;
}

export interface Blog {
  title: string;
  summary: string;
  date: string;
  readTime: string;
  slug: string;
  tags?: string[];
}

export interface BlogLayoutProps {
    title: string;
    date: string;
    readTime?: string;
    tags?: string[];
    slug?: string;
    lastUpdated?: string;

}

export interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}