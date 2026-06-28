export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  tech: string[];
  status: string;
  year: number;
  repoUrl: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
  content: string;
}