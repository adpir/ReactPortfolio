import React from 'react'
import content from '../content/index'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link as ScrollLink } from 'react-scroll';
import Slide from 'react-reveal/Slide';



export default function About() {
    return (
        <div className="about-section" id="about">
            <div className="relative bg-gradient-to-b from-pink-800 via-yellow-300 to-cyan-500  py-16 sm:py-40">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start" id="/about" >
                    <div className="relative sm:py-16 lg:py-0">
                        <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
                            <svg
                                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                width={404}
                                height={392}
                                fill="none"
                                viewBox="0 0 404 392"
                            >
                                <defs>
                                    <pattern
                                        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                            </svg>
                        </div>
                        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">

                            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                {content.about.imag.map((imag, index) => {
                                    return (
                                        <span className={`${
                                            index % 2 === 0 ? 'animate-float' : 'animate-refloat'
                                            } absolute inset-0 h-full w-full  object-cover bg-gradient-to-b from-pink-800 via-yellow-200 to-cyan-400 shadow-2xl mb-20 square-full flex items-center p-5`}>
                                            <LazyLoadImage src={imag.img} alt={imag.alt} />


                                        </span>
                                    );

                                })}

                                <div className="h-48" style={{ mixBlendMode: 'multiply' }} />
                                <div className="absolute h-full w-full bg-gradient-to-b from-pink-800 via-yellow-200 to-cyan-500 opacity-90" />
                                <div className="relative px-8">
                                    <blockquote className="mt-8">
                                        <div className="relative text-lg font-medium text-white md:flex-grow">
                                            <p className="relative">

                                            </p>
                                        </div>
                                        <footer className="mt-4">
                                            <p className="text-base font-semibold text-cyan-500">Alice Piar, Software Enginnear</p>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                        <div className="pt-12 sm:pt-16 lg:pt-20">

                            <h2 className="text-6xl text-center text-cyan-500 font-extrabold tracking-tight sm:text-7xl">
                                ABOUT ME
                        </h2>
                            <div className="mt-6 text-justify text-gray-900 space-y-6">
                                <Slide right >
                                    <p className="text-lg ">
                                        {content.about.desc}
                                    </p>
                                </Slide>
                                <ScrollLink to="/portfolio" smooth={true}  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-pink-800 cursor-pointer mx-auto mt-5 items-center text-center animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}



