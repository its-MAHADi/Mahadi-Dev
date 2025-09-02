import React from "react";
import { Fade } from "react-awesome-reveal";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-10">
      <div className="max-w-6xl mx-auto px-5 lg:px-0 text-center">
        <Fade cascade damping={0.2} triggerOnce>
          <h1 className="text-3xl font-bold inline-block border-b-4  border-blue-500 pb-1 mb-8">
            Work Experience
          </h1>

          <div className="relative border-l-4 border-blue-500 lg:pl-8 pl-4 inline-block text-left">
            <div className="mb-7 shadow-md rounded-md border-2 p-6 mt-6">
              <div className="absolute -left-[22px] top-6 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <Briefcase className="w-3.5 h-3.5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">
                Frontend Developer
              </h3>
              <p className="text-sm">BDCalling Academy</p>
              <span className="text-sm text-blue-500 font-medium block mt-1">
                08/2024 – 11/2024
              </span>
              <p className="mt-3 leading-relaxed">
                Completed an industrial attachment at <b>BD Calling Academy</b>,
                where I developed user interfaces for web applications using
                React and Redux. Collaborated closely with designers to deliver
                seamless and responsive user experiences. Optimized components
                for high performance across various devices and browsers.
                Actively participated in code reviews, contributing feedback to
                maintain high code quality standards.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Experience;
