import React from 'react';
import mahadi from '../assets/mahadi.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNpm, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';

const Banner = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 lg:px-20 py-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 w-full max-w-6xl mx-auto z-10">
        
        {/* Text Section */}
        <div className="flex-1 space-y-5 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Hi, I am <br /> Md. <span className="text-blue-500">Mahadi Hasan</span>
          </h1>
          <div className="text-2xl font-semibold text-blue-500">
            <Typewriter
              words={[
                'MERN Stack Developer',
                'JavaScript Developer',
                'Front-End Developer',
                'ReactJs Developer',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <p className="text-lg text-gray-600">
            Dedicated Web developer seeking a challenging role to apply my skills in building robust and scalable web applications. Committed to delivering high-quality solutions that meet and exceed client expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Hire Me
            </button>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-100 transition">
              Resume
            </button>
          </div>
        </div>

        {/* Image with Orbiting Icons */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] shrink-0">
            {/* Orbiting Icons */}
         <div className="absolute inset-0 animate-pulse">
            {/* Top Center */}
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
              <FaReact size={28} color="#61DBFB" />
            </div>
          
            {/* Bottom Center */}
            <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2">
              <FaJs size={28} color="#F7DF1E" />
            </div>
          
            {/* Middle Left */}
            <div className="absolute top-1/2 left-[-30px] transform -translate-y-1/2">
              <FaHtml5 size={28} color="#e34c26" />
            </div>
          
            {/* Middle Right */}
            <div className="absolute top-1/2 right-[-30px] transform -translate-y-1/2">
              <FaCss3Alt size={28} color="#264de4" />
            </div>
          
            {/* Top Left Corner */}
            <div className="absolute top-[5%] left-[10%]">
              <SiTailwindcss size={24} color="#38BDF8" />
            </div>
          
            {/* Top Right Corner */}
            <div className="absolute top-[5%] right-[10%]">
              <FaNodeJs size={26} color="#3C873A" />
            </div>
          
            {/* Bottom Left Corner */}
            <div className="absolute bottom-[5%] left-[10%]">
              <SiMongodb size={26} color="#47A248" />
            </div>
          
            {/* Bottom Right Corner */}
            <div className="absolute bottom-[5%] right-[10%]">
              <SiExpress size={22} color="#000000" />
            </div>
          
            {/* Center Left */}
            <div className="absolute top-1/2 left-[5%] transform -translate-y-1/2">
              <FaGithub size={24} color="#333" />
            </div>
          
            {/* Center Right */}
            <div className="absolute top-1/2 right-[5%] transform -translate-y-1/2">
              <FaNpm size={24} color="#CB3837" />
            </div>
            </div>



            {/* Profile Image */}
            <div className="relative z-10 w-full h-full rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500">
              <img
                src={mahadi}
                alt="Mahadi"
                className="rounded-full w-full h-full object-cover border-4 border-white"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
