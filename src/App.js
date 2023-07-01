import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import About from "./scenes/About";
import Skills from "./scenes/Skills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import { useState, useEffect, useRef } from "react";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";
import "./i18n";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  // Refs for each component
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Access the heights after components have rendered
    const homeHeight = homeRef.current?.clientHeight;
    const aboutHeight = aboutRef.current?.clientHeight;
    const skillsHeight = skillsRef.current?.clientHeight;
    const projectsHeight = projectsRef.current?.clientHeight;
    const contactHeight = contactRef.current?.clientHeight;
    const browserHeight = window.innerHeight;

    const homeAboutBorder = homeHeight;
    const aboutSkillsBorder = homeAboutBorder + aboutHeight;
    const skillsProjectsBorder = aboutSkillsBorder + skillsHeight;
    const projectsContactsBorder = skillsProjectsBorder + projectsHeight;

    const handleScroll = () => {
      console.log("scrollY", window.scrollY);
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
      if (window.scrollY >= 0 && window.scrollY < homeAboutBorder)
        setSelectedPage("home");
      if (
        window.scrollY >= homeAboutBorder &&
        window.scrollY < aboutSkillsBorder
      )
        setSelectedPage("about");
      if (
        window.scrollY >= aboutSkillsBorder &&
        window.scrollY < skillsProjectsBorder
      )
        setSelectedPage("skills");
      if (
        window.scrollY >= skillsProjectsBorder &&
        window.scrollY < projectsContactsBorder
      )
        setSelectedPage("projects");
      if (window.scrollY >= projectsContactsBorder) setSelectedPage("contact");
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-navy-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div ref={homeRef} className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div ref={aboutRef} className="w-5/6 mx-auto md:h-full">
        <About />
      </div>
      <LineGradient />
      <div ref={skillsRef} className="w-5/6 mx-auto md:h-full">
        <Skills />
      </div>
      <LineGradient />
      <div ref={projectsRef} className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div ref={contactRef} className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
    </div>
  );
}

export default App;
