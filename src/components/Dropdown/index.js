import React from 'react';
import { Link as ScrollLink } from "react-scroll";

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div
            className={
                isOpen
                    ? 'grid grid-rows-4 text-center items-center bg-gradient-to-b from-pink-800 via-yellow-200 to-cyan-400'
                    : 'hidden'
            }
            onClick={toggle}
        >
            <ScrollLink
                className="p-4"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={3000}
            >About</ScrollLink>
            <ScrollLink
                className="p-4"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={3000}
            >Portfolio</ScrollLink>
            <ScrollLink
                className="p-4 "
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={4000}
            >Skills</ScrollLink>
            <ScrollLink
                className="p-4"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={4000}
            >Contact</ScrollLink>
        </div>
    );
};

export default Dropdown;