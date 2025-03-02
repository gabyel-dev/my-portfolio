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
      <div className="skill-container w-[100%] h-[130vh]">
        <div className="backend absolute right-0 bg-[#f8f8f8] w-[100%] h-[300px] z-[-1] text-[#C7D0FF] p-20 pl-30 pr-40 flex flex-col gap-20 karla">
          <div className="flex flex-row justify-between font-bold pr-25">
            <p className="text-[1.5rem]">MySQL</p>
            <p className="text-[1.5rem]">postgreSQL</p>
            <p className="text-[1.4rem]">HTML5</p>
          </div>
          <div className="flex flex-row gap-120 justify-center font-bold">
            <p className="text-[1.5rem]">ES6</p>
            <p className="text-[1.4rem]">MongoDB</p>
          </div>
          <div className="flex flex-row justify-between font-bold pr-20 pl-20">
            <p className="text-[1.1rem]">Tailwind</p>
            <p className="text-[1.1rem]">CSS3</p>
          </div>
        </div>
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
