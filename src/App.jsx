import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Blog } from "./components/Blogs/Blog";
import { Certification } from "./components/Certifications/Certification";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certification />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
