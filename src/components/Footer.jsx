import "./css/Base.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon icon={faGithub} className="cursor-pointer" />;
const facebook = <FontAwesomeIcon icon={faFacebook} />;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;

export default function Footer() {
  return (
    <div className="bg-[#6c85ff] pt-20 pb-20  w-full h-[250px] bottom-0 left-0 justify-center items-center flex-col gap-[2vh] flex  pl-[10vw] pr-[10vw] text-white mont">
      <h1 className="text-3xl font-bold ">Gabriel Guban</h1>
      <p className="text-sm text-center italic">
        You can visit my social media and follow me. Just click the social media
        symbols below. Thank You!
      </p>
      <div className="text-2xl flex gap-[3vh] pt-3">
        {github}
        {facebook}
        {linkedIn}
      </div>
      <p className="text-sm text-center pt-6">All Rights Reserved</p>
    </div>
  );
}
