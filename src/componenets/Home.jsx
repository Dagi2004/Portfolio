import React from "react";
import { motion } from "framer-motion";
import front from "../assets/frontt.png";

import { Link } from "react-scroll";

const Home = ({ isDarkMode }) => {
  return (
    <>
      <div
        id="home"
        className={`${
          isDarkMode
            ? "bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] w-full px-10 text-white"
            : ""
        }`}
      >
        <div className=" mx-auto px-10 flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:text-left text-center ">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className={`${
                isDarkMode ? "text-white" : "text-black"
              }text-md leading-10  md:max-w-sm font-bold text-[29px] md:text-[40px] mb-6`}
            >
              Creating Impactful{" "}
              <span className="text-blue">User Experiences</span>
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className={`md:max-w-md text-[18px] leading-8 md:leading-12 mb-3 text-md ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              I'm a passionate{" "}
              <span className="text-blue">frontend developer</span> and{" "}
              <span className="text-blue"> Web Designer</span> dedicated to
              crafting beautiful, user-friendly web experiences.
            </motion.p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <div className="flex gap-6  md:justify-start justify-center items-center">
                <motion.button
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="bg-blue text-white font-bold  px-4 py-2 rounded-md hover:bg-[#003566]"
                >
                  Hire Me
                </motion.button>

                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  <motion.button
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.5,
                      x: { type: "spring", stiffness: 60 },
                      opacity: { duration: 1 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                    className="border  border-lightBlueHover text-lightBlueHover font-bold  px-4 py-2 rounded-md "
                  >
                    View Projects
                  </motion.button>
                </Link>
              </div>
            </Link>
          </div>

          <div className="md:w-1/2 ml-10 mt-5 md:mt-10 flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={front}
              alt="front"
              loading="lazy"
              className="rounded-lg  w-full max-w-[570px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
