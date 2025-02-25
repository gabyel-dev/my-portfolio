import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBars,
  faDiagramProject,
  faHome,
  faIdBadge,
  faMicrochip,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./css/MobileNav.css";

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

//navlogo
const home = <FontAwesomeIcon icon={faHome} />;
const about = <FontAwesomeIcon icon={faAddressCard} />;
const contact = <FontAwesomeIcon icon={faIdBadge} />;
const technologies = <FontAwesomeIcon icon={faMicrochip} />;
const projects = <FontAwesomeIcon icon={faDiagramProject} />;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="z-100">
        <button className="nav-btn" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
        <div className={`nav-links  ${isOpen ? "open" : ""}`}>
          <ul className="flex flex-col gap-1 justify-center items-center text-center">
            <li onClick={scrollHome}>
              {home}
              <p className="nav-links-desc">Home</p>
            </li>
            <li onClick={scrollAbout}>
              {about}
              <p className="nav-links-desc">About</p>
            </li>
            <li onClick={scrollSkills}>
              {technologies}
              <p className="nav-links-desc">Skills</p>
            </li>
            <li onClick={scrollHome}>
              {projects}
              <p className="nav-links-desc">Projects</p>
            </li>
            <li onClick={scrollHome}>
              {contact}
              <p className="nav-links-desc">Contact</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
