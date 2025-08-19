import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';


const projects = [
  {
    id: 1,
    route: "FitVerse-Website",
    name: "FitVerse Website",
    img: "https://i.ibb.co.com/1fPTsnyX/Screenshot-2025-08-06-235040.png",
    description:
      "FitVerse is a full-featured MERN stack fitness platform where users can sign up as **Admins**, **Trainers**, or **Members**. It includes booking training sessions, managing classes, making payments, and engaging with a dynamic **community forum** that supports posts, voting, and image sharing.",
  },
  {
    id: 2,
    route: "blog-Website",
    name: "Blog Website",
    img: "https://i.ibb.co.com/twLLLSjr/Screenshot-2025-08-12-163116.png",
    description:
      "A full-stack blogging platform where users can read, search, filter, comment, and wishlist blogs. It features Firebase Authentication, JWT security, and responsive design.",
  },
  {
    id: 3,
    route: "hobbyhub",
    name: "HobbyHub",
    img: "https://i.ibb.co.com/b5tVrWkS/Screenshot-2025-08-20-022026.png",
    description:
      "HobbyHub is a MERN stack web app for discovering and joining local hobby groups. Users can create, update, delete groups, and view groups they’ve joined.",
  },
  {
    id: 4,
    route: "DocTalk",
    name: "DocTalk-Website",
    img: "https://i.ibb.co/V07tXpLM/Screenshot-2025-06-30-163356.png",
    description:
      "DocTalk is a doctor consultation booking platform. Users can view doctors, check availability, and book appointments with smooth animations and secure login.",
  },
];


const Projects = () => {

      const navigate =useNavigate();
    
  return (
    <div>
         <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      {/* Title with motion underline */}
     
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold inline-block border-b-4 border-blue-500 pb-1">
        Projects
        </h1>
      </div>

      {/* Projects grid */}
      <div className="grid gap-10 md:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className=" dim:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col group cursor-pointer"
            initial={{ rotateY: -90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ transformStyle: 'preserve-3d' }}
            whileHover={{ scale: 1.03 }}
            // onClick={() => alert(`Show details for "${project.name}"`)}
          >
            {/* Image with zoom on hover */}
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 dim:text-white">
                {project.name}
              </h3>
              <p className="dim:text-gray-300 flex-grow line-clamp-2">
                {project.description}
              </p>
              <button
                type="button"
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/projects/${project.id}`)
                }}
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>


    </div>
  )
}

export default Projects
