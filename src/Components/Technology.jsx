import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -17 },
  animate: {
    y: [10, -17],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl"> Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:cursor-pointer hover:border-purple-500"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:cursor-pointer hover:border-purple-500"
        >
          <FaBootstrap className="text-7xl text-purple-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:cursor-pointer hover:border-purple-500"
        >
          <RiTailwindCssFill className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:cursor-pointer hover:border-purple-500"
        >
          <DiJavascript className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:cursor-pointer hover:border-purple-500"
        >
          <DiCss3 className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:cursor-pointer hover:border-purple-500"
        >
          <DiHtml5 className="text-7xl text-orange-700" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
