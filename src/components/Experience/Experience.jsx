import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[10vw] md:px-[8vw] lg:px-[16vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experiences and roles in various organizations.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-purple-600 to-purple-900 h-full rounded-full"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative flex items-center justify-between mb-24 w-full"
          >
            {/* Timeline Node (Clickable Logo Circle) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20 flex justify-center items-center">
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 border-4 border-purple-600 w-16 h-16 rounded-full flex justify-center items-center shadow-[0_0_25px_4px_rgba(130,69,236,0.6)] hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </a>
            </div>

            {/* 🌈 Gradient Connector Line */}
            <div
              className={`absolute top-1/2 w-[calc(50%-2rem)] h-[2px] bg-gradient-to-r from-purple-600 to-purple-400 ${
                index % 2 === 0
                  ? "left-[calc(50%+2rem)]"
                  : "right-[calc(50%+2rem)] rotate-180"
              }`}
            ></div>

            {/* Experience Card */}
            <div
              className={`relative bg-gray-900 border border-gray-700 text-gray-300 rounded-2xl shadow-lg p-5 sm:p-6 transition-transform hover:scale-[1.03] hover:shadow-purple-500/40 ${
                index % 2 === 0
                  ? "ml-[calc(50%+2.5rem)]"
                  : "mr-[calc(50%+2.5rem)]"
              } sm:w-[45%] w-full mt-12 sm:mt-0`}
            >
              {/* Header */}
              <div className="flex items-center space-x-3 mb-3">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-md overflow-hidden border border-purple-500 hover:scale-105 transition-transform"
                >
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </a>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-400 hover:underline hover:text-purple-300 transition-colors"
                  >
                    {exp.company}
                  </a>
                  <p className="text-xs text-gray-500">{exp.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                {exp.desc}
              </p>

              {/* Skills */}
              <div>
                <h5 className="font-medium text-white mb-2 text-sm">Skills:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#251f38] text-purple-400 px-3 py-1 text-xs rounded-lg border border-purple-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
