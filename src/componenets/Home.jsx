import React from "react";
import { motion } from "framer-motion";
import ProfileDesc from "../assets/ProfileDesc.png";
import profileimagePhone from "../assets/profileimagePhone.png";
import { Link } from "react-scroll";
const Home = ({ isDarkMode }) => {
  return (
    <div className="mx-auto max-w-4xl py-6" id="home">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-center mt-10">
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
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } text-md mt-2 font-bold md:text-2xl mb-4`}
          >
            Welcome to My Portfolio
          </motion.h1>
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
            className={`md:text-2xl mb-3 text-md ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            I'm a passionate{" "}
            <span className="text-blue">frontend developer</span> dedicated to
            crafting beautiful, user-friendly web experiences.
          </motion.p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            <div className="flex items-center mx-auto justify-center">
              <motion.button
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="bg-blue text-white md:py-2 md:px-4 py-0 px-2 rounded-md hover:bg-lightBlueHover"
              >
                Contact Me
              </motion.button>
            </div>
          </Link>
        </div>

        <div className="md:w-1/2 ml-10 mt-5 md:mt-10 flex justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={ProfileDesc}
            alt="Profile"
            className="rounded-lg shadow-lg w-full max-w-xs hidden md:block"
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
            src={profileimagePhone}
            alt="Profile"
            className="rounded-lg shadow-lg w-full max-w-xs md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
