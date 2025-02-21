import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { toast } from "react-toastify";


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
      <div className="flex justify-center flex-col items-center">
        <section className=" mt-4 ">
          <form onSubmit={handleSubmit} className="flex justify-center flex-col items-start ">
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
              className="min-w-[450px] md:w-[450px] lg:w-[600px] p-2 border bg-secondary rounded text-primary font-extralight mt-3 "
            />
            <input
              type="email"
              name="email"
              placeholder="your email"
              value={formData.email}
              onChange={handleChange}
              className="min-w-[450px] md:w-[450px] lg:w-[600px] p-2 border bg-secondary rounded text-primary font-extralight mt-3"
            />
            <textarea
              name="message"
              placeholder="Let's communicate for cooperation and development"
              onChange={handleChange}
              className="min-w-[450px] md:w-[450px] lg:w-[600px] h-[100px] md:min-h-[200px] lg:min-h-[200px] max-h-[250px] overflow-auto p-2 border bg-secondary rounded text-primary resize-none font-extralight mt-3"
            />
            <button
            
              type="submit"
              className="px-4 py-2 border text-secondary rounded transition mt-3 mb-3"
            >
              SEND
            </button>
          </form>
          </section>
      </div>
    </div>
  );
};

export default ContactForm;
