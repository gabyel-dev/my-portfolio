import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Base.css";
import "./css/Home.css";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "./MobileNav";

const github = <FontAwesomeIcon icon={faGithub} />;
const facebook = <FontAwesomeIcon icon={faFacebook} />;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;

const handleCopy = (e) => {
  const color = window.getComputedStyle(e.target).backgroundColor;
  navigator.clipboard
    .writeText(color)
    .then(() => console.log(`copied: ${color}`));
};

export default function Home() {
  return (
    <>
      <div className="home-container w-[100%] h-[60vh] flex">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzI1IiBoZWlnaHQ9Ijk5MCIgdmlld0JveD0iMCAwIDcyNSA5OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjY2My45NzMiIHk9Ii00NTQiIHdpZHRoPSIxMjcwLjAzIiBoZWlnaHQ9IjkzOSIgcng9IjE1IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA2NjMuOTczIC00NTQpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2NjMuOTczIiB5MT0iLTQ1NCIgeDI9IjE1NTkuNjMiIHkyPSI3NTcuNDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2QTk4RjAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDk2MURDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
          alt="bg-card"
          className="home-card absolute top-[50px] z-[-1] right-0 w-[40%] tb:top-0 tb:w-[10%]"
        />
        <section className="left text-[var(--bl-text-color)] min-w-[200px] max-w-[500px] leading-12">
          <div className="intro">
            <p className="hello text-[0.875em] sm:text-[1em] md:text-[1.125em] lg:text-[1.25em] xl:text-[1em] pt-4">
              Hello, I'm
            </p>
            <h1 className="text-base text-[2.4em] md:text-[2.7em] lg:text-[3em] font-black leading-10 ">
              GABRIEL GUBAN
            </h1>
            <p className="desc text-[1.1em] sm:text-[1.1em] md:text-[1.1em] lg:text-[1.2em] xl:text-[1.3em]">
              FRONT-END WEB DEVELOPER
            </p>
          </div>

          <button className="resume-btn rounded-[5px] text-[12px] text-white px-3 h-[38px] flex justify-center items-center mb-6 mt-4 cursor-pointer">
            Download Resume
          </button>

          <section className="socials">
            <ul className="links flex gap-8">
              <li>
                <a
                  href="https://www.linkedin.com/in/gab-guban-474237334/"
                  aria-label="LinkedIn"
                >
                  {linkedIn}
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/gab.guban"
                  aria-label="Facebook"
                >
                  {facebook}
                </a>
              </li>
              <li>
                <a href="https://github.com/dv-gb" aria-label="GitHub">
                  {github}
                </a>
              </li>
            </ul>
          </section>
        </section>

        {/* Right Container */}
        <div className="right flex flex-col max-w-[500px] h-[fit-content] min-w-[fit-content]">
          <div className="relative z-0">
            {/* Card Section */}
            <section className="dev-card min-w-[350px] max-w-[100%] min-h-[240px] body-color rounded-[10px] shadow text-[var(--text-color)] text-nowrap">
              <ol className="card-content">
                <li>
                  1 &nbsp;&nbsp;class <b>Person</b> {"{"}
                </li>
                <li>2 &nbsp;&nbsp;&nbsp;constructor() {"{"}</li>
                <li>
                  3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name = "
                  <b>Gabriel Guban"</b>;
                </li>
                <li>
                  4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.traits = ["<b>DEV</b>"];
                </li>
                <li>
                  5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.age = new
                  Date().getFullYear() - 2004;
                </li>
                <li>6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</li>
                <li>7 &nbsp;&nbsp;{"}"}</li>
              </ol>
            </section>
          </div>
          {/* Colors Section - Moved to a Better Position */}
          <section className="colors flex justify-center items-center gap-[6px] p-3 mt-3 body-color shadow rounded-[8px] w-max relative bottom-11 sm:right-[80px]  lg:right-[110px]">
            <div className="a" onClick={handleCopy}></div>
            <div className="s" onClick={handleCopy}></div>
            <div className="d" onClick={handleCopy}></div>
            <div className="f" onClick={handleCopy}></div>
            <div className="g" onClick={handleCopy}></div>
          </section>
        </div>
      </div>
    </>
  );
}
