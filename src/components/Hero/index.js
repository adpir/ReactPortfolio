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
        <div className=" min-h-screen overflow-hidden sm:rounded-lg bg-gradient-to-r from-green-400 to-blue-500 "
            style={{
                background: '#091c29',
            }}>
            <div className="px-4 py-5 sm:p-6">
                <div className="relative flex flex-col items-center justify-center h-screen ">
                    <video className="absolute min-h-screen shadow rounded-lg bg-cover bg-center bg-fixed bg-no-repeat" src={Videos} autoPlay loop muted />

                    <h2 className={`${
                        animated ? '' : 'translate-y-10 opacity-0'
                        }transform transition duration-2000 text-white font-dosis text-center ease-in-out text-3xl md:text-5xl font-bold`}>
                        {content.header.text[0]}
                        <br />
                        {content.header.text[1]}
                    </h2>
                    <h1 className={`${
                        animated ? '' : 'translate-y-10 opacity-0'
                        }transform transition duration-2000 text-white font-dosis text-center ease-in-out font-bold text-3xl bg-cyan-50`}>
                        {content.header.text[2]}{''}
                        <Typical
                            steps={content.header.typical}
                            loop={Infinity}
                            className="inline-block"
                        />
                    </h1>
                    <ScrollLink to="/about" smooth={true}>
                        <button className="animate-float bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-800 hover:to-yellow-300 px-10 py-3 text-xl uppercase mt-10 rounded-lg">
                            {content.header.btnText}
                        </button>
                    </ScrollLink>
                </div>
            </div>
        </div>

    );
};

