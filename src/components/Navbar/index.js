/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Navbar() {
    return (
        <section>
            <section>
                <section>
                    <nav className="bg-gradient-to-bl from-blue-700 via-blue-800 to-green-400">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">

                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {/* // Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"  */}
                                            <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">About</a>

                                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>

                                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Skills</a>

                                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            {/* <button >
                                                <span> </span> */}
                                            {/* <!-- Heroicon name: outline/bell --> */}
                                            {/* <svg >
                                                    <path />
                                                </svg>
                                            </button> */}
                                            {/* <!-- Mobile menu button --> */}

                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                                <div className="md:hidden" id="mobile-menu">
                                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                                    </div>
                                    <div className="pt-4 pb-3 border-t border-gray-700">
                                        <div className="flex items-center px-5">
                                            <div className="flex-shrink-0">
                                            </div>

                                            {/* <!-- Heroicon name: outline/bell --> */}

                                        </div>
                                        <div className="mt-3 px-2 space-y-1">
                                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Portfolio</a>

                                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Skills</a>

                                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Contact</a>
                                        </div>
                                    </div>
                                </div>
                                <main>
                                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                                        {/* <!-- Replace with your content --> */}
                                        <div className="px-4 py-6 sm:px-0">
                                        </div>
                                        {/* <!-- /End replace --> */}
                                    </div>
                                </main>
                            </div>

                        </div >
                    </nav>
                </section>
            </section>
        </section >

    )
}


export default Navbar;