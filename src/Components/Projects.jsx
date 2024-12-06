import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion"; 

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justifycenter">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.3 }}
              className="w-full lg:w-1/4"
            >
              {/* <img src={project.image} alt={project.title} width={150} height={150} className='mb-6 rounded /> */}
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1.3 }}
                className="mb-2 font-semibold"
              >
                {project.title}
              </motion.h6>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.3 }}
                className="mb-4 text-neutral-400"
              >
                {project.description}
              </motion.p>
              {project.technologies.map((technology, index) => (
                <motion.span
                key={index}
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1.3 }}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
