import { useState } from "react";
import { toast } from "react-toastify";
import PolygonLogo from "../assets/figma_svg/portfolio-1/PolygonLogo.svg?react";
import WhiteCheck from "../assets/figma_svg/portfolio-1/portfolio1-whitecheck.svg?react";
import LinkedInLogo from "../assets/figma_svg/social_media/linkedInLogo.svg?react";
import GithubLogo from "../assets/figma_svg/social_media/GitHubLogo.svg?react";
import FigmaLogo from "../assets/figma_svg/social_media/figmaLogo.svg?react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> is a union type that allows us to use the same function for both input and textarea elements.
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // React.FormEvent is a generic type that allows us to specify the type of the event target.
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    console.log("Form data", formData);
    toast.success("Message sent successfully");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className=" mt-3 p-4">
      <h1 className="text-4xl font-bold text-center uppercase">Contact Me</h1>
      <div className="flex flex-wrap gap-6">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 p-5 absolute ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 lg:gap-5 w-full md:w-1/2 justify-start items-start"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            className="w-1/2 p-2 border bg-secondary rounded text-primary font-extralight "
          />
          <input
            type="email"
            name="email"
            placeholder="your email"
            value={formData.email}
            onChange={handleChange}
            className="w-1/2 p-2 border bg-secondary rounded text-primary font-extralight "
          />
          <textarea
            name="message"
            placeholder="Let's communicate for cooperation and development"
            onChange={handleChange}
            className="w-2/3 p-2 lg:w-2/3 h-[150px] border bg-secondary rounded text-primary resize-none font-extralight"
          />
          <button
            type="submit"
            className="px-4 py-2 border text-secondary rounded transition mt-4 p-2"
          >
            SEND
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center gap-6 relative">
        <div className="absolute flex justify-center w-full h-full left-36 top-48 ">
          <WhiteCheck className="w-20 absolute top-0  " />
          <PolygonLogo className="w-50 top-10 " />
        </div>
        <div className="relative flex flex-col items-center justify-center left-36 top-76 gap-2">
          <h3 className="text-lg font-semibold">Find me on</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/handebayuek" target="_blank" rel="noopener noreferrer">
              <GithubLogo className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/hande-bayuk" target="_blank" rel="noopener noreferrer">
              <LinkedInLogo className="w-6 h-6" />
            </a>
            <a href="https://www.figma.com/@handee" target="_blank" rel="noopener noreferrer">
              {" "}
              <FigmaLogo className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactForm;
