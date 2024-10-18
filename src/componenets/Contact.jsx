import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import CopyToClipboard from "react-copy-to-clipboard";

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
  const [copyStatus, setCopyStatus] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onCopy = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  // Function to send email
  const sendEmail = (values, resetForm) => {
    emailjs
      .sendForm(
        "", // Replace with your service ID
        "", // Replace with your template ID
        form.current,
        "" // Replace with your public key
      )
      .then(
        (result) => {
          setSuccessMessage("Message Sent Successfully!");
          setTimeout(() => successMessage(false), 2000);
          setErrorMessage(""); // Clear any error
          resetForm(); // Reset the form
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
      className=" py-4"
      id="contact"
    >
      <h3 className="text-blue font-bold text-3xl mb-6 mt-2">Get In Touch</h3>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-12 gap-4 mb-8 rounded-lg">
        <div
          className={`${
            isDarkMode ? "bg-darkblue text-white" : "bg-black text-white"
          } px-6 py-4 text-white flex items-center  rounded-md`}
        >
          <FaPhoneAlt />
          <h4>+251935671646</h4>
        </div>

        <div
          className={`${
            isDarkMode ? "bg-darkblue text-white" : "bg-black text-white"
          } px-6 py-4 text-white flex items-center gap-2 rounded-lg`}
        >
          <CgMail />
          <div>
            <CopyToClipboard text="dagmawimilkias@gmail.com" onCopy={onCopy}>
              <button className="flex items-center gap-2">
                <h4>dagmawimilkias@gmail.com</h4>
              </button>
            </CopyToClipboard>
          </div>
        </div>
        {copyStatus && (
          <div className="text-red">Email Copied to ClipBoard</div>
        )}
      </div>

      <div className="bg-lightGreen p-8 rounded-md">
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
                isDarkMode ? "bg-darkblue text-white" : "bg-black text-white"
              } max-w-lg mx-auto rounded-md p-9 space-y-6`}
            >
              <div className="mb-4 pt-2">
                <label className="block text-left mt-2">Full Name *</label>
                <Field
                  type="text"
                  name="FullName"
                  placeholder="Abebe Lemma.."
                  className={`${
                    isDarkMode ? "bg-darkblue/80 text-white" : "bg-gray"
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
                  className="bg-blue hover:bg-blue text-white px-10 py-2 rounded w-full" // Adjusted button colors
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
    </motion.div>
  );
};

export default Contact;
