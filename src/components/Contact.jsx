import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./css/Base.css";

const hand = (
  <FontAwesomeIcon icon={faHandshake} className="text-white text-[6em]" />
);

const submit = <FontAwesomeIcon icon={faPaperPlane} />;

export default function Contact() {
  return (
    <>
      <h1 className="contact text-[var(--text-color)] font-black text-[1.7rem] text-center mt-[100px] mb-[40px] mont pt-20 lg:pt-0">
        Get In Touch
      </h1>

      <div className="contact-container h-auto w-full flex flex-col lg:flex-row justify-center items-center mont  ">
        {/* Left Container */}
        <div className="left-container gap-2 text-white lg:w-[30%] w-full h-[200px] lg:h-[80vh] bg-gradient-to-tl from-[#6a98f0] to-[#4961dc]  lg:rounded-br-xl lg:rounded-tr-xl lg:rounded-tl-xl lg:rounded-bl-xl rounded-tr-xl rounded-tl-xl flex flex-col justify-center items-center">
          {hand}
          <p className="text-xl font-bold">Thank You</p>
          <p className="text-sm text-center">Do You Have Any Queries?</p>
        </div>

        {/* Right Container */}
        <div className="lg:w-[70%] w-full lg:h-[70vh] shadow-md rounded-bl-xl rounded-br-xl lg:rounded-br-xl lg:rounded-tr-xl lg:rounded-bl-none bg-white p-6 lg:p-9">
          <form>
            {/* Email & Name Fields */}
            <div className="flex flex-col lg:flex-row w-full justify-between gap-4">
              <div className="w-full">
                <p className="pb-2 text-md">Email</p>
                <input
                  type="email"
                  className="bg-[#EBEBEB] rounded-sm w-full h-11 px-4 text-sm"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="w-full">
                <p className="pb-2">Name</p>
                <input
                  type="text"
                  className="bg-[#EBEBEB] rounded-sm w-full h-11 px-4 text-sm"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Message Field */}
            <p className="pt-8 pb-2">Message</p>
            <textarea
              className="bg-[#EBEBEB] rounded-md w-full h-[210px] px-4 py-2 text-left resize-none text-sm"
              placeholder="Hey There!"
            ></textarea>
          </form>

          {/* Submit Button */}
          <div className="bg-gradient-to-tl from-[#6a98f0] to-[#4961dc] px-4 py-2 w-full lg:w-[15%] rounded-md text-sm text-white flex gap-2 justify-center items-center mt-4">
            {submit}
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
