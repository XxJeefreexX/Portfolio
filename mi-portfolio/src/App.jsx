import { useEffect } from "react";
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import { Footer } from "./components/Footer.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
      Aos.init({ 
        duration: 1000,
        once: true,
        offset: 100,
        delay: 200,
        easing: "ease-in-out", 
      });
    }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
