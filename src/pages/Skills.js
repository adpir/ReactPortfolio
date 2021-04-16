import React from 'react'
import { DiNodejs } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { Link as ScrollLink } from 'react-scroll';

export default function Skills() {
    return (
        <div className="skills-section" id="skills">
            <div className="min-h-screen flex flex-col  bg-white" id="/skills" >
                <h1 className="text-center text-gray-500 text-5xl font-semibold font-serif "> Programming Languages & Tools</h1>
                <div className=" animate-pulse flex flex-wrap justify-center mt-4 p-40">
                    <DiNodejs className="w-36 h-36 text-green-700 " aria-hidden="true" />
                    <DiMysql className="w-36 h-36 text-blue-900" aria-hidden="true" />
                    <DiMongodb className="w-36 h-36 text-green-400" aria-hidden="true" />
                    <DiCss3 className="w-36 h-36 text-lightblue-300" aria-hidden="true" />
                    <DiBootstrap className="w-36 h-36 text-purple-500" aria-hidden="true" />
                    <DiReact className="w-36 h-36 text-cyan-400" aria-hidden="true" />
                </div>
                <h2 className="text-center text-gray-500 text-4xl font-semibold font-serif "> Workflow</h2>
                <ul>
                    <li className="flex flex-wrap px-40 py-5 text-gray-500 text-2xl uppercase  sm:justify-center
                     font-semibold font-serif">
                        Mobile-First * Responsive Design * Dynamic * Fast *
                    
                    </li>
                 
                </ul>
                <ScrollLink to="/" smooth={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-float mt-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </ScrollLink>
            </div>
        </div>

    )
}
