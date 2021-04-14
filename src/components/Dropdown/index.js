import React from 'react';
import { Link as ScrollLink } from "react-scroll";

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div
            className={
                isOpen
                    ? 'grid grid-rows-4 text-center items-center bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600'
                    : 'hidden'
            }
            onClick={toggle}
        >
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
            >Skills</ScrollLink>
            <ScrollLink
                className="p-4 hover:text-gray-300"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Contact</ScrollLink>
        </div>
    );
};

export default Dropdown;