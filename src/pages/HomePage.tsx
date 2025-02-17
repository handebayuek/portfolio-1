
import Projects from "../components/Projects.tsx";
import Skills from "../components/Skills.tsx";
import Contact from "../components/Contact/Contact.tsx";
import HomePages from "../components/HomePages.tsx";


function HomePage (){
    return (
        <div className="flex justify-center items-center mx-auto">
        <header>
            <HomePages/>
        </header>
        <main>
            
            <Skills/>
            <Projects/>
            <Contact/>
        </main>
        </div>
    )
}

export default HomePage