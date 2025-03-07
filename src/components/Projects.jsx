import "./css/Base.css";
import "./css/Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div className="proj-container h-[100vh] w-[100%]">
        <div>
          <h1 className="text-[var(--text-color)] font-black text-[1.7rem] text-center mt-[100px] mb-[40px] mont">
            My Projects
          </h1>
        </div>
        <div className="projects">
          <div className="proj-1 bg-[#fffffa] shadow-md rounded-2xl min-w-[500px] min-h-[300px] p-10 flex gap-10">
            <div className="left-section w-[40%] flex flex-col gap-3">
              <h1 className="text-[var(--text-color)] font-bold text-[2rem] mont">
                SimpleAuth
              </h1>
              <p className="karla text-[0.9em]">
                A simple authentication system that allows users to register,
                log in, reset their password, and access a secure dashboard. It
                provides a smooth and secure user experience.
              </p>
              <div className="pt-10">
                <p className=" font-bold karla">Technologies Used:</p>
                <ul className="flex">
                  <li>
                    {" "}
                    <img
                      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                      alt="Tailwind CSS"
                      width="40"
                      height="40"
                    />
                  </li>
                  <li>
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                      alt="React.js"
                      width="40"
                      height="40"
                    />
                  </li>
                  <li>
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                      alt="PostgreSQL"
                      width="40"
                      height="40"
                    />
                  </li>
                  <li>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s"
                      alt="Flask"
                      width="40"
                      height="40"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-section  w-[60%] flex justify-end items-right">
              <a
                href="https://login-signup-git-main-gabyels-projects.vercel.app/#/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/_project_1.jpg"
                  alt="project#1"
                  className="min-w-[40vh] min-h-[310px] rounded-xl"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
