import { projects } from "../components/Projects";
import Contact from "../components/Contact/Contact";
import HomePages from "../components/HomePages";

function HomePage() {
    return (
        <div className="flex justify-center items-center mx-auto flex-col">
            <header>
                <HomePages />
            </header>
            <main className="text-secondary">
                
                <section className=" mt-10">
                    <h2 className="text-3xl font-bold text-center">Projects</h2>
                    <div className="flex items-center justify-center flex-col gap-6 mt-6">
                        {projects.map((project) => (
                            <div key={project.id} className="border p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-sm text-gray-600">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="bg-blue-200 px-2 py-1 text-xs rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <Contact />
            </main>
        </div>
    );
}

export default HomePage;
