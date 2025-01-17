import React from "react";

import UI from "../assets/UIDesign.png";
import webdev from "../assets/Webdev.png";
import developer from "../assets/webdeveloper.png";

import { motion } from "framer-motion";
const Expertise = ({ isDarkMode }) => {
  return (
    <div id="service" className="mx-auto md:p-4 p-6">
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
        Service
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
        className="  mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  space-y-3 gap-8 md:gap-10"
      >
        <div
          className={`overflow-hidden rounded-lg ${
            isDarkMode
              ? "bg-darkblue  text-white "
              : "bg-white text-black border border-lightBlueHover"
          } max-w-[400px] w-full text-center `}
        >
          <img
            src={developer}
            alt="Frontdev"
            className="w-full h-52 object-cover rounded-md "
          />

          <div className="md:p-5 p-3">
            <h3 className="text-md font-semibold text-blue mb-2">
              Web Design and Developement
            </h3>
            <p className="text-gray mb-3">
              Crafting visually stunning and user-friendly websites tailored to
              your brand's identity.
            </p>
          </div>
        </div>

        <div
          className={`overflow-hidden rounded-lg ${
            isDarkMode
              ? "bg-darkblue  text-white "
              : "bg-white text-black border border-lightBlueHover"
          } max-w-[400px] w-full  text-center`}
        >
          <img
            src={UI}
            alt="WebDesign UI"
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <div className="md:p-6 p-3">
            <h3 className="text-md font-semibold text-blue mb-2">
              UI/UX Design
            </h3>
            <p className="text-gray-600 mb-3">
              Enhancing user satisfaction through intuitive interfaces and
              seamless experiences.
            </p>
          </div>
        </div>
        <div
          className={`overflow-hidden rounded-lg ${
            isDarkMode
              ? "bg-darkblue  text-white "
              : "bg-white text-black border border-lightBlueHover"
          } max-w-[400px] w-full  text-center `}
        >
          <img
            src={webdev}
            alt="webdev"
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <div className="md:p-6 p-3">
            <h3 className="text-md font-semibold text-blue mb-2">
              Landing Page Creation
            </h3>
            <p className=" mb-3">
              Design high-converting landing pages that effectively capture
              leads and drive conversions
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Expertise;
