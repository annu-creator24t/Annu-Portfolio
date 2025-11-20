import React from "react";
import { education } from "../../constants.js";
import { MapPin } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          My education has been a journey of learning and growth.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-purple-600 to-purple-900 h-full rounded-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative flex items-center justify-between mb-24 w-full"
          >
            {/* Timeline Node (Logo) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20 flex justify-center items-center">
              <div className="bg-gray-900 border-4 border-purple-600 w-16 h-16 rounded-full flex justify-center items-center shadow-[0_0_25px_4px_rgba(130,69,236,0.6)]">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Horizontal Connector Line */}
            <div
              className={`absolute top-1/2 w-[calc(50%-2rem)] h-[2px] bg-gradient-to-r from-purple-600 to-purple-400 ${
                index % 2 === 0
                  ? "left-[calc(50%+2rem)]"
                  : "right-[calc(50%+2rem)] rotate-180"
              }`}
            ></div>

            {/* Education Card */}
            <div
              className={`relative w-[45%] p-6 rounded-2xl border border-purple-600/40 
                bg-gradient-to-br from-[#0b021b] via-[#1a0b33] to-[#0b021b]
                hover:shadow-[0_0_40px_4px_rgba(130,69,236,0.5)]
                transition-all duration-500 hover:-translate-y-1
                ${
                  index % 2 === 0
                    ? "ml-auto text-left"
                    : "mr-auto text-left sm:text-right"
                }`}
            >
              {/* Date Badge */}
              <div
                className={`absolute -top-4 ${
                  index % 2 === 0 ? "left-6" : "right-6"
                } bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}
              >
                {edu.date}
              </div>

              {/* Degree and School */}
              <div
                className={`flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center gap-3`}
              >
                <div className="w-12 h-12 rounded-md overflow-hidden border border-purple-500">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-gray-300 text-sm">{edu.school}</p>
                  {edu.grade && (
                    <p className="text-gray-400 text-sm mt-1 font-semibold">
                      Grade: {edu.grade}
                    </p>
                  )}
                </div>
              </div>

              {/* Location */}
              {edu.location && (
                <div
                  className={`flex items-center gap-2 mt-3 text-sm text-purple-400 font-medium ${
                    index % 2 === 0 ? "" : "justify-end"
                  }`}
                >
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </div>
              )}

              {/* Description */}
              <p
                className={`mt-4 text-gray-400 text-sm leading-relaxed ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
