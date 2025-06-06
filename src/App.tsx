import "./i18n/config";
import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <main>
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}

export default App;
