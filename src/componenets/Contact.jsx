import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import contact from "../assets/Mail.png";

// Validation Schema
const validationSchema = Yup.object({
  FullName: Yup.string().required("This field is required"),
  Subject: Yup.string().required("This field is required"),
  EmailAddress: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  Message: Yup.string().required("This field is required"),
});

const Contact = ({ isDarkMode }) => {
  const form = useRef();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to send email
  const sendEmail = (values, resetForm) => {
    emailjs
      .sendForm(
        "your_service_id", // Replace with your service ID
        "your_template_id", // Replace with your template ID
        form.current,
        "your_public_key" // Replace with your public key
      )
      .then(
        (result) => {
          setSuccessMessage("Message Sent Successfully!");
          setTimeout(() => setSuccessMessage(""), 2000); // Clear success message after 2 seconds
          setErrorMessage(""); // Clear any previous error message
          resetForm(); // Reset the form after successful submission
        },
        (error) => {
          setErrorMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
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
      className="py-4"
      id="contact"
    >
      <div className="mt-6 mx-auto flex flex-col-reverse md:flex-row rounded-lg md:max-w-4xl max-w-sm p-6 items-center justify-between">
        <div className="w-full md:w-1/2 p-4">
          <div
            className={`${
              isDarkMode ? " text-white" : "text-black"
            } text-center mb-6 `}
          >
            <h3 className="text-blue font-bold text-3xl md:text-4xl mb-6 text-center ">
              Get In Touch
            </h3>

            <p className="text-[16px] max-w-md font-[400] leading-7  mt-2">
              I’d love to hear from you! Whether you have questions about my
              work, want to discuss potential collaborations, or simply wish to
              connect, feel free to reach out
            </p>
          </div>

          <Formik
            initialValues={{
              FullName: "",
              EmailAddress: "",
              Subject: "",
              Message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => sendEmail(values, resetForm)}
          >
            {() => (
              <Form
                ref={form}
                className={`${
                  isDarkMode ? " text-white" : "text-black"
                } max-w-lg mx-auto rounded-md p-9 space-y-6`}
              >
                <div className="mb-4 pt-2">
                  <label className="block text-left mt-2">Full Name *</label>
                  <Field
                    type="text"
                    name="FullName"
                    placeholder="Abebe Lemma.."
                    className={`${
                      isDarkMode ? "bg-darkblue/80 text-white" : ""
                    } w-full border p-2 rounded-md`}
                  />
                  <ErrorMessage
                    name="FullName"
                    component="div"
                    className="text-red"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-left">Email Address *</label>
                  <Field
                    type="email"
                    name="EmailAddress"
                    placeholder="Email Address.."
                    className={`${
                      isDarkMode ? "bg-darkblue/80 text-white" : "bg-gray"
                    } w-full border p-2 rounded-md`}
                  />
                  <ErrorMessage
                    name="EmailAddress"
                    component="div"
                    className="text-red"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-left">Subject *</label>
                  <Field
                    type="text"
                    name="Subject"
                    placeholder="Title.."
                    className={`${
                      isDarkMode ? "bg-darkblue/80 text-white" : "bg-gray"
                    } w-full border p-2 rounded-md`}
                  />
                  <ErrorMessage
                    name="Subject"
                    component="div"
                    className="text-red"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-left">Message *</label>
                  <Field
                    as="textarea"
                    name="Message"
                    placeholder="Type Message.."
                    className={`${
                      isDarkMode ? "bg-darkblue/80 text-white" : "bg-gray"
                    } w-full border p-2 rounded-md`}
                  />
                  <ErrorMessage
                    name="Message"
                    component="div"
                    className="text-red"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <button
                    className="bg-blue hover:bg-blue text-white px-10 py-2 rounded w-full"
                    type="submit"
                  >
                    Send Now
                  </button>

                  {successMessage && (
                    <div className="mt-4 max-w-md w-full py-3 text-center">
                      <h4 className="text-green">✅ {successMessage}</h4>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="mt-4 max-w-md w-full py-3 text-center">
                      <h4 className="text-red">❌ {errorMessage}</h4>
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:ml-10 md:mt-0">
          <img
            src={contact}
            alt="Contact Me Illustration"
            className="rounded-lg  w-[345] h-[400px] md:w-[450px] max-w-[700px] md:h-[532px] "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
