import { useEffect, useState } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { projects } from "../../data/portfolioData";
import { getProjectPathFromHash } from "../../utils/paths";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import "./App.css";

function App() {
  const [currentPath, setCurrentPath] = useState(getProjectPathFromHash);
  const galleryProject = projects.find(
    (project) => project.galleryPath === currentPath
  );

  useEffect(() => {
    function updateCurrentPath() {
      setCurrentPath(getProjectPathFromHash());
    }

    window.addEventListener("hashchange", updateCurrentPath);

    return () => window.removeEventListener("hashchange", updateCurrentPath);
  }, []);

  useEffect(() => {
    const sectionId = window.location.hash.replace(/^#/, "");

    if (currentPath !== "/" || !sectionId || sectionId.startsWith("/projects/")) {
      return;
    }

    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView();
    }, 0);
  }, [currentPath]);

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {galleryProject ? (
          <ProjectGallery project={galleryProject} />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
