import React from 'react'
import { DiNodejs } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiReact } from "react-icons/di";

export default function Skills() {
    return (
        <div className="skills-section" id="skills">
            <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-800 via-blue-600 to-cyan-400 " id="/skills" >
                <h1 className="text-center text-yellow-400 text-5xl font-semibold font-serif "> Programming Languages & Tools</h1>
                <div className=" animate-pulse flex flex-wrap justify-center mt-4 p-40">
                    <DiNodejs className="w-40 h-40 text-green-700 " aria-hidden="true" />
                    <DiMysql className="w-40 h-40 text-blue-900" aria-hidden="true" />
                    <DiMongodb className="w-40 h-40 text-green-400" aria-hidden="true" />
                    <DiCss3 className="w-40 h-40 text-lightblue-300" aria-hidden="true" />
                    <DiBootstrap className="w-40 h-40 text-purple-500" aria-hidden="true" />
                    <DiReact className="w-40 h-40 text-cyan-300" aria-hidden="true" />
                </div>
                <h2 className="text-center text-yellow-400 text-4xl font-semibold font-serif "> Workflow</h2>
                <ul>
                    <li className="flex flex-wrap px-40 py-5 text-yellow-400 text-2xl uppercase  sm:justify-center
                     font-semibold font-serif">
                        Mobile-First * Responsive Design * Dynamic * Fast *

                    </li>

                </ul>

            </div>
        </div>

    )
}
