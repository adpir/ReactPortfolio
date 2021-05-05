/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import content from '../../content'
import { Link as ScrollLink } from 'react-scroll';
import Videos from '../../Videos/Abstract.mp4';
import Typical from 'react-typical'


export default function Hero() {
    const [animated, setAnimated] = useState(false);
    useEffect(() => {
        setAnimated(true)
    }, []);

    return (
        <div className=" min-h-screen overflow-hidden flex-row "
            style={{
                background: '#091c29',
            }}>
            <div className="relative flex flex-col mb-11 h-screen items-center justify-center">
                <video className="absolute shadow rounded-lg object-cover w-full h-full mb-11" src={Videos} autoPlay loop muted />
                <h2 className={`${
                    animated ? '' : 'translate-y-10 opacity-0 '
                    }transform transition duration-2000 text-white font-dosis text-center ease-in-out text-3xl md:text-5xl font-bold`}>
                    {content.header.text[0]}
                    <br />
                    {content.header.text[1]}
                </h2>
                <h1 className={`${
                    animated ? '' : 'translate-y-10 opacity-0'
                    }transform transition duration-2000  text-white font-dosis text-center ease-in-out font-bold text-3xl bg-cyan-50`}>
                    {content.header.text[2]}{''}
                    <Typical
                        steps={content.header.typical}
                        loop={Infinity}
                        className="inline-inblock"
                    />
                </h1>
                <ScrollLink to="/about" smooth={true}>

                    <button

                        className="animate-float mx-auto mt-4  text-center inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-800 hover:to-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        WELCOME
      </button>
                </ScrollLink>

            </div >

        </div >


    );
};

