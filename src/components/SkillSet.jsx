import { faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/SkillSet.css";
import "./css/Header.css";

const html = <FontAwesomeIcon icon={faHtml5} />;
const js = <FontAwesomeIcon icon={faJs} />;
const react = <FontAwesomeIcon icon={faReact} />;

export default function SkillSet() {
  return (
    <>
      <div className="skill-container w-[100%] h-[60vh]">
        <h1 className="text-[var(--text-color)] font-black text-[1.7rem] text-center mt-[100px] mb-[40px] mont">
          My Skillsets
        </h1>
        <section className="skill-set justify-center">
          <ul className="flex justify-between items-center w-[80%] mx-auto text-[var(--bl-text-color)]">
            <li>{html}</li>
            <li>{js}</li>
            <li>{react}</li>
            <li className="flask">
              <img src="/flask.webp" alt="expressLOGO" />
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
