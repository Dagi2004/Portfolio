import React from "react";
import frontdev from "../assets/frontdev.avif";
import webdesgin from "../assets/webdesgin.avif";
import LandingPage from "../assets/landingPage.jpg";

import { motion } from "framer-motion";
const Expertise = ({ isDarkMode }) => {
  return (
    <div id="expertise">
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
        className="md:text-3xl text-2xl font-bold text-blue mb-6 text-center mt-6"
      >
        Expertise
      </motion.h1>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="  mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
      >
        <div
          className={`overflow-hidden rounded-lg ${
            isDarkMode ? "bg-darkblue  text-white" : "bg-white text-black"
          } shadow-md hover:shadow-lg transition-shadow`}
        >
          <img
            src={frontdev}
            alt="Frontdev"
            className="w-full h-52 object-cover rounded-t-lg "
          />

          <div className="md:p-6 p-3">
            <h3 className="text-md font-semibold text-blue mb-2">
              FrontEnd Developement
            </h3>
            <p className="text-gray mb-3">
              Specialized in creating visually appealing and highly functional
              web applications
            </p>
            <div className="flex flex-row flex-wrap  space-x-3 gap-2 justify-around items-center">
              <div
                className={`px-2 rounded-md font-bold ${
                  isDarkMode ? "bg-white text-black" : "bg-white text-black"
                }`}
              >
                HTML
              </div>
              <div
                className={`px-2 rounded-md font-bold ${
                  isDarkMode ? "bg-white text-black" : "bg-white text-black"
                }`}
              >
                CSS
              </div>
              <div
                className={`px-2 rounded-md font-bold ${
                  isDarkMode ? "bg-white text-black" : "bg-white text-black"
                }`}
              >
                JavaScript
              </div>
            </div>
          </div>
        </div>

        <div
          className={`overflow-hidden rounded-lg ${
            isDarkMode ? "bg-darkblue  text-white" : "bg-white text-black"
          } shadow-md hover:shadow-lg transition-shadow`}
        >
          <img
            src={webdesgin}
            alt="WebDesign"
            className="w-full h-52 object-cover rounded-t-lg max-w-sm"
          />
          <div className="md:p-6 p-3">
            <h3 className="text-md font-semibold text-blue mb-2">Web Design</h3>
            <p className="text-gray-600 mb-3">
              Design intuitive and engaging user interfaces that enhance user
              experience
            </p>
            <div className="flex flex-row space-x-2 justify-around  p-1 ">
              <div
                className={`${
                  isDarkMode ? "bg-white text-black" : " text-black"
                } px-4 rounded-md font-bold`}
              >
                Figma
              </div>
              <div
                className={`${
                  isDarkMode ? "bg-white text-black" : " text-black"
                } px-4 rounded-md font-bold`}
              >
                Responsive
              </div>
              <div
                className={`${
                  isDarkMode ? "bg-white text-black" : "text-black"
                } px-2 rounded-md font-bold`}
              >
                Animation
              </div>
            </div>
          </div>
        </div>

        <div
          className={`overflow-hidden rounded-lg ${
            isDarkMode ? "bg-darkblue  text-white" : "bg-white text-black"
          } shadow-md hover:shadow-lg transition-shadow`}
        >
          <img
            src={LandingPage}
            alt="LandingPage"
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <div className="md:p-6 p-3">
            <h3 className="text-md font-semibold text-blue-600 mb-2">
              Landing Page Creation
            </h3>
            <p className="text-gray-600 mb-3">
              Design high-converting landing pages that effectively capture
              leads and drive conversions
            </p>
            <div className="flex flex-row space-x-6 justify-around items-center">
              <div
                className={`${
                  isDarkMode ? "bg-white text-black" : " text-black"
                } px-4 rounded-md font-bold`}
              >
                UI/UX Desgin
              </div>
              <div
                className={`${
                  isDarkMode ? "bg-white text-black" : " text-black"
                } px-4 rounded-md font-bold`}
              >
                Layout Design
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Expertise;
