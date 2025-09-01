import React from 'react'; 
import { useLoaderData, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Container from '../component/SharedComponent/Container';

const ProjectDetail = () => {
    const project = useLoaderData();
    const navigate = useNavigate();

    return (
        <Container>
            <motion.div
                className="max-w-5xl mx-auto px-4 py-16"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Title */}
                <motion.h1
                    className="text-4xl font-bold mb-6 mt-5"
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    {project.name}
                </motion.h1>

                {/* Image */}
                <motion.div
                    className="overflow-hidden rounded-xl shadow-md mb-6"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-auto object-cover"
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    className="text-lg mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {project.description}
                </motion.p>

                {/* Info List */}
                <ul className="space-y-4 mb-10">
                    <li>
                        <span className="font-semibold">
                            Tech Stack:
                        </span>{' '}
                        {project.tech.filter(Boolean).join(', ')}
                    </li>
                    <li>
                        <span className="font-semibold">
                            Challenges:
                        </span>{' '}
                        {project.challenges}
                    </li>
                    <li>
                        <span className="font-semibold ">
                            Future Plans:
                        </span>{' '}
                        {project.future}
                    </li>
                </ul>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                    <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg"
                        whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }} // slightly brighter blue
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <FaExternalLinkAlt /> Live Project
                    </motion.a>
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-lg"
                        whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }} // slightly lighter gray
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <FaGithub /> GitHub (Client)
                    </motion.a>
                </div>
            </motion.div>

            {/* Back Button */}
            <motion.button
                onClick={() => navigate(-1)}
                whileHover={{ scale: 1.05, x: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group mt-4 mb-8 inline-flex items-center gap-2 cursor-pointer px-5 py-2 bg-gray-200 dim:bg-gray-700 text-gray-800 dim:text-white rounded-full shadow hover:bg-blue-100 dim:hover:bg-blue-800 transition duration-300"
            >
                <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
                <span className="text-sm font-medium">Back to Projects</span>
            </motion.button>
        </Container>
    );
};

export default ProjectDetail;