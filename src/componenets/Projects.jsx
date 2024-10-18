import React from "react";
import { motion } from "framer-motion";
import github from "../assets/github.jpg";
import easybank from "../assets/easybank.png";
import news from "../assets/ALX.png";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
const Projects = ({ isDarkMode }) => {
  return (
    <div id="projects">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="md:text-3xl text-2xl font-bold text-blue mb-6 text-center"
      >
        Projects
      </motion.h1>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
      >
        <div
          className={`overflow-hidden rounded-lg ${
            isDarkMode ? "bg-darkblue text-white" : "bg-white text-black"
          }  shadow-md hover:shadow-lg transition-shadow`}
        >
          <img
            src={github}
            alt="github"
            className="w-full h-44 object-cover rounded-t-lg max-w-sm "
          />

          <div className=" p-4">
            <div className="flex flex-row space-x-2 justify-end gap-2">
              <FaGithub className="text-xl cursor-pointer opacity-70 transition-all duration-300 hover:text-red hover:opacity-100" />
              <IoIosLink className="text-xl cursor-pointer opacity-70 transition-all duration-300 hover:text-red hover:opacity-100" />
            </div>
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-md font-semibold  mb-2`}
            >
              Github Repo Finder
            </h3>

            <div className="bg-blue text-white md:py-2 md:px-2 w-1/2 mx-auto px-3 rounded-md mt-2  hover:bg-lightBlueHover">
              <button className="">View Detail</button>
            </div>
          </div>
        </div>

        <div
          className={`overflow-hidden rounded-lg ${
            isDarkMode ? "bg-darkblue text-white" : "bg-white text-black"
          }  shadow-md hover:shadow-lg transition-shadow`}
        >
          <img
            src={easybank}
            alt="easybank"
            className="w-full h-44 object-cover rounded-t-lg"
          />

          <div className=" p-4">
            <div className="flex flex-row space-x-2 justify-end gap-2">
              <FaGithub className="text-xl cursor-pointer opacity-70 transition-all duration-300 hover:text-red hover:opacity-100" />
              <IoIosLink className="text-xl cursor-pointer opacity-70 transition-all duration-300 hover:text-red hover:opacity-100" />
            </div>
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-md font-semibold  mb-2`}
            >
              Banking Landing Page
            </h3>

            <div className="bg-blue text-white md:py-2 md:px-2 w-1/2 mx-auto px-3 rounded-md mt-2  hover:bg-lightBlueHover">
              <button className="">View Detail</button>
            </div>
          </div>
        </div>
        <div
          className={`overflow-hidden rounded-lg ${
            isDarkMode ? "bg-darkblue text-white" : "bg-white text-black"
          }  shadow-md hover:shadow-lg transition-shadow`}
        >
          <img
            src={news}
            alt="news"
            className="w-full h-44 object-cover rounded-t-lg "
          />

          <div className=" p-4">
            <div className="flex flex-row space-x-2 justify-end gap-2">
              <FaGithub className="text-xl cursor-pointer opacity-70 transition-all duration-300 hover:text-red hover:opacity-100" />
              <IoIosLink className="text-xl cursor-pointer opacity-70 transition-all duration-300 hover:text-red hover:opacity-100" />
            </div>
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-md font-semibold  mb-2`}
            >
              News Reader
            </h3>

            <div className="bg-blue text-white md:py-2 md:px-2 w-1/2 mx-auto px-3 rounded-md mt-2  hover:bg-lightBlueHover">
              <button className="">View Detail</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
