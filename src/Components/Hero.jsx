import React from "react";
import profilePic from "../assets/profilePic.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 pt-40 md:pt-12 lg:mb-12">
      <div className="flex flex-wrap items-center justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-4">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl font-thin tracking-tight md:text-6xl lg:mt-4 lg:text-8xl">
              Heet G
            </h1>
            <motion.span
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent mt-4"
            >
              Full Stack Dev
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="my-4 max-w-lg py-4 text-base md:text-xl tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <a
              href="/path/to/your-resume.pdf"
              download="Drashti_Resume"
              className="mt-4 group flex h-16 w-72 items-center justify-center rounded-full bg-gradient-to-r from-blue-200 via-blue-700 to-blue-900 text-white text-2xl duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30 hover:font-bold"
            >
              Download My Resume
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative px-4">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            src={profilePic}
            alt="Heet profile-pic"
            className="rounded-full h-48 w-48 md:h-64 md:w-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
