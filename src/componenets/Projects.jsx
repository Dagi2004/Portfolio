import React from "react";
import { motion } from "framer-motion";
import github from "../assets/github.jpg";
import easybank from "../assets/landingpage.webp";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import kefita from "../assets/kefita.png";
import Digital from "../assets/digitalmark.png";
import KefitaVid from "../assets/kefita.mp4";
import lula from "../assets/HeroImageD.png";

const WorkExperiece = [
  {
    Title: "UI/UX designer",
    Company: "Wujo Company | 2024- Present | ",
    Achivements: [
      "Managing the development of MVP prototypes and wireframes",
      "Created initial low-fidelity wireframes to outline design concepts",
      "Developed high-fidelity wireframes to enhance user experience and functionality",
    ],
  },
  {
    Title: "FrontEnd Developer ",
    Company: "Indolike Company | 2025 - Present | ",
    Achivements: [
      "Utilized frameworks like React to enhance application performance",
      "Collaborated with designers to implement user-friendly interfaces and improve user experience.",
      "Developed high-fidelity wireframes to enhance user experience and functionality",
      "Optimized web pages for maximum speed and scalability",
    ],
  },
  {
    Title: "Frontend Developer Internship",
    Company: "Coderscave Company | July 10/2024-August 12/2024 ",
    Achivements: [
      "Created user-friendly designs for web applications, enhancing the overall user experience.",
    ],
  },
  {
    Title: "Frontend Developer Internship",
    Company: "Kefita Technology | July 11/2024- Septemeber 23/2024 | ",
    Achivements: [
      "Collaborated with designers and developers to ensure seamless",
      "Integration of user interface",
      "Developed responsive web components using HTML, CSS, and JavaScript",
    ],
  },
];

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
        className="md:text-3xl text-2xl font-bold text-blue mb-6 text-center mt-6"
      >
        Latest Works
      </motion.h1>

      <div className="space-y-10">
        {[
          {
            image: kefita,
            title: "Kefita Technology Website",
            details: [
              "The Kefita Technology web project is centered around developing a sleek, professional website that highlights the company’s innovative tech solutions.",
            ],
            demoLink: KefitaVid,
            sourceCode:
              "https://hayle-hb.github.io/kefitatech-FrontEnd/src/pages/Blog.html",
            isImageOnRight: false,
          },
          {
            image: easybank,
            title: "Banking Landing Page",
            details: [
              "The landing page project is designed to serve as an effective entry point for a targeted campaign",
            ],
            sourceCode: "https://github.com/Dagi2004/BankingLandingPage",
            demoLink: "https://bankinglandingpage.netlify.app/",
            isImageOnRight: true,
          },
          {
            image: Digital,
            title: "Digital Marketing Redesign Website",
            details: [
              "This project emphasizes a vibrant and user-friendly layout, integrating advanced features to facilitate easy browsing and purchasing, ultimately boosting customer engagement and satisfaction",
            ],
            sourceCode: "https://github.com/Dagi2004/DigitalMarketingReDesign",
            isImageOnRight: false,
          },
          {
            image: lula,
            title: "Lula Bakery Center Website",
            details: [
              "The site features an appealing design that showcases their delicious offerings, along with easy navigation for customers to explore menus, place orders, and learn about the bakery's story and values",
            ],
            sourceCode: "https://github.com/Dagi2004/BakeryLandingPage",
            demoLink: "https://lulabakerylandingpage.netlify.app/",
            isImageOnRight: true,
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className={`flex flex-col ${
              project.isImageOnRight ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center lg:justify-between space-y-5 lg:space-y-0 lg:space-x-9`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full lg:w-1/2 max-w-[340px] md:max-w-[460px]  rounded-[32px] object-cover"
            />
            <div className="flex flex-col items-center space-y-4 lg:max-w-md">
              <h3 className="text-blue text-2xl font-bold text-center">
                {project.title}
              </h3>
              <p
                className={`${
                  isDarkMode ? "text-white" : "text-black"
                } leading-[24px] text-center font-normal text-[16px] md:text-[18px] max-w-md md:max-w-lg space-y-2`}
              >
                {project.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </p>
              <div className="flex gap-3">
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-darkerBlue text-white shadow-md px-5 py-1 rounded-md font-bold">
                      Source Code
                    </button>
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-darkerBlue text-white shadow-md px-5 py-1 rounded-md font-bold">
                      Live Demo
                    </button>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <h1 className="text-2xl mb-2 mt-10 text-center font-bold text-blue">
        Work Experience
      </h1>
      <div className="flex flex-col gap-6 mt-4">
        {WorkExperiece.map((experience, index) => (
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
            key={index}
            className={`${
              isDarkMode ? "bg-darkblue text-white" : "bg-whiteen text-black"
            } rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto transform transition-all hover:scale-105`}
          >
            <div className="flex flex-col text-left">
              <div className="bg-blue-600 p-4">
                <h2 className="text-xl font-semibold">{experience.Title}</h2>
                <p className="text-sm">{experience.Company}</p>
              </div>
              <div className="p-4">
                <ul className="list-disc list-inside space-y-2 text-left marker:text-blue">
                  {experience.Achivements.map((achievement, i) => (
                    <li key={i} className="text-gray-700 text-md">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
