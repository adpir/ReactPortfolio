import React from 'react'
import content from '../content/index'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-dosis bg-gradient-to-r from-green-400 to-blue-500" id="/about">
            <h1 className="text-center text-gray-500 text-5xl font-semibold font-serif "> About Me</h1>
            <div className=" flex flex-wrap justify-center mt-10">
                {content.about.tech.map((tech, index) => {
                    return (
                        <span className={`${
                            index % 2 === 0 ? 'animate-float' : 'animate-refloat'
                            } w-3/6 h-3/6  bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl m-2 square-full flex items-center p-5`}>
                            <LazyLoadImage src={tech.img} alt={tech.alt} />

                        </span>
                    );
                })}

            </div>
            <p className="text-blue-800 bg-gray-500 font-sans p-2.5 rounded-lg w-9/12 sw-11/12 text-xl mt-10"> {content.about.desc}</p>
        </div>

    )
}
