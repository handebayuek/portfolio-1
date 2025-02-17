import { Link } from "react-router-dom";
import profilPhoto from "../assets/figma_svg/profilPicture.jpeg";
import BlueCheck from "../assets/figma_svg/portfolio-1/portfolio1-check.svg?react";

// Navbar Component
const Navbar = () => (
  <nav className="flex justify-end items-center text-3xl text-secondary p-4 gap-5">
    <Link to="/" className="hover:underline">Home</Link>
    <Link to="/portfolio" className="hover:underline">Portfolio</Link>
    <Link to="/contact" className="hover:underline">Contact</Link>
  </nav>
);

// Hero Component
const Hero = () => (
  <div className="text-primary text-center">
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-4xl font-bold">Hey! I’m Hande Bayuk</h1>
      <p className="text-lg text-primary">
        A passionate front-end developer, continuous learner, and creative explorer on a journey to craft beautiful digital experiences.
      </p>
      <div className="relative">
        <BlueCheck className="" />
        <img src={profilPhoto} alt="profilPhoto" className="" />
        <BlueCheck className="absolute" />
      </div>
    </div>
  </div>
);

// About Component
const About = () => (
  <div className="text-primary">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold">Who am I?</h2>
      <p className="text-lg mx-auto">
        I'm Hande, a Junior Front-End Developer with an unexpected journey—I started as a veterinarian! 🐾 After working in the field for a while,
        I made a big change, moved to Berlin, and discovered my passion for web development. I love bringing creative ideas to life through design and code.
        Before jumping into development, I use Figma to sketch and plan my projects, ensuring a great user experience. I also enjoy digital drawing with Procreate, 
        where I explore colors, shapes, and creativity. 🎨 In the coding world, I specialize in React, JavaScript, Tailwind CSS, Sass, Bootstrap, HTML, and CSS.
        I enjoy crafting visually appealing, responsive, and interactive websites. Learning never stops for me—I’m always improving my skills and exploring new technologies!
        Let’s connect and create something amazing! 🚀
      </p>
    </div>
  </div>
);

// Main HomePages Component
const HomePages = () => {
  return (
    <div className="bg-secondary">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default HomePages;
