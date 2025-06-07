import { Project, NavLink } from './types';
import calculator from './1.png';
import kindgen from './2.png';
import magiclab from './3.png';
import pattinstinc from './4.png';

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
    title: 'Random Acts of Kindness Generator',
    description: 'Inspire kindness daily with simple, random acts of good.',
    longDescription: 'Unlock a world of positivity with the "Random Acts of Kindness Generator"! This app provides daily, randomly generated ideas for small acts of kindness across various categories (for strangers, friends, yourself, or the environment). Track your progress, share your good deeds to inspire others, and enjoy a user-friendly interface with both light and dark themes. Start spreading kindness and make a difference, one random act at a time.',
    imageUrl: kindgen,
    githubLink: 'https://github.com/fajarkurnia0388/kindness-ripple-generator',
    tags: ['Kindness', 'Generator', 'TypeScript', 'Other'],
    aosAnimation: 'fade-up',
  },
  {
    id: 'project3',
    title: 'Magic Compound: The Molecular Journey',
    description: 'Unravel the secrets of chemistry by building molecules.',
    longDescription: 'An engaging and intuitive educational game where players actively combine elements to form common chemical compounds. Features interactive element cards, real-time 3D molecular visualization, and dynamic challenges designed to make chemistry accessible and fun for all ages.',
    imageUrl: magiclab,
    githubLink: 'https://github.com/fajarkurnia0388/magic-molecule-quest',
    tags: ['Chemistry', 'Learning App', 'Puzzle Game', 'Educational Game'],
    aosAnimation: 'fade-up',
  },
  {
    id: 'project4',
    title: 'Pattern Instinct: Cognitive Velocity',
    description: 'Sharpen your mind. Predict the future. Master dynamic patterns.',
    longDescription: 'Immerse yourself in "Pattern Instinct," a captivating and highly addictive mobile game designed to push the boundaries of cognitive agility and intuitive pattern recognition. With a sleek, futuristic UI, players are challenged to instinctively predict the next element in rapid-fire visual sequences—be it luminous colors, evolving geometric forms, or pulsating numerical progressions. This game cultivates sharp observation and the swift identification of underlying logical structures, providing an intensely thrilling and profoundly beneficial experience for honing predictive capabilities and mental agility in a truly engaging and stylish manner.',
    imageUrl: pattinstinc,
    githubLink: 'https://github.com/fajarkurnia0388/pattern-flow-swift',
    tags: ['Logic', 'Instinct', 'Cognitive', 'Mind'],
    aosAnimation: 'fade-up',
  },
  {
    id: 'project5',
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

