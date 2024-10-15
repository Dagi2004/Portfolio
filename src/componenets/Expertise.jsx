import React from "react";
import frontdev from "../assets/frontdev.avif";
import webdesgin from "../assets/webdesgin.avif";
import LandingPage from "../assets/landingpage.jpg";
import { motion } from "framer-motion";
const Expertise = () => {
  return (
    <div id="expertise">
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
        className="md:text-3xl text-2xl font-bold text-blue mb-6 text-center mt-6"
      >
        Expertise
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
        className="  mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
      >
        <div className="overflow-hidden rounded-lg  bg-white shadow-md hover:shadow-lg transition-shadow">
          <img
            src={frontdev}
            alt="Frontdev"
            className="w-full h-52 object-cover rounded-t-lg "
          />

          <div className="md:p-6 p-3">
            <h3 className="text-md font-semibold text-blue-600 mb-2">
              FrontEnd Developement
            </h3>
            <p className="text-gray-600 mb-3">
              Specialized in creating visually appealing and highly functional
              web applications
            </p>
            <div className="flex flex-row flex-wrap  space-x-4 space-y-3 justify-around items-center">
              <button className="bg-black px-2 rounded-md  text-white">
                HTML
              </button>
              <button className="bg-black px-4 rounded-md    text-white">
                CSS
              </button>
              <button className="bg-black px-2 rounded-md    text-white">
                JavaScript
              </button>
              <button className="bg-black px-2 rounded-md    text-white">
                ReactJS
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
          <img
            src={webdesgin}
            alt="WebDesign"
            className="w-full h-52 object-cover rounded-t-lg max-w-sm"
          />
          <div className="md:p-6 p-3">
            <h3 className="text-md font-semibold text-blue-600 mb-2">
              Web Design
            </h3>
            <p className="text-gray-600 mb-3">
              Design intuitive and engaging user interfaces that enhance user
              experience
            </p>
            <div className="flex flex-row space-x-1 justify-around items-center">
              <button className="bg-black px-4 rounded-md    text-white">
                Figma
              </button>
              <button className="bg-black px-4 rounded-md    text-white">
                Responsive
              </button>
              <button className="bg-black px-4 rounded-md    text-white">
                Animation
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg  bg-white shadow-md hover:shadow-lg transition-shadow">
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
              <button className="bg-black px-4 rounded-md    text-white">
                UI/UX Desgin
              </button>
              <button className="bg-black px-4 rounded-md    text-white">
                Layout Design
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Expertise;
