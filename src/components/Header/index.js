/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Logo from "../../Images/favicon.ico";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";



const Header = ({ toggle }) => {
    return (
        <nav
            className='flex justify-between items-center h-16 bg-gradient-to-r from-gray-900 via-blue-900 to-green-500 relative font-sans'
            role='navigation'
        >

            <Link to='/' className='pl-8 pt-2.6 '>
                <img src={Logo} className="w-full " />
            </Link>
            <div className='pl-4 cursor-pointer  md:hidden ' onClick={toggle}>
                <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </div>
            <div className='pr-8 md:block  hidden'>
                <ScrollLink
                    className="p-4 hover:text-gray-300"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Home</ScrollLink>
                <ScrollLink
                    className="p-4 hover:text-gray-300"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >About</ScrollLink>
                <ScrollLink
                    className="p-4 hover:text-gray-300"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Portfolio</ScrollLink>
                <ScrollLink
                    className="p-4 hover:text-gray-300"
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                > Skills
                </ScrollLink>
            </div>
        </nav>
    );

};
export default Header;
