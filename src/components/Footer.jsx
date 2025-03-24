import "./css/Base.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const github = (
  <FontAwesomeIcon
    icon={faGithub}
    className="text-[#383838] hover:text-white transition duration-200"
  />
);
const facebook = (
  <FontAwesomeIcon
    icon={faFacebook}
    className="text-[#383838] hover:text-white transition duration-200"
  />
);
const linkedIn = (
  <FontAwesomeIcon
    icon={faLinkedin}
    className="text-[#383838] hover:text-white transition duration-200"
  />
);

export default function Footer() {
  return (
    <div className="bg-[#6c85ff] pt-20 pb-20  w-full h-[290px] bottom-0 left-0 justify-center items-center flex-col gap-[2vh] flex  pl-[10vw] pr-[10vw] text-white mont mt-[10vh]">
      <h1 className="text-3xl font-bold ">Gabriel Guban</h1>
      <p className="lg:text-sm text-[0.8em] text-center italic ">
        You can visit my social media and follow me. Just click the social media
        symbols below. Thank You!
      </p>
      <div className="lg:text-3xl text-3xl flex gap-[3vh] pt-3">
        <a
          href="https://github.com/gabyel-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          {github}
        </a>
        <a
          href="https://web.facebook.com/gab.guban"
          target="_blank"
          rel="noopener noreferrer"
        >
          {facebook}
        </a>
        <a
          href="https://www.linkedin.com/in/gab-guban-474237334/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkedIn}
        </a>
      </div>
      <p className="text-sm text-center pt-6">All Rights Reserved</p>
    </div>
  );
}
