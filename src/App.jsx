import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Home from "./components/Home";
import SkillSet from "./components/SkillSet";
import Navbar from "./components/MobileNav";

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
      </div>
    </>
  );
}

export default App;
