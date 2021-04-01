/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-undef */
import React from 'react'
import Videos from '../../Videos/Abstract.mp4';
import Fade from 'react-reveal/Fade'

// import Header from '../Header'
import Footer from '../Footer'


//I am calling this my landing page
const Hero = ({
    heading,
    ...otherProps
}) => {
    return (
        <div className="min-h-full bg-gradient-to-r from-green-400 to-blue-500 font-body">

            < div className="h-screen flex flex-col">


                <div
                    className=" relative flex items-center justify-center h-full
                bg-cover bg-center bg-fixed bg-no-repeat"

                    style={{
                        backgroundImage: `url(${Videos})`
                    }}>
                    <Fade left cascade>
                        {heading && <h1 className="
                 relative px-2.5 text-gray-400 font-mono uppercase z-10 text-4xl text-center italic md:text-4xl ">
                            {heading}
                        </h1>}
                    </Fade>
                    <div className="
                    z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-40
                    "
                    />

                </div>
            </div >
            <div className="w-full max-w-7xl mx-auto">
                {otherProps.children}
            </div>
            <Footer />
        </div >
    );
};
Hero.defaultProps = {
    heading: " ",
};
export default Hero;
