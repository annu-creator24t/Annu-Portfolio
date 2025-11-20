import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import AnnuPhoto from "./Annu_photo.jpg"; // ✅ Local image import

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Annu Tiwari
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={["React Developer", "ML Engineer", "Coder"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a React developer and full-stack learner who enjoys solving DSA
            problems in Java. I am interested in AI/ML and like creating
            projects, especially in the medical field, to learn more. I am also
            curious about research and exploring new ideas in technology.
          </p>

          <a
            href="https://drive.google.com/file/d/1tvMeLBwSh2RZf8Rc7ZRIlSHsDDJZXSlX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 8px #8245ec, 0 0 20px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex justify-center md:justify-end md:pl-12 lg:pl-16">
          {/* ✅ Clean Circular Image with Tilt, Reduced Height */}
          <Tilt
            className="relative w-86 h-50 sm:w-80 sm:h-72 md:w-[25rem] md:h-[22rem] lg:w-[27rem] lg:h-[21rem] rounded-full overflow-hidden flex items-center justify-center"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={AnnuPhoto}
              alt="Annu Tiwari"
              className="w-full h-full rounded-full object-cover shadow-[0_0_25px_rgba(130,69,236,0.4)]"
              style={{
                objectPosition: "center top",
              }}
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
