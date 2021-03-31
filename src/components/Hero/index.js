/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-undef */
import React from 'react'
import Videos from '../../Videos/Abstract.mp4';

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
                    className=" relative flex items-center justify-center h-3/4
                bg-cover bg-center bg-fixed bg-no-repeat"

                    style={{
                        backgroundImage: `url(${Videos})`
                    }}>
                    {heading && <h1 className="
                 relative px-2.5 text-gray-400 font-mono uppercase z-10 text-4xl text-center italic md:text-4xl  opacity-50">
                        {heading}
                    </h1>}
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
