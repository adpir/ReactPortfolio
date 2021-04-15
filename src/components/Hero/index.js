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
        <div className="min-h-full bg-gradient-to-r from-green-400 to-blue-500 font-body">

            < div className="h-screen flex flex-col">
                <div
                    className=" relative flex items-center justify-center h-full
                bg-cover bg-center bg-fixed bg-no-repeat"

                    style={{
                        backgroundImage: `url(${Videos})`
                    }}>
                    <div className="text-white font-dosis text-center md:text-left">
                        <h2 className={`${
                            animated ? '' : 'translate-y-10 opacity-0'
                            }transform transition duration-2000 ease-in-out text-3xl md:text-5xl font-bold`}>
                            {content.header.text[0]}
                            <br />
                            {content.header.text[1]}
                        </h2>
                        <h1 className={`${
                            animated ? '' : 'translate-y-10 opacity-0'
                            }transform transition duration-2000 ease-in-out font-bold text-3xl bg-cyan-50`}>
                            {content.header.text[2]}{''}
                            <Typical
                                steps={content.header.typical}
                                loop={Infinity}
                                className="inline-block"
                            />
                        </h1>
                        <ScrollLink to="/about" smooth={true}>
                            <button className="animate-float bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg">
                                {content.header.btnText}
                            </button>
                        </ScrollLink>
                    </div>

                </div>
            </div >

        </div >
    );
};

