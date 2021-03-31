import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to='/' className='p-4 hover:text-gray-300'>
                About
      </Link>
            <Link to='/menu' className='p-4 hover:text-gray-300'>
                Portfolio
      </Link>
            <Link to='/about' className='p-4 hover:text-gray-300'>
                Skills
      </Link>
            <Link to='/contact' className='p-4 hover:text-gray-300'>
                Contact
      </Link>
        </div>
    );
};

export default Dropdown;