import { projects } from "../components/Projects";
import ContactForm from "../components/ContactForm";
import HomePages from "../components/HomePages";
import Footer from "../components/Footer";


function HomePage() {
    return (
        <div className="flex justify-center items-center mx-auto flex-col">
            <header>
                <HomePages />
            </header>
            <main className="text-secondary">
                
                <section className=" mt-3 p-4">
                    <h2 className="text-4xl font-bold text-center uppercase">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-5 mt-5">
                        {projects.map((project) => (
                            <div key={project.id} className="border p-4 rounded-lg shadow-md mt-5 max-h-full">
                                <h3 className="text-xl text-primary bg-secondary w-fit rounded-sm p-1 font-semibold mb-4">{project.title}</h3>
                                <p className="text-sm text-secondary">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="bg-secondary text-primary font-bold px-2 py-1 text-xs rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3 mt-6">
                                    {project.links.map((link) => (
                                        <a 
                                            key={link.url} 
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center w-7 h-7 fill-primary"
                                        >
                                            {link.icon} 
                                            
                                        </a>
                                    ))}
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </section>

                <ContactForm />
                <Footer/>
               
            </main>
        </div>
    );
}

export default HomePage;
