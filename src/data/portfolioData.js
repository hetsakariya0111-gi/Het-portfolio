import profilePhoto from '../assets/hero.png';
import resumePdf from '../assets/resume_het.pdf';
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert4.png';
import househelpImage from '../assets/project-househelp.png';
import pinAtlasImage from '../assets/project-pinatlas.png';

export const portfolioData = {
  personal: {
    name: "Het Sakariya",
    fullName: "Het Sakariya",
    bio: "1st year CSE student | Full Stack Developer | Building cool web apps",
    photo: profilePhoto, // Using local asset
    tagline: "I build digital experiences that scale.",
    location: "Gandhinagar, Gujarat, India",
    email: "hetsakariya.0111@gmail.com",
    resumeUrl: resumePdf,
  },
  socials: [
    { name: "GitHub",   url: "https://github.com/hetsakariya0111-gi",                     icon: "github",   color: "#6e5494" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/het-sakariya-9159623ab/",        icon: "linkedin", color: "#0077b5" },
    { name: "LeetCode", url: "https://leetcode.com/u/hetsakariya0111-gi/",                 icon: "code",     color: "#ffa116" },
    { name: "Twitter",  url: "https://x.com/het_881263",                                   icon: "twitter",  color: "#1da1f2" },
    { name: "YouTube",  url: "https://www.youtube.com/@Hetsakariya-a1",                    icon: "youtube",  color: "#ff0000" },
  ],
  skills: {
    frontend: [
      { name: "React.js", level: 90, icon: "atom" },
      { name: "JavaScript", level: 85, icon: "code" },
      { name: "Tailwind CSS", level: 80, icon: "wind" },
      { name: "Figma", level: 75, icon: "figma" },
    ],
    backend: [
      { name: "Node.js", level: 80, icon: "server" },
      { name: "Express", level: 75, icon: "zap" },
      { name: "MongoDB", level: 70, icon: "database" },
    ],
    tools: [
      { name: "GitHub", level: 85, icon: "git-branch" },
      { name: "Postman", level: 80, icon: "terminal" },
      { name: "Vercel", level: 90, icon: "cloud" },
      { name: "Render", level: 85, icon: "server" },
      { name: "Netlify", level: 85, icon: "globe" },
    ],
  },
  projects: [
    {
      id: 1,
      title: "House Help Finder",
      category: "Full Stack",
      description: "Service marketplace app to find and connect with trusted house-help providers.",
      image: househelpImage,
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "https://vercel.com/hetsakariya0111-3603s-projects/househelpfinder",
    },
    {
      id: 2,
      title: "Pin Atlas",
      category: "Frontend",
      description: "Map-focused project for locating and managing pinned places in an interactive UI.",
      image: pinAtlasImage,
      tech: ["React", "JavaScript", "Maps API"],
      live: "https://vercel.com/hetsakariya0111-3603s-projects/pin_atlas",
    },
  ],
  figmaDesigns: [],
  certificates: [
    {
      title: "Advanced Web Developer Bootcamp",
      org: "Academy of Modern Technology",
      image: cert1,
      link: "#",
    },
    {
      title: "Python Programming Excellence",
      org: "Global Institute of Programming",
      image: cert2,
      link: "#",
    },
    {
      title: "Data Structures & Algorithms",
      org: "Dept of Computer Science & Engineering",
      image: cert3,
      link: "#",
    },
    {
      title: "Intro to Computer Science",
      org: "Engineering Excellence Board",
      image: cert4,
      link: "#",
    },
  ],
  hackathons: [
    {
      name: "DA-IICT Tic-Tac-Toe Competition",
      problem: "Developing an unbeatable AI algorithm for Tic-Tac-Toe.",
      solution: "Implemented an optimized Minimax algorithm with alpha-beta pruning.",
      outcome: "Participant & Top Contender",
    },
    {
      name: "Global AI Hack 2024",
      problem: "Inefficient data processing in edge devices.",
      solution: "Developed a lightweight neural network architecture.",
      outcome: "Top 10 Finalist / Innovative Award.",
    },
  ],
  achievements: [
    { title: "DigitalOcean Hacktoberfest x2", milestone: "Open Source Contributions (Shark Badge)" },
    { title: "500+ LeetCode Problems Solved", milestone: "Competitive Programming" },
    { title: "Top 1% Contributor on StackOverflow", milestone: "Community Help" },
  ],
};
