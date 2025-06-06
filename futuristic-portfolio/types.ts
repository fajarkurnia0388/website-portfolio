
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  githubLink: string;
  liveLink?: string;
  tags: string[];
  aosAnimation?: string;
}

export interface NavLink {
  id: string;
  label: string;
}
