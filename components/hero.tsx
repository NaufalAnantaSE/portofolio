"use client";
import React, { useEffect } from 'react';
import { useMotionValue, useMotionTemplate, animate, motion } from 'framer-motion';
import Image from "next/image"
import obj from '../public/next.svg';
import profilepic from '../public/profilepic.jpg'; // Replace with the correct path to your image
import { FiArrowRight } from 'react-icons/fi';

const COLOR_TOP = [
    "#6a00f4", // Deep purple
    "#9d00ff", // Neon violet
    "#b5179e", // Magenta
    "#7209b7", // Vivid purple
    "#560bad", // Dark violet
    "#3a0ca3", // Midnight blue-purple
];


export const Hero = () => {

    const color = useMotionValue(COLOR_TOP[0]);

    useEffect(() => {
        animate(color, COLOR_TOP, {
            ease: 'easeInOut',
            duration: 8,
            repeat: Infinity,
            repeatType: 'mirror',
        });
    }, []);

    const background = useMotionTemplate`
    radial-gradient(
      100% 60% at 50% 100%,  /* besar & posisi di bawah */${color} 0%,#000 100%)`;

    const border = useMotionTemplate`1px solid ${color}`;
    const box = useMotionTemplate`0px 4px 25px ${color}`;

    return (
        <motion.section
            style={{
                background,
            }}
            className='relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200'
        >
            <div className='z-10 flex flex-col items-center'>
                <span className='mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm'>
                    Open For Intern
                </span>
                <h1 className='text-white/40 text-7xl font-black'>Hi There! 👋</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent font-black leading-tight text-5xl md:text-7xl">
                    Naufal Ananta</h1>

                <Image
                    className='rounded-3xl border-4 border-gray/20 shadow-xl mt-6 mb-4'
                    src={profilepic}
                    alt="Naufal Ananta"
                    width={200}
                />

                <div className='flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4'>
                    <Image
                        src={obj}
                        alt="Naufal Ananta"
                        width={30}
                        className='rounded-2xl mx-auto '
                    />
                    <Image
                        src={obj}
                        alt="Naufal Ananta"
                        width={30}
                        className='rounded-2xl mx-auto '
                    />
                    <Image
                        src={obj}
                        alt="Naufal Ananta"
                        width={30}
                        className='rounded-2xl mx-auto '
                    />
                    <p className='font-medium'>Software Engineer</p>
                </div>

                <p className='my-6 max-w-xl text-center'>Frontend Developer based at Telkom University, passionate about building clean and interactive web interfaces.</p>
                <motion.button
                    style={{
                        border,
                        boxShadow: box,
                    }}
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    className='flex w-fit items-center gap-2 rounded-full px-4 py-2'
                >
                    Download My CV
                    <FiArrowRight></FiArrowRight>
                </motion.button>
            </div>

            <div className='bg-circle-container'>
                <div className='bg-circle-background'></div>
                <motion.div className='bg-circle'
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear"
                    }}></motion.div>


            </div>
        </motion.section>

    );
};
