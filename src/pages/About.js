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
                                    {/* <div>
                                    <img
                                        className="h-12"
                                        src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                                        alt="Workcation"
                                    />
                                </div> */}
                                    <blockquote className="mt-8">
                                        <div className="relative text-lg font-medium text-white md:flex-grow">
                                            {/* <svg
                                            className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                                            fill="currentColor"
                                            viewBox="0 0 32 32"
                                            aria-hidden="true"
                                        >
                                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                        </svg> */}
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
                        {/* Content area */}
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

                                    {/* <img src={Logo} className="rounded-full h-24 w-24 cursor-pointer  mx-auto mt-5 items-center text-center animate-float opacity-50" alt="brain" /> */}

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



// export default function About() {
//     return (
//         <div className="about-section" id="about">
//             <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-900 via-yellow-200 to-gray-900  bg-cover bg-center bg-fixed bg-no-repeat "
//                 id="/about" >
//                 <h1 className=" text-7xl md:text-3.5 text-center  text-gray-900 font-semibold font-serif "> About Me</h1>
//                 <div className=" flex flex-wrap justify-center mt-10">
//                     {content.about.imag.map((imag, index) => {
//                         return (
//                             <span className={`${
//                                 index % 2 === 0 ? 'animate-float' : 'animate-refloat'
//                                 } w-3/6 h-3/6 bg-gradient-to-b from-pink-900 via-yellow-200 to-gray-900 shadow-2xl mb-20 square-full flex items-center p-5`}>
//                                 <LazyLoadImage src={imag.img} alt={imag.alt} />


//                             </span>
//                         );

//                     })}

//                 </div>
//                 <p className="text-gray-900 font-sans p-2.5 rounded-lg w-9/12 sw-11/12 text-xl font-semibold mt-10"> {content.about.desc}</p>

//                 <ScrollLink to="/portfolio" smooth={true}  >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-float mt-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                     </svg>
//                 </ScrollLink>

//             </div>
//         </div>

//     )
// }
