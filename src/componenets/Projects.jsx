import React from "react";
import { motion } from "framer-motion";
import github from "../assets/githubrepo.jpg";
import githubphone from "../assets/githubphone.jpg";
const Projects = () => {
  return (
    <div id="projects">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
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
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
      >
        <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
          <img
            src={github}
            alt="github"
            className="w-full h-52 object-cover rounded-t-lg max-w-sm "
          />

          <div className="md:p-6 p-3">
            <h3 className="text-md font-semibold text-blue-600 mb-2">
              Github Repo Finder
            </h3>
            <p className="text-gray-600 mb-3">
              A user-friendly tool designed to simplify the process of
              discovering and exploring GitHub repositories.
            </p>
            <div className="flex flex-row space-x-6 justify-around items-center">
              <button className="bg-black px-4 rounded-md bg-opacity-50   text-white">
                React JS
              </button>
              <button className="bg-black px-4 rounded-md    text-white">
                TailWind
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg  bg-white shadow-md hover:shadow-lg transition-shadow">
          <img
            src={github}
            alt="github"
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <div className="md:p-6 p-3">
            <h3 className="text-md font-semibold text-blue-600 mb-2">
              Github Repo Finder
            </h3>
            <p className="text-gray-600 mb-3">
              A user-friendly tool designed to simplify the process of
              discovering and exploring GitHub repositories.
            </p>
            <div className="flex flex-row space-x-6 justify-around items-center">
              <button className="bg-black px-4 rounded-md    text-white">
                React JS
              </button>
              <button className="bg-black px-4 rounded-md    text-white">
                TailWind
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg  bg-white shadow-md hover:shadow-lg transition-shadow">
          <img
            src={github}
            alt="github"
            className="w-full h-52 object-cover rounded-t-lg "
          />

          <div className="md:p-6 p-3">
            <h3 className="text-md font-semibold text-blue-600 mb-2">
              Github Repo Finder
            </h3>
            <p className="text-gray-600 mb-3">
              A user-friendly tool designed to simplify the process of
              discovering and exploring GitHub repositories.
            </p>
            <div className="flex flex-row space-x-6 justify-around items-center">
              <button className="bg-black px-4 rounded-md    text-white">
                React JS
              </button>
              <button className="bg-black px-4 rounded-md    text-white">
                TailWind
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
