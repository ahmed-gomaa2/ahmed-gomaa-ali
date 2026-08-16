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
import SplashScreen from "../SplashScreen/SplashScreen";
import "./App.css";

const SPLASH_DURATION = 2000;

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPath, setCurrentPath] = useState(getProjectPathFromHash);
  const galleryProject = projects.find(
    (project) => project.galleryPath === currentPath
  );

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DURATION);

    return () => window.clearTimeout(timerId);
  }, []);

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

  useEffect(() => {
    if (!currentPath.startsWith("/projects/")) {
      return undefined;
    }

    const timerId = window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }, 0);

    return () => window.clearTimeout(timerId);
  }, [currentPath]);

  return showSplash ? (
    <SplashScreen />
  ) : (
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
