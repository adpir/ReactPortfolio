import React from 'react'
import content from '../content/index'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link as ScrollLink } from 'react-scroll';
// import image from '../Images/lines.png'

export default function About() {
    return (
        <div className="about-section" id="about">
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-900 via-yellow-200 to-gray-900  bg-cover bg-center bg-fixed bg-no-repeat "
                id="/about" >
                <h1 className=" text-7xl md:text-3.5 text-center  text-gray-900 font-semibold font-serif "> About Me</h1>
                <div className=" flex flex-wrap justify-center mt-10">
                    {content.about.imag.map((imag, index) => {
                        return (
                            <span className={`${
                                index % 2 === 0 ? 'animate-float' : 'animate-refloat'
                                } w-3/6 h-3/6 bg-gradient-to-b from-pink-900 via-yellow-200 to-gray-900 shadow-2xl mb-20 square-full flex items-center p-5`}>
                                <LazyLoadImage src={imag.img} alt={imag.alt} />


                            </span>
                        );

                    })}

                </div>
                <p className=" text-gray-900 font-sans p-2.5 rounded-lg w-9/12 sw-11/12 text-xl font-semibold mt-10"> {content.about.desc}</p>

                <ScrollLink to="/portfolio" smooth={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-float mt-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </ScrollLink>

            </div>
        </div >
    )
}
