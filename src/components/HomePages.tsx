import { Link } from "react-router-dom";
import profilPhoto from "../assets/figma_svg/profilPicture.jpeg";
import BlueCheck from "../assets/figma_svg/portfolio-1/portfolio1-check.svg?react";
import AllSkills from "../assets/figma_svg/skills/allSkillsLogo.svg?react";

const HomePages: React.FC = () => {
  return (
    <div className="bg-secondary w-[90vw] m-8">
      {/* Navbar */}
      <nav className="flex justify-end items-center text-l text-primary py-5 px-5 gap-4 uppercase font-light">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/portfolio" className="hover:underline">
          Project
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="text-primary text-center ">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-3xl font-bold ">Hey! I’m Hande Bayuk</h1>
          <p className="text-lg text-primary mb-3 p-3 text-center">
            A passionate front-end developer, continuous learner, and creative
            explorer on a journey to craft beautiful digital experiences.
          </p>
          <div className="relative flex justify-center items-center m-5">
            <BlueCheck className="absolute -top-9 z-1 -right-7 w-20 h-20 sm:w-20 sm:h-20" />

            <img
              src={profilPhoto}
              alt="Profile"
              className="w-60 h-75 -rotate-9 object-cover "
            />

            <BlueCheck className="absolute -rotate-45 -bottom-14 -left-7 w-20 h-20 sm:w-20 sm:h-20" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="text-primary text-center py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">Who am I?</h2>
          <p className="text-lg mx-auto max-w-3xl p-3">
            I'm Hande, a Junior Front-End Developer with an unexpected journey—I
            started as a veterinarian! 🐾 After working in the field for a
            while, I made a big change, moved to Berlin, and discovered my
            passion for web development. <br />
            I love bringing creative ideas to life through design and code.
            Before jumping into development, I use Figma to sketch and plan my
            projects, ensuring a great user experience. I also enjoy digital
            drawing with Procreate, where I explore colors, shapes, and
            creativity. 🎨 <br />
            In the coding world, I specialize in React, JavaScript, Tailwind
            CSS, Sass, Bootstrap, HTML, and CSS. I enjoy crafting visually
            appealing, responsive, and interactive websites. Learning never
            stops for me—I’m always improving my skills and exploring new
            technologies! <br />
            Let’s connect and create something amazing! 🚀
          </p>
    
        </div>
      </section>

      {/* Skills Section */}
      <section >
      <div className="container p-2">
          <AllSkills className="w-full h-10 -mt-7 m-auto" />
        </div>
      </section>
    </div>
  );
};

export default HomePages;
