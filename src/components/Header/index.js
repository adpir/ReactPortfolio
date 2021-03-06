/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Logo from "../../Img/brain_lines.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";



const Header = ({ toggle }) => {

    return (
        <nav
            className='flex justify-between items-center h-16 bg-gradient-to-r from-gray-800 via-blue-600 to-cyan-400 relative font-sans'
            role='navigation'
        >

            <Link to='/' className='pr-10 '>
                <img src={Logo} className="w-20 h-13 object-static" />

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
                    className="p-4 text-white hover:text-gray-800"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={5000}
                >Home
                </ScrollLink>
                <ScrollLink
                    className="p-4 text-white hover:text-gray-800"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={3000}
                >About
                </ScrollLink>
                <ScrollLink
                    className="p-4 text-white hover:text-gray-800"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={4000}
                >Portfolio
                </ScrollLink>
                <ScrollLink
                    className="p-4 text-white hover:text-gray-800"
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={5000}
                >Skills
                </ScrollLink>
                <ScrollLink
                    className="p-4 text-white hover:text-gray-800"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={5000}
                >Contact
                </ScrollLink>
            </div>
        </nav>
    );

};
export default Header;
