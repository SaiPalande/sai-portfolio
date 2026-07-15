import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Certifications />
      <Projects />
      <Contact />
      <ScrollToTop />
    </>
  );
}

export default App;