import React from "react";
import { motion } from "framer-motion";
import Responsivemobile from "../assets/Responsivemobile.png";
import responsive from "../assets/responsive.png";
const About = ({ isDarkMode }) => {
  return (
    <div className="mx-auto max-w-4xl py-6" id="aboutme">
      <div className="mt-10 flex flex-col md:flex-row  items-center justify-center ">
        <div className=" mr-16 md:w-1/2 text-center relative">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={Responsivemobile}
            alt="responsive"
            className="mx-auto rounded-lg mr-10 shadow-lg mt-9  w-60  md:hidden"
          />
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={responsive}
            alt="responsive"
            className="rounded-lg shadow-lg w-full max-w-md hidden md:block"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="text-white text-sm md:text-3xl"
            >
              Specialized in turning ideas into interactive realities
            </motion.p>
          </div>
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
            whileInView={{ x: 0, opacity: 1 }}
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
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className={`md:text-md mb-3 ml-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            I’m Dagmawi Milkias, Dynamic Front-End Developer and Web Designer
            with a strong commitment to crafting responsive and visually
            engaging websites. Proficient in{" "}
            <span className="text-blue">HTML, CSS, and JavaScript</span>, with a
            solid foundation in web development principles.
          </motion.p>
          <div className="flex items-center justify-center">
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
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
        </motion.div>
      </div>
    </div>
  );
};

export default About;
