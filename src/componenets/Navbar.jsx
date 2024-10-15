import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsToggle2Off } from "react-icons/bs";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = ({ className, toggleColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 w-full flex items-center justify-between  bg-black px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
        className="font-bold text-3xl opacity-80 transition-all duration-300 hover:opacity-100 cursor-pointer"
      >
        DAGII
      </Link>
      <ul className="hidden md:flex gap-10">
        {["home", "projects", "aboutme", "expertise", "contact"].map((item) => (
          <li key={item}>
            <Link
              to={item.toLowerCase().replace(" ", "")}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              {item.charAt(0).toLowerCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex gap-5">
        <li>
          <a
            href="https://www.linkedin.com/in/dagmawi-milkias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-xl cursor-pointer opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Dagi2004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl cursor-pointer opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100" />
          </a>
        </li>
      </ul>
      <div className="hidden md:flex gap-5">
        <button className="text-white px-5 bg-blue rounded-md hover:bg-lightBlueHover">
          Download Resume
        </button>
      </div>
      <div className="hidden md:flex">
        <BsToggle2Off
          onClick={toggleColor}
          className="text-xl cursor-pointer opacity-90 transition-all duration-300 hover:text-red-500 hover:opacity-100"
        />
      </div>
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={toggleMenu} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={toggleMenu} />
      )}
      {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 bg-black/90 p-12 md:hidden">
          <ul className="flex flex-col gap-8 mx-auto">
            {["Home", "Projects", "About Me", "Expertise", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase().replace(" ", "")}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
          <ul className="flex flex-wrap gap-6 mx-auto">
            <li>
              <a
                href="https://www.linkedin.com/in/dagmawi-milkias/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-xl cursor-pointer opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Dagi2004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl cursor-pointer opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100" />
              </a>
            </li>
          </ul>
          <button className="text-white px-2 bg-blue rounded-md hover:bg-lightBlueHover">
            Download Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
