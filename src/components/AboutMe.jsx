import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Base.css";
import "./css/AboutMe.css";
import { faCode, faServer } from "@fortawesome/free-solid-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const code = <FontAwesomeIcon icon={faCode} />;
const js = <FontAwesomeIcon icon={faJs} />;
const server = <FontAwesomeIcon icon={faServer} />;
const SkewedBackground = styled.div`
  background-image: linear-gradient(
    134deg,
    rgb(106, 152, 240) 0%,
    rgb(73, 97, 220) 99%
  );
  background-size: cover;
  height: 70vh;
  width: 100%;
  transform: skewY(-2deg);
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: absolute;
  left: 0;
  bottom: -1160px;
  z-index: -1;

  /* Mobile View */
  @media (max-width: 768px) {
    height: 100vh; /* Adjust height */
    transform: skewY(-2deg); /* Remove skew for mobile */
    bottom: -2040px; /* Adjust position */
  }
`;

export default function AboutMe() {
  return (
    <>
      <div className="about-container w-[100%] h-[200vh] mont">
        <h1 className="heading-about text-[var(--text-color)] font-black text-[1.7rem] text-center mt-[100px] mb-[40px]">
          Things I love
        </h1>
        <div className="skill-cards justify-center box-border ">
          <ul className="card text-[var(--bl-text-color)] flex justify-center items-center sm:gap-x-[2vw] md:gap-x-[2.8vw] lg:gap-x-[8vw] xl:gap-x-[10vw]">
            <li>
              <div>{code}</div>
              <h1 className="text-[var(--text-color)] text-[1.2rem]">
                FrontEnd and BackEnd
              </h1>
              <p className="karla text-[0.9rem]">
                I work with front-end and back-end development.
                <b> HTML</b>, <b>CSS</b>.
              </p>
            </li>
            <li>
              <div>{js}</div>
              <h1 className="text-[var(--text-color)] text-[1.2rem]">
                JavaScript
              </h1>
              <p className="karla text-[0.9rem]">
                I just extremely love javascript, I can’t even express how much
                I love javascript with just a few lines.
              </p>
            </li>
            <li>
              <div>{server}</div>
              <h1 className="text-[var(--text-color)] text-[1.2rem]">
                Technologies
              </h1>
              <p className="karla text-[0.9rem]">
                I love working with React.js, Tailwind, and pure <b>HTML</b> and{" "}
                <b>CSS</b>.
              </p>
            </li>
          </ul>
          <div className="about-me w-full h-fit flex flex-col justify-center items-center">
            <SkewedBackground className="about-bg z-[-1] lg:display-block sm-display-none" />
            <h1 className="text-[var(--text-color)] font-extrabold text-[1.7rem] text-center mt-[100px] mb-[40px]">
              About Me
            </h1>
            <div className="flex flex-col justify-center items-center">
              {/* Circle Image */}
              <div className="w-[220px] h-[220px] border-[#F9F9F8] border-[5px] bg-[var(--bl-text-color)] rounded-full overflow-hidden flex items-center justify-center mb-8">
                <div>
                  <img
                    src="/profile.webp"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="online"></div>
              {/* Text Below the Image */}
              <p className="text-center w-[80%] mt-5 text-white text-[0.9em]">
                Hi, I'm Gabriel Guban, a self-taught Full-Stack Web developer
                from Philippines. I'm a First Year BSIT Student. I’ve been
                building things on the web since 2024, and over months of
                coding, I’ve gained a strong love for creating intuitive and
                engaging user interfaces using technologies like HTML, CSS,
                JavaScript, Flask and React.
              </p>

              <p className="text-center w-[80%] mt-5 text-white text-[0.9em] pb-[7vh]">
                I also enjoy exploring new tools and techniques, and I’m always
                looking to enhance my skills through personal projects and
                learning experiences.
              </p>
            </div>
            <div>
              <section className="sayings flex justify-center items-center text-[var(--text-color)] gap-4">
                <div className="p-5 bg-[#F9F9F8] rounded-[11px] max-w-[370px] min-w-[230px] min-h-[140px] max-h-[150px] shadow flex flex-col justify-between">
                  <p className="text-[1em] karla font-medium">
                    “Simplicity is the best choice to be the best.“
                  </p>
                  <p className="text-right text-[0.8em]">
                    <i>-gabyel</i>
                  </p>
                </div>
                <div className="p-5 bg-[#F9F9F8] rounded-[11px] w-[auto] shadow max-w-[370px] min-w-[230px] min-h-[140px] max-h-[150px] flex flex-col justify-between">
                  <p className="text-[1em] karla font-medium">
                    “I know I’m not successful enough, but I’m passionate enough
                    not to worry about success.“
                  </p>
                  <p className="text-right text-[0.8em]">
                    <i>-gabyel</i>
                  </p>
                </div>
                <div className="p-5 bg-[#F9F9F8] rounded-[11px] w-[auto] shadow max-w-[370px] min-w-[230px] min-h-[140px] max-h-[150px] flex flex-col justify-between">
                  <p className="text-[1em] karla font-medium">
                    “Creativity fuels the unstoppable train of passion. .”
                  </p>
                  <p className="text-right text-[0.8em]">
                    <i>-gabyel</i>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
