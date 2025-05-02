"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import project1 from "@/assets/telu.png";
import project2 from "@/assets/telu.png";
import project3 from "@/assets/telu.png";
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';

const projects = [
    { id: 1, year: 2022, title: "Project 1", description: "Description of Project 1", image: project1 },
    { id: 2, year: 2022, title: "Project 2", description: "Description of Project 2", image: project2 },
    { id: 3, year: 2022, title: "Project 3", description: "Description of Project 3", image: project3 },
];

const COLOR_TOP = [
    "#6a00f4", // Deep purple
    "#9d00ff", // Neon violet
    "#b5179e", // Magenta
    "#7209b7", // Vivid purple
    "#560bad", // Dark violet
    "#3a0ca3", // Midnight blue-purple
];

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const color = useMotionValue(COLOR_TOP[0]);


    const background = useMotionTemplate`
    radial-gradient(
      100% 60% at 50% 100%,  /* besar & posisi di bawah */${color} 0%,#000 100%)`;

    useEffect(() => {
        animate(color, COLOR_TOP, {
            ease: 'easeInOut',
            duration: 8,
            repeat: Infinity,
            repeatType: 'mirror',
        });
    }, []);


    return (
        <motion.section 
        style={{
            background,
        }}
        id="portfolio" 
        className="py-32 text-white">
            <div className='max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12'>

                <div>
                    <h2 className="text-6xl font-bold mb-10">
                        Selected <span className="text-gray-400">Project</span>
                    </h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-8 group"
                        >
                            <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                            <h3
                                className={`text-3xl font-semibold transition-colors duration-300 ${selectedProject.id === project.id
                                    ? 'text-gray-200'
                                    : 'group-hover:text-gray-400'
                                    }`}
                            >
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className='border-b-2 border-gray-200 my-4'></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className='text-gray-400 transition-all duration-400 ease-in-out'>
                                    {project.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <Image
                    src={selectedProject.image.src}
                    alt={selectedProject.title}
                    className='rounded-xl shadow-lg transition-opacity duration-400 ease-in-out'
                    width={800}
                    height={450}>


                </Image>
            </div>
        </motion.section>
    );
};
