import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="aboutheet" className="border-b border-neutral-900 pb-4 px-4">
      <h1 className="my-20 text-center text-3xl sm:text-4xl lg:text-5xl">
        About
        <span className="text-blue-500"> Me</span>
      </h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <p className="text-center max-w-xl leading-relaxed">{ABOUT_TEXT}</p>
      </motion.div>
    </section>
  );
};

export default About;
