/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import node from '../Images/node.png';
import logo from '../Images/logo192.png';
import express from '../Images/express.png'
import MongoDB from '../Images/mongo.png'
import tailwinds from '../Images/tailwinds.png'

// import content from '../content';

export default function Skills() {
    return (
        <div className="skills-section" id="skills">
            <h1 className="text-5xl font-dosis text-center font-bold  text-gray-600 ">Skills</h1>
            <div className=" min-h-screen rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                <div className="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <div>
                        <span className="rounded-lg inline-flex p-3 bg-teal-50 text-teal-700 ring-4 ring-white">
                            {/* Heroicon name: outline/clock */}
                            <img className="h-10 w-15" src={node} alt="node">
                            </img>
                        </span>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-medium">
                            {/* Extend touch target to entire panel */}
                            <span className="absolute inset-0" aria-hidden="true"></span>
             Node.js
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
          </p>
                    </div>
                    <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                    </span>
                </div>

                <div className="sm:rounded-tr-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <div>
                        <span className="rounded-lg inline-flex p-3 bg-black ring-4 ring-white">
                            {/* Heroicon name: outline/badge-check */}
                            <img className="h-10 w-10" src={logo} alt="logo">
                            </img>
                        </span>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-medium">
                            {/* Extend touch target to entire panel */}
                            <span className="absolute inset-0" aria-hidden="true"></span>
              React
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
          </p>
                    </div>
                    <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                    </span>
                </div>

                <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <div>
                        <span className="rounded-lg inline-flex p-3 bg-light-blue-50 text-light-blue-700 ring-4 ring-white">
                            {/* Heroicon name: outline/users */}
                            <img className="h-10 w-15" src={express} alt="express">
                            </img>
                        </span>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-medium">
                            {/* Extend touch target to entire panel */}
                            <span className="absolute inset-0" aria-hidden="true"></span>
Express                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
          </p>
                    </div>
                    <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                    </span>
                </div>

                <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <div>
                        <span className="rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-700 ring-4 ring-white">
                            {/* Heroicon name: outline/cash */}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </span>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-medium">
                            {/* Extend touch target to entire panel */}
                            <span className="absolute inset-0" aria-hidden="true"></span>
              HTML
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
          </p>
                    </div>
                    <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                    </span>
                </div>

                <div className="sm:rounded-bl-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <div>
                        <span className="rounded-lg inline-flex p-3 bg-rose-50 text-rose-700 ring-4 ring-white">
                            {/* Heroicon name: outline/receipt-refund */}
                            <img className="h-10 w-15" src={MongoDB} alt="MongoDB">
                            </img>
                        </span>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-blue-800">
                            {/* Extend touch target to entire panel */}
                            <span className="absolute inset-0 " aria-hidden="true"></span>
              MongoDB

                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
          </p>
                    </div>
                    <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                    </span>
                </div>

                <div className="rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <div>
                        <span className="rounded-lg inline-flex p-3  text-indigo-700 ring-4 ring-white">
                            {/* Heroicon name: outline/academic-cap */}
                            <img className="h-10 w-18 inline-block pr-3 pb-3 pl-1 mb-2" src={tailwinds} alt="tailwinds">
                            </img>
                            <svg className="h-9 w-11 mb-2" xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bootstrap" viewBox="0 0 16 16">
                                    <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z" />
                                    <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z" />

                                </svg>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-medium">
                            {/* Extend touch target to entire panel */}
                            <span className="absolute inset-0" aria-hidden="true"></span>
              CSS, Bootstrap & Tailwinds CSS
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
          </p>
                    </div>
                    <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                    </span>
                </div>
            </div>
        </div >

    );


}
