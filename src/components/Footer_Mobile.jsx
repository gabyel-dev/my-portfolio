export default function Footer() {
  return (
    <div className="bg-[#6d83f2] w-full h-auto py-6 absolute bottom-0 left-0 text-white mont">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-[10vw]">
        {/* Left Section - Logo & Info */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo-footer.jpg"
            alt="logo"
            className="w-12 h-12 rounded-md"
          />
          <div>
            <p className="text-lg font-semibold">Made by Gabyel</p>
            <p className="text-sm opacity-80">Front-end Developer</p>
          </div>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-md font-semibold">Contact Me</p>
          <p className="text-sm opacity-90">📧 Email: gabyel@example.com</p>
          <p className="text-sm opacity-90">📞 Phone: +123 456 7890</p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="mt-4 md:mt-0">
          <p className="text-md font-semibold">Send a Message</p>
          <form className="mt-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-md text-black focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full mt-2 px-3 py-2 rounded-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#6d83f2] mt-2 px-4 py-2 rounded-md hover:bg-gray-200 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm opacity-80 mt-6">
        © {new Date().getFullYear()} Gabyel. All Rights Reserved.
      </div>
    </div>
  );
}
