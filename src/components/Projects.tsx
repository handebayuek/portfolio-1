
import Githublogo from "../assets/figma_svg/social_media/GitHubLogo.svg?react";
import ExternalLink from "../assets/figma_svg/externalLink.svg?react";
import { JSX } from 'react';


interface LinkProps {
  //label: string;
  icon: JSX.Element;
  url?: string;
}

interface ProjectProps {
  id: string;
  featured: boolean;
  title: string;
  description: string;
  techStack: string[];
  links: LinkProps[];
}

const github: LinkProps = {
  //label: "GitHub",
  icon: <Githublogo className="text-secondary" />,
};

const live: LinkProps = {
  //label: "Live",
  icon: <ExternalLink/>,
};

const getGitHubUrl = (repo: string) => `https://github.com/handebayuek/${repo}`;

const getLinks = (githubRepo?: string, liveUrl?: string): LinkProps[] => {
  const links: LinkProps[] = [];
  if (githubRepo) {
    links.push({ ...github, url: getGitHubUrl(githubRepo) });
  }
  if (liveUrl) {
    links.push({ ...live, url: liveUrl });
  }

  return links;
};


const filters: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "node.js",
  "Express",
  "MongoDB",
  "Brevo",
  "Figma",
];

const projects: ProjectProps[] = [{
  id: "BlitzKeys",
  featured: true,
  title: "BlitzKeys Website",
  description:
    "A Team-Based Full-Stack Project. BlitzKeys is a game sales website developed as part of a group project during my web development course. It is a full-stack application where I focused on the front-end, utilizing React, Tailwind CSS, and JavaScript to create an engaging and user-friendly interface. The project also includes a backend built with Node.js and PostgreSQL, handling user authentication, game listings, and order management. Working on BlitzKeys allowed me to gain experience in team collaboration, API integration, and responsive UI design.",
  techStack: ["HTML", "CSS", "React", "Javascript", "Figma","Tailwind CSS", "node.js", "Express", "MongoDB", "Brevo"],
  links: getLinks(undefined, "https://dev.blitzkeys.com/"),
},

  {
    id: "Botanipure",
    featured: true,
    title: "Botanipure with React",
    description:
      "Botanipure is a personal project. I developed after learning React and Tailwind CSS, aimed at refining my front-end skills. It is an elegant e-commerce concept that showcases accessories like jewelry, scarves, hats, and belts. The website features a clean and modern design, responsive layouts, and dynamic components to enhance the user experience. Through this project, I deepened my understanding of React state management, component-based architecture, and UI/UX best practices.",
    techStack: ["React", "Javascript", "Tailwind CSS", "Figma"],
    links: getLinks("react-project-with-tailwindcss"),
  },
  {
    id: "First Portfolio Project",
    featured: true,
    title: "Portfolio Website",
    description:
      "This portfolio website was the first project I developed during my bootcamp after learning HTML and CSS. It was designed to introduce ourselves and showcase what we had learned as a class. The website features a structured layout, responsive design, and carefully styled elements to create a visually appealing presentation. I used HTML, CSS, and Figma to design and build the project, focusing on translating a visual concept into a functional webpage. Through this experience, I improved my understanding of web development fundamentals, responsive design techniques, and the importance of clean, maintainable code.",
    techStack: ["HTML", "CSS", "Figma"],
    links: getLinks("Portfolio", "https://handebayuek.github.io/Portfolio/"),
  },
  

];

export { projects, filters, getLinks };
