import React from 'react'
import { DiNodejs } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const features = [
    { name: 'NODE', icon: DiNodejs },
    { name: 'MySQL Database', icon: DiMysql },
    { name: 'MongoDB', icon: DiMongodb },
    { name: 'HTML', icon: DiHtml5 },
    { name: 'CSS', icon: DiCss3 },
    { name: 'JS', icon: DiJavascript1 },
    { name: 'React', icon: DiReact },
    { name: 'Bootstrap', icon: DiBootstrap },
    { name: 'Tailwinds', icon: SiTailwindcss },
]

export default function Skills() {
    return (
        <div className="skills-section" id="skills">
            <div className="relative bg-gradient-to-r from-gray-800 via-blue-600 to-cyan-400 py-16 sm:py-24 lg:py-32" id="/skills" >
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <p className="mt-4.5 font-extrabold text-yellow-400 text-4xl  font-serif tracking-tight sm:text-5xl">
                        Programming Languages & Tools
        </p>

                    <div className="mt-12">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.name} className="pt-6">
                                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                        <div className="-mt-6">
                                            <div>
                                                <span className="animate-pulse inline-flex items-center justify-center p-3 bg-transparent rounded-md shadow-lg">
                                                    <feature.icon className="h-40 w-40 text-cyan-400" aria-hidden="true" />
                                                </span>
                                            </div>
                                            <h3 className="mt-8 text-lg font-mono text-yellow-400 tracking-tight">{feature.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <h4 className="mt-8 text-lg text-center font-mono text-yellow-400 tracking-tight">
                            Mobile-First * Responsive Design * Dynamic * Fast * </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}



