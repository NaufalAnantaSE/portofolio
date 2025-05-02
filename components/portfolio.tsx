"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import project1 from "@/assets/ekomers.jpg";
import project2 from "@/assets/merantijaya.png";
import project3 from "@/assets/image.png";
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';

const projects = [
    { id: 1, year: 2022, title: "Rebuild E-commerce Apps", description: "A Flutter-based e-commerce application with user login system, interactive page navigation, and API integration.", image: project1 },
    { id: 2, year: 2022, title: "Meranti Jaya Building Store Website (PHP)", description: "A PHP-based information system for managing products, stock, and sales transactions at Meranti Jaya building store. Features include product catalog, shopping cart, user management, and sales reporting.", image: project2 },
    { id: 3, year: 2022, title: "Salem Village Waste Bank – Web-Based System (PHP Native)", description: "A PHP native web-based system designed for managing household waste exchange transactions in Salem Village. The system allows waste bank administrators to record deposits, track user balances, and generate reports. It aims to simplify the waste collection process and provide transparent balance tracking for residents who exchange recyclable waste for monetary value or goods.", image: project3 },
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
                        Selected <span className="text-purple-400">Project</span>
                    </h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-8 group"
                        >
                        
                            <h3
                                className={`text-3xl font-semibold transition-colors duration-300 ${selectedProject.id === project.id
                                    ? 'text-purple-200'
                                    : 'group-hover:text-purple-400'
                                    }`}
                            >
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className='border-b-2 border-purple-200 my-4'></div>
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
