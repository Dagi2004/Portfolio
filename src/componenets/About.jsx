import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/devavatar.png";

import Resume from "../assets/Resumee.pdf";

const About = ({ isDarkMode }) => {
  return (
    <div className="mx-auto max-w-4xl py-6" id="aboutme">
      <div className="mt-7 flex flex-col md:flex-row gap-10 space-x-6  items-center justify-center ">
        <div className=" mr-16 md:w-1/2 text-center relative">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={avatar}
            alt="avatar"
            className="rounded-lg  w-[345] h-[400px] md:w-[450px] max-w-[700px] md:h-[532px] "
          />
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="md:w-1/2 text-center mt-10"
        >
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="md:text-3xl text-2xl font-bold text-blue mb-6"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className={`text-md md:text-left text-center mb-3 leading-8 ml-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <p>
              I'm Dagmawi Milkias, committed to creating responsive and visually
              engaging websites.
            </p>
            <p>My expertise includes:</p>
            <ul className="list-disc list-inside">
              <li className="ml-4">
                <span className="text-blue font-bold">
                  HTML, CSS, JavaScript
                </span>
              </li>
              <li className="ml-4">
                <span className="text-blue font-bold">
                  React JS , Tailwind CSS
                </span>
              </li>
            </ul>
            <p>
              I have a solid foundation in web development principles and
              frameworks.
            </p>
          </motion.p>
          <a href={Resume} download="resume" target="blank">
            <div className="flex items-center justify-center">
              <motion.button
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="bg-blue text-white md:py-2 md:px-4 py-1 px-3 rounded-md hover:bg-lightBlueHover"
              >
                Download Resume
              </motion.button>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
