import "./css/Base.css";

export default function Projects() {
  return (
    <>
      <div className="h-[100vh] w-[100%]">
        <div>
          <h1 className="text-[var(--text-color)] font-black text-[1.7rem] text-center mt-[100px] mb-[40px] mont">
            My Projects
          </h1>
        </div>
        <div className="projects">
          <div className="proj-1 bg-[#fffffa] shadow-md rounded-2xl h-[fit-content] p-10 flex gap-10">
            <div className="w-[50%] flex flex-col gap-3">
              <h1 className="text-[var(--text-color)] font-bold text-[2rem] mont">
                SimpleAuth
              </h1>
              <p className="karla">
                AuthApp is a simple authentication system that allows users to
                register, log in, reset their password, and access a secure
                dashboard. It provides a smooth and secure user experience with
                a clean interface and efficient functionality.
              </p>
              <p className="pt-10 font-bold karla">Technologies Used:</p>
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
            <div className="w-[50%]">
              <img
                src="/_project_1.jpg"
                alt="project#1"
                className="min-w-[10vh] min-h-[20vh] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
