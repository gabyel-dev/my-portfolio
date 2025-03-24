import { faNode, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/SkillSet.css";
import "./css/Header.css";

const node = <FontAwesomeIcon icon={faNode} />;
const react = <FontAwesomeIcon icon={faReact} />;

export default function SkillSet() {
  return (
    <>
      <div className="skill-container w-[100%] sm:h-[100vh] lg:h-[55vh] ">
        <h1 className="text-[var(--text-color)] font-black text-[1.7rem] text-center mt-[100px] mb-[40px] mont pt-20 lg:pt-0">
          My Skillsets
        </h1>
        <section className="skill-set justify-center">
          <ul className="flex justify-between items-center w-[80%] mx-auto text-[var(--bl-text-color)]">
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>{react}</li>
            </a>
            <a
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>{node}</li>
            </a>
            <a
              href="https://flask.palletsprojects.com/en/stable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="flask">
                <img src="/flask.webp" alt="expressLOGO" />
              </li>
            </a>
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="PostgreSQL"
                  width="100px"
                  height="100px"
                  className="sql"
                />
              </li>
            </a>
          </ul>
        </section>
      </div>
    </>
  );
}
