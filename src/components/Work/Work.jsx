import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="work"
      className="py-24 px-[6vw] md:px-[10vw] lg:px-[15vw] font-sans bg-[#0d0d0d] text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on.
        </p>
      </div>

      {/* GRID — mobile, tablet, laptop responsive */}
      <div className="grid gap-12 sm:gap-14 lg:gap-16 grid-cols-1 sm:grid-cols-2 place-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="
              w-[90%] sm:w-[80%] md:w-[70%] lg:max-w-[330px]
              mx-auto border border-gray-700 bg-gray-900 rounded-xl 
              shadow-xl overflow-hidden cursor-pointer 
              hover:shadow-purple-500/40 hover:-translate-y-2 
              transition-all duration-300
            "
          >
            <div className="p-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[180px] object-cover rounded-lg"
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold text-center mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-3 line-clamp-3 text-center">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-2 py-1 m-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons inside card */}
              <div
                className="flex justify-center gap-3"
                onClick={(e) => e.stopPropagation()} // prevent opening modal
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-1.5 text-sm rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
                  >
                    GitHub
                  </a>
                )}

                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    className="px-4 py-1.5 text-sm rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
                  >
                    Live
                  </a>
                )}

                {!project.github && !project.webapp && (
                  <button className="px-4 py-1.5 text-sm rounded-lg bg-gray-700 text-gray-300 cursor-default">
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===================== MODAL ===================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[9999] overflow-y-auto flex flex-col items-center bg-black bg-opacity-95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-8 text-white text-4xl font-bold hover:text-purple-500"
            >
              &times;
            </button>

            {/* Modal Image */}
            <motion.img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full max-w-4xl max-h-[60vh] md:max-h-[80vh] object-contain rounded-xl shadow-2xl mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />

            {/* Modal Content */}
            <div className="text-center max-w-3xl px-4">
              <h3 className="text-3xl font-bold mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Purple Modal Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold hover:scale-105 transition"
                  >
                    GitHub
                  </a>
                )}

                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold hover:scale-105 transition"
                  >
                    Live Website
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
