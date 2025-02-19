import { projects } from "../components/Projects";
import ContactForm from "../components/ContactForm";
import HomePages from "../components/HomePages";

function HomePage() {
    return (
        <div className="flex justify-center items-center mx-auto flex-col">
            <header>
                <HomePages />
            </header>
            <main className="text-secondary">
                
                <section className=" mt-3 p-4">
                    <h2 className="text-4xl font-bold text-center uppercase">Projects</h2>
                    <div className="flex items-center justify-center flex-col gap-6 mt-6">
                        {projects.map((project) => (
                            <div key={project.id} className="border p-4 rounded-lg shadow-md">
                                <h3 className="text-xl text-primary bg-secondary w-fit rounded-sm p-1 font-semibold mb-4">{project.title}</h3>
                                <p className="text-sm text-secondary">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="bg-secondary text-primary font-bold px-2 py-1 text-xs rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3 mt-3">
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
            </main>
        </div>
    );
}

export default HomePage;
