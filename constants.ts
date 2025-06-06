import { Project, NavLink } from './types';
import calculator from './calculator.png'

export const NAV_LINKS: NavLink[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project1',
    title: 'Simple Calculator',
    description: 'A simple calculator app built using React and TypeScript.',
    longDescription: 'This is a simple calculator application I built using React and TypeScript. It performs basic math operations and demonstrates my ability to create interactive web interfaces and write clean, functional code.',
    imageUrl: calculator,
    githubLink: 'https://github.com/fajarkurnia0388/fajar-kurnia-calculator',
    liveLink: '#',
    tags: ['React', 'Vite', 'TypeScript', 'CSS', 'Other'],
    aosAnimation: 'fade-up',
  },
  {
    id: 'project2',
    title: 'Decentralized Social Platform',
    description: 'A next-gen social network on the blockchain.',
    longDescription: 'Experience the future of social media with a decentralized platform that puts users in control of their data and content, built on cutting-edge blockchain technology for enhanced privacy and security.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    githubLink: 'https://github.com/fajarkurnia0388',
    tags: ['Blockchain', 'Solidity', 'Next.js', 'Web3'],
    aosAnimation: 'fade-up',
  },
  {
    id: 'project3',
    title: 'VR Interactive Museum Tour',
    description: 'Explore world museums from your home.',
    longDescription: 'An immersive virtual reality experience that allows users to explore renowned museums and historical sites from around the globe. Features high-fidelity 3D models and interactive exhibits.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    githubLink: 'https://github.com/fajarkurnia0388',
    tags: ['Unity', 'C#', 'VR', '3D Modeling'],
    aosAnimation: 'fade-up',
  },
  {
    id: 'project4',
    title: 'Eco-Friendly Route Planner',
    description: 'Find the most sustainable travel routes.',
    longDescription: 'A smart application designed to help users find the most environmentally friendly routes for their journeys, considering factors like carbon emissions, public transport availability, and bike-friendliness.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    githubLink: 'https://github.com/fajarkurnia0388',
    liveLink: '#',
    tags: ['Flutter', 'Dart', 'Google Maps API', 'Sustainability'],
    aosAnimation: 'fade-up',
  }
];

export const GITHUB_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
</svg>
`;

export const LINKEDIN_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
  <rect x="2" y="9" width="4" height="12"></rect>
  <circle cx="4" cy="4" r="2"></circle>
</svg>
`;

export const EMAIL_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
  <polyline points="22,6 12,13 2,6"></polyline>
</svg>
`;

export const EXTERNAL_LINK_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
  <polyline points="15 3 21 3 21 9"></polyline>
  <line x1="10" y1="14" x2="21" y2="3"></line>
</svg>
`;

