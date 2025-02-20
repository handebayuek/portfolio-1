import { ToastContainer } from "react-toastify";
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
    <div className="flex flex-col items-center justify-center ">
      <ToastContainer/>
      <h1 className="text-4xl font-bold text-center uppercase mt-9">Contact Me</h1>
      <div className="grid grid-cols-2 gap-10 items-center mt-7">
        <section className="w-full max-w-[500px]">
          <form onSubmit={handleSubmit} className="flex justify-start flex-col items-start ml-6">
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
              className="h-[40px] w-[90%] p-2 border bg-secondary rounded text-primary font-extralight "
            />
            <input
              type="email"
              name="email"
              placeholder="your email"
              value={formData.email}
              onChange={handleChange}
              className="h-[40px] w-[90%] p-2 border bg-secondary rounded text-primary font-extralight "
            />
            <textarea
              name="message"
              placeholder="Let's communicate for cooperation and development"
              onChange={handleChange}
              className="h-[100px] w-[250px] min-w-full p-2 border bg-secondary rounded text-primary resize-none font-extralight"
            />
            <button
            
              type="submit"
              className="px-4 py-2 border text-secondary rounded transition mt-4 mb-3 p-2"
            >
              SEND
            </button>
          </form>
        </section>
        <section className="flex flex-col justify-center items-center relative mt-8">
          <div className="relative flex justify-center items-center">
            <WhiteCheck className=" mt-[-170px] w-20 absolute" />
            <PolygonLogo className="w-50 mt-[-20px] relative " />
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center mt-4">
            <h3 className="text-lg text-center font-semibold">Find me on</h3>
            <div className="flex flex-row gap-3 ">
              <a
                href="https://github.com/handebayuek"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogo className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/hande-bayuk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogo className="w-6 h-6" />
              </a>
              <a
                href="https://www.figma.com/@handee"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FigmaLogo className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
