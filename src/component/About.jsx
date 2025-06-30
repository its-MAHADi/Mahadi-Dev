import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import profile from '../assets/Md.Mahadi Hasan.jpg'; // replace with your image

const About = () => {
  return (
    <div id='about' className="py-7">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Left: Image and Socials */}
        <Slide direction="left" triggerOnce>
          <div className="flex flex-col items-center text-center md:text-left">
            <img src={profile} alt="Profile" className="w-80 h-80 rounded-full border-4 border-blue-400 shadow-lg" />
            <h2 className="text-2xl font-bold mt-5 ">Md. Mahadi Hasan</h2>
            <p className="text-blue-500 font-semibold">MERN-Stack Web Developer</p>
            <div className="flex gap-4 mt-3 text-2xl">
              <a href="https://github.com/its-MAHADi"target='_blank'><FaGithub /></a>
              <a href="#"target='_blank'><FaLinkedin /></a>
              <a href="https://www.instagram.com/__m_a_h_a_d_i___/"target='_blank'><FaInstagram /></a>
              <a href="https://www.facebook.com/mh.mahadi.921944/"target='_blank'><FaFacebook /></a>
            </div>
            <button className="mt-5 bg-blue-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full transition">
              Hire Me
            </button>
          </div>
        </Slide>

        {/* Right: About Description */}
        <Fade direction="up" cascade triggerOnce>
          <div>
            <h1 className="text-4xl font-bold mb-3 border-b-4 border-blue-500 inline-block pb-1">About Me</h1>
            <p className="text-blue-500 italic mb-3">
              "Crafting digital symphonies with code, where creativity meets functionality. Welcome to my coding odyssey! 🚀"
            </p>
            <p className=" mb-6">
              As a MERN-Stack Web Developer, I specialize in crafting dynamic and responsive web applications using the power of React, Node.js, and MongoDB. Alongside my proficiency in the MERN stack, I have a solid foundation in creating polished static websites with HTML5, CSS3, and JavaScript (ES6). I embrace challenges and am fueled by the belief in hard work. My goal is to grow into a world-class developer while delivering high-quality, scalable applications.
            </p>

            <h2 className="text-2xl font-bold mb-4">I always focus on</h2>
            <ul className="space-y-3 text-lg">
              <li>🎨 Crafting pixel-perfect user interfaces that narrate compelling stories.</li>
              <li>💻 Code alchemist with a gift for transforming intricate problems into elegant solutions.</li>
              <li>🔍 Explorer of the ever-evolving landscape of web technologies.</li>
              <li>✨ Passionate about crafting not just applications, but memorable experiences.</li>
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
