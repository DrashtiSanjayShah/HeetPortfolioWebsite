import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">
        Get in
        <span className="text-blue-500"> Touch</span>{" "}
      </h1>
      <div className="text-center tracking-tighter">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.a
          href="#"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
          className="border-b text-blue-800"
        >
          {CONTACT.email}
        </motion.a>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4 text-2xl text-blue-800">
        <a
          href="https://www.linkedin.com/in/heetgudhka"
          target="_blank"
          className="hover:text-blue-200"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/HeetGudhka2003"
          target="_blank"
          className="hover:text-blue-200"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/gudhkaheet"
          target="_blank"
          className="hover:text-blue-200"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <h2 className="mt-4 flex justify-center">
        Made by
        <a
          href="https://portfolio-c4508.web.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-800 font-bold ml-1 underline"
        >
          Drashti
        </a>
      </h2>
    </div>
  );
};

export default Contact;
