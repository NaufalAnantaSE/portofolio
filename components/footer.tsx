"use client";

import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-20 w-full bg-white/5 backdrop-blur-md border-t border-white/10 text-white py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">


                <p className="text-sm text-white/50">
                    © {year} Naufal Ananta. All rights reserved.
                </p>

                <div className="flex space-x-4">
                    <a
                        href="https://github.com/NaufalAnantaSE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                    >
                        <FiGithub size={20} />
                    </a>
                    <a
                        href="mailto:anantanaufal250@gmail.com"
                        className="hover:text-purple-400 transition"
                    >
                        <FiMail size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/naufalananta/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                    >
                        <FiLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
