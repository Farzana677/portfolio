export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* Use <a> tags to link to sections within the page */}
          <a href="#about" className="mr-5 hover:cursor-pointer">
            About
          </a>

          <a href="#experience" className="mr-5 hover:cursor-pointer">
            Experience
          </a>

          <a href="#projectts" className="mr-5 hover:cursor-pointer">
            Work
          </a>

          <a href="#contact" className="mr-5 hover:cursor-pointer">
            Contact
          </a>
        </nav>
        <button className="inline-flex items-center bg-transparent border-1 border-[#64FFda] py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-[#64FFda]">
          Resume
        </button>
      </div>
    </nav>
  );
}
