import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Home from "./components/Home";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";
import Navbar from "./components/MobileNav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="nav-btn z-199">
        <Navbar />
      </div>
      <Header />
      <div className="main flex-col flex ml-[10vw] mr-[10vw] mb-[6vw] mt-[215px]">
        <Home />
        <AboutMe />
        <SkillSet />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
