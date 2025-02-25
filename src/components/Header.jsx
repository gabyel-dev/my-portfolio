import "./css/Base.css";
import "./css/Header.css";

const scrollHome = () => {
  const navBar = document.querySelector(".nav-bar");
  const home = document.querySelector(".home-container");

  const navHeight = navBar.offsetHeight; // Get height dynamically
  const homePosition = home.offsetTop - (navHeight + 200);

  window.scrollTo({
    top: homePosition,
    behavior: "smooth",
  });
};

const scrollAbout = () => {
  const aboutMe = document.querySelector(".about-me");

  window.scrollTo({
    top: aboutMe.offsetTop,
    behavior: "smooth",
  });
};

const scrollSkills = () => {
  const SkillSet = document.querySelector(".skill-container");

  window.scrollTo({
    top: SkillSet.offsetTop,
    behavior: "smooth",
  });
};

export default function Header() {
  return (
    <>
      <div className="nav-bar w-[100vw] h-[60px] overflow-hidden fixed top-0 mont flex flex-row justify-between items-center body-color shadow z-50">
        <div className="text-[var(--text-color)] text-[2.4rem] anurati flex flex-col leading-[7px]">
          <img
            src="src/assets/logo.webp"
            alt="my-logo"
            className="w-10 h-9 mt-1"
          />
        </div>
        <ul className="flex flex-row gap-[3vw] text-[var(--text-color)]">
          <li onClick={scrollHome}>home</li>
          <li onClick={scrollAbout}>about me</li>
          <li onClick={scrollSkills}>technologies</li>
          <li onClick={scrollHome}>projects</li>
          <li onClick={scrollHome}>contact</li>
        </ul>
      </div>
    </>
  );
}
