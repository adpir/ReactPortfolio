// /* eslint-disable no-lone-blocks */
// /* eslint-disable react/jsx-no-target-blank */
// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import CardAboutMe from '../components/CardAboutMe';
import { Link as ScrollLink } from 'react-scroll';


function Portfolio() {
    return (
        <div className="portfolio-section" id="portfolio">
            <div class=" bg-cyan-500 min-h-screen overflow-hidden shadow rounded-lg " id="/portfolio">
                <div className="px-4 py-5 sm:px-6 ">
                    <h1 className="text-5xl font-dosis text-center font-bold  text-gray-600 ">Portfolio</h1>
                </div>
                <div className="px-10 py-5 lg:ml-10 lg:mb-20 sm:p-6  ">

                    <CardAboutMe
                    />
                    <ScrollLink to="/skills" smooth={true}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-56  mt-10 align-text-bottom animate-float " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </ScrollLink>
                </div>

            </div>
        </div>
    );
}


export default Portfolio;
