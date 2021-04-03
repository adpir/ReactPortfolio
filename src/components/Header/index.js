/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Logo from "../../Images/favicon.ico";
import { Link } from "react-router-dom";



const Header = ({ toggle }) => {
    return (
        <nav
            className='flex justify-between items-center h-16 bg-gradient-to-r from-gray-900 via-blue-900 to-green-500 relative font-sans'
            role='navigation'
        >

            <Link to='/' className='pl-8 pt-2.6 '>
                <img src={Logo} className="w-full " />
            </Link>
            <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
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
                <Link to='/' className='p-4'>
                    Home
        </Link>
                <Link to='/about' className='p-4'>
                    About
        </Link>
                <Link to='/portfolio' className='p-4'>
                    Portfolio
        </Link>
                <Link to='/skills' className='p-4'>
                    Skills
        </Link>
                <Link to='/contact' className='p-4'>
                    Contact
        </Link>
            </div>
        </nav>
    );

};

export default Header;

// const Header = () => {
//     const [active, setActive] = useState(false);

//     const onClick = () => {
//         setActive(!active);
//     };

//     return (
//         <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-green-500 relative">
//             <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
//                 <div className="w-14">
//                     <img src={Logo} className="w-full" />
//                 </div>

//                 <div onClick={onClick}
//                     className={`
//                 md:hidden uppercase
//                 `}
//                 >
//                     Menu
//                     </div>

//                 <nav className={`
//                 ${!active && 'hidden'}
//                 absolute flex flex-col top-full w-full left-0 z-20
//                 md:static md:w-auto md:flex
//                 `}
//                 >
//                     <ul className="md:flex-row md:flex">
//                         <li className="list-none md:mr-5">
//                             <Link className="flex w-full text-base uppercase hover:text-gray-300 cursor-pointer
//                             pt-2.5 px-2.5">
//                                 About
//                         </Link>
//                         </li>
//                         <li className="list-none md:mr-5">
//                             <Link className="flex w-full text-base uppercase hover:text-gray-300 cursor-pointer
//                             pt-2.5 px-2.5">
//                                 About
//                         </Link>
//                         </li>
//                         <li className="list-none md:mr-5">
//                             <Link className="flex w-full text-base uppercase hover:text-gray-300 cursor-pointer
//                             pt-2.5 px-2.5">
//                                 About
//                         </Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;
