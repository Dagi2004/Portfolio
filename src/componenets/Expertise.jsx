import React from "react";

import ux from "../assets/ux.png";
import web from "../assets/web.png";
import landing from "../assets/landingpage.png";

const services = [
  {
    icon: web,
    title: "Web Design and Development",
    description:
      "Crafting visually stunning and user-friendly websites tailored to your brand's identity.",
    alt: "Web design and development",
  },
  {
    icon: ux,
    title: "UI/UX Design",
    description:
      "Enhancing user satisfaction through intuitive interfaces and seamless experiences.",
    alt: "UI/UX Design",
  },
  {
    icon: landing,
    title: "Landing Page Creation",
    description:
      "Design high-converting landing pages that effectively capture leads and drive conversions.",
    alt: "Landing page creation",
  },
];

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
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden rounded-lg ${
              index === 1 && !isDarkMode
                ? "bg-lightBlueHover text-white"
                : isDarkMode
                ? "bg-darkblue text-white"
                : "bg-white text-black border border-lightBlueHover"
            } max-w-[350px] h-full max-h-[220px] w-full text-center`}
          >
            <img
              src={service.icon}
              alt={service.alt}
              className="mx-auto mt-2 w-[60px] h-[70px] object-cover rounded-md"
            />
            <div className="md:p-5 p-3">
              <h3
                className={`${
                  index === 1 ? "text-white" : "text-blue"
                } text-md font-bold mb-2`}
              >
                {service.title}
              </h3>
              <p className="text-gray mb-3">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Expertise;
