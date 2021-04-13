/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import content from '../../content/index'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


function CardAboutMe(props) {
    return (
        <>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="flex-1 flex flex-col p-8">
                        {content.portfolioWC.tech.map(tech => (
                            <LazyLoadImage src={tech.img} alt={tech.alt} />
                        ))}
                        <h3 className="mt-6 text-gray-900 text-sm font-medium">{content.portfolioWC.name}</h3>
                        <dl className="mt-1 flex-grow flex flex-col justify-between">
                            <dt className="sr-only">Title</dt>
                            <dd className="text-gray-500 text-sm">{content.portfolioWC.desc}</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="mt-3">
                                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">#word connections</span>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="w-0 flex-1 flex">
                                <a href="https://github.com/adpir/Word-Connections" className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                                    {/* Heroicon name: solid/mail */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="mr-3 ml-2">Github</span>
                                </a>
                            </div>
                            <div className="-ml-px w-0 flex-1 flex">
                                <a href="https://phillipmerriman.github.io/Word-Connections/" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                                    {/* Heroicon name: solid/phone */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" /></svg>
                                    <span className="mr-3 ml-2">Live on GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="flex-1 flex flex-col p-8">
                        {content.portfolioDinner.tech.map(tech => (
                            <LazyLoadImage src={tech.img} alt={tech.alt} />
                        ))}
                        <h3 className="mt-6 text-gray-900 text-sm font-medium">{content.portfolioDinner.name}</h3>
                        <dl className="mt-1 flex-grow flex flex-col justify-between">
                            <dt className="sr-only">Title</dt>
                            <dd className="text-gray-500 text-sm">{content.portfolioDinner.desc}</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="mt-3">
                                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">#movieSearch</span>
                                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">#dinnerapp</span>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="w-0 flex-1 flex">
                                <a href="https://github.com/adpir/DinnerAndAMovie" className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                                    {/* Heroicon name: solid/mail */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="mr-3 ml-2">Github</span>
                                </a>
                            </div>
                            <div className="-ml-px w-0 flex-1 flex">
                                <a href="https://mysterious-retreat-01401.herokuapp.com" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                                    {/* Heroicon name: solid/phone */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="30" viewBox="0 0 72 100">
                                        <path fill="#430098" fill-rule="evenodd" d="M41.798,88 C44.421,88 47.148,89.666 47.148,93.66 C47.148,97.654 44.421,99.32 41.798,99.32 C39.159,99.319 36.433,97.654 36.433,93.66 C36.433,89.667 39.159,88 41.798,88 Z M65.796,88.207 L65.796,94.722 C65.796,96.225 66.282,96.903 67.462,96.903 C68.641,96.903 69.112,96.225 69.112,94.722 L69.112,88.207 L72,88.207 L72,94.736 C72,97.625 70.615,99.275 67.431,99.275 C64.247,99.275 62.848,97.625 62.848,94.736 L62.848,88.207 L65.796,88.207 Z M53.376,88.207 L53.376,92.157 L56.383,88.207 L59.802,88.207 L56.132,92.511 L60.126,99.114 L56.795,99.114 L54.216,94.751 L53.376,95.724 L53.376,99.114 L50.428,99.114 L50.428,88.207 L53.376,88.207 Z M21.1,88.207 L21.1,90.654 L16.266,90.654 L16.266,92.423 L19.715,92.423 L19.715,94.722 L16.266,94.722 L16.266,96.741 L21.351,96.741 L21.351,99.114 L13.319,99.114 L13.319,88.207 L21.1,88.207 Z M28.847,88.207 C31.647,88.207 33.357,89.136 33.357,91.759 C33.357,93.468 32.635,94.457 31.205,94.942 L33.519,99.113 L30.395,99.113 L28.287,95.326 L27.476,95.326 L27.476,99.113 L24.587,99.113 L24.587,88.207 L28.847,88.207 Z M2.948,88.207 L2.948,92.26 L6.574,92.26 L6.574,88.207 L9.522,88.207 L9.522,99.113 L6.574,99.113 L6.574,94.706 L2.948,94.706 L2.948,99.113 L0,99.113 L0,88.207 L2.948,88.207 Z M41.797,90.433 C40.249,90.433 39.38,91.656 39.38,93.66 C39.38,95.665 40.25,96.962 41.797,96.962 C43.33,96.961 44.199,95.665 44.199,93.66 C44.199,91.656 43.329,90.433 41.797,90.433 Z M28.744,90.594 L27.477,90.594 L27.477,93.085 L28.744,93.085 C29.953,93.085 30.483,92.746 30.483,91.832 C30.483,90.918 29.952,90.594 28.744,90.594 Z M64.8,0 C68.776,0 72,3.224 72,7.2 L72,7.2 L72,72.8 C72,76.776 68.776,80 64.8,80 L64.8,80 L7.2,80 C3.224,80 0,76.776 0,72.8 L0,72.8 L0,7.2 C0,3.224 3.224,0 7.2,0 L7.2,0 Z M64.8,4 L7.2,4 C5.436,4 4,5.435 4,7.2 L4,7.2 L4,72.8 C4,74.564 5.436,76 7.2,76 L7.2,76 L64.8,76 C66.565,76 68,74.564 68,72.8 L68,72.8 L68,7.2 C68,5.435 66.565,4 64.8,4 L64.8,4 Z M19,52 L28,60 L19,68 L19,52 Z M27,12 L27,34.711 C30.994,33.411 36.577,32 42,32 C46.945,32 49.905,33.944 51.517,35.575 C54.814625,38.91 54.995191,43.1202378 55.0003112,43.9159307 L55.0002258,68 L47,68 L47,44.11 C46.961,42.243 46.062,40 42,40 C33.866,40 24.742,44.091 24.651,44.132 L24.651,44.132 L19,46.692 L19,12 L27,12 Z M55,12 C54.46,16.544 52.618,20.9 49,25 L49,25 L41,25 C44.144,20.875 46.118,16.534 47,12 L47,12 Z" />
                                    </svg>
                                    <span className="mr-3">Deploy Heroku</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="flex-1 flex flex-col p-8">
                        {content.portfolioYogo.tech.map(tech => (
                            <LazyLoadImage src={tech.img} alt={tech.alt} />
                        ))}
                        <h3 className="mt-6 text-gray-900 text-sm font-medium">{content.portfolioYogo.name}</h3>
                        <dl className="mt-1 flex-grow flex flex-col justify-between">
                            <dt className="sr-only">Title</dt>
                            <dd className="text-gray-500 text-sm">{content.portfolioYogo.desc}</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="mt-3">
                                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">#Self Care App</span>
                                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">#Health</span>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="w-0 flex-1 flex">
                                <a href="https://github.com/adpir/YoGo" className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                                    {/* Heroicon name: solid/mail */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="mr-3 ml-2">Github</span>
                                </a>
                            </div>
                            <div className="-ml-px w-0 flex-1 flex">
                                <a href="https://yogood.herokuapp.com" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                                    {/* Heroicon name: solid/phone */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="30" viewBox="0 0 72 100">
                                        <path fill="#430098" fill-rule="evenodd" d="M41.798,88 C44.421,88 47.148,89.666 47.148,93.66 C47.148,97.654 44.421,99.32 41.798,99.32 C39.159,99.319 36.433,97.654 36.433,93.66 C36.433,89.667 39.159,88 41.798,88 Z M65.796,88.207 L65.796,94.722 C65.796,96.225 66.282,96.903 67.462,96.903 C68.641,96.903 69.112,96.225 69.112,94.722 L69.112,88.207 L72,88.207 L72,94.736 C72,97.625 70.615,99.275 67.431,99.275 C64.247,99.275 62.848,97.625 62.848,94.736 L62.848,88.207 L65.796,88.207 Z M53.376,88.207 L53.376,92.157 L56.383,88.207 L59.802,88.207 L56.132,92.511 L60.126,99.114 L56.795,99.114 L54.216,94.751 L53.376,95.724 L53.376,99.114 L50.428,99.114 L50.428,88.207 L53.376,88.207 Z M21.1,88.207 L21.1,90.654 L16.266,90.654 L16.266,92.423 L19.715,92.423 L19.715,94.722 L16.266,94.722 L16.266,96.741 L21.351,96.741 L21.351,99.114 L13.319,99.114 L13.319,88.207 L21.1,88.207 Z M28.847,88.207 C31.647,88.207 33.357,89.136 33.357,91.759 C33.357,93.468 32.635,94.457 31.205,94.942 L33.519,99.113 L30.395,99.113 L28.287,95.326 L27.476,95.326 L27.476,99.113 L24.587,99.113 L24.587,88.207 L28.847,88.207 Z M2.948,88.207 L2.948,92.26 L6.574,92.26 L6.574,88.207 L9.522,88.207 L9.522,99.113 L6.574,99.113 L6.574,94.706 L2.948,94.706 L2.948,99.113 L0,99.113 L0,88.207 L2.948,88.207 Z M41.797,90.433 C40.249,90.433 39.38,91.656 39.38,93.66 C39.38,95.665 40.25,96.962 41.797,96.962 C43.33,96.961 44.199,95.665 44.199,93.66 C44.199,91.656 43.329,90.433 41.797,90.433 Z M28.744,90.594 L27.477,90.594 L27.477,93.085 L28.744,93.085 C29.953,93.085 30.483,92.746 30.483,91.832 C30.483,90.918 29.952,90.594 28.744,90.594 Z M64.8,0 C68.776,0 72,3.224 72,7.2 L72,7.2 L72,72.8 C72,76.776 68.776,80 64.8,80 L64.8,80 L7.2,80 C3.224,80 0,76.776 0,72.8 L0,72.8 L0,7.2 C0,3.224 3.224,0 7.2,0 L7.2,0 Z M64.8,4 L7.2,4 C5.436,4 4,5.435 4,7.2 L4,7.2 L4,72.8 C4,74.564 5.436,76 7.2,76 L7.2,76 L64.8,76 C66.565,76 68,74.564 68,72.8 L68,72.8 L68,7.2 C68,5.435 66.565,4 64.8,4 L64.8,4 Z M19,52 L28,60 L19,68 L19,52 Z M27,12 L27,34.711 C30.994,33.411 36.577,32 42,32 C46.945,32 49.905,33.944 51.517,35.575 C54.814625,38.91 54.995191,43.1202378 55.0003112,43.9159307 L55.0002258,68 L47,68 L47,44.11 C46.961,42.243 46.062,40 42,40 C33.866,40 24.742,44.091 24.651,44.132 L24.651,44.132 L19,46.692 L19,12 L27,12 Z M55,12 C54.46,16.544 52.618,20.9 49,25 L49,25 L41,25 C44.144,20.875 46.118,16.534 47,12 L47,12 Z" />
                                    </svg>
                                    <span className="mr-3">Deploy Heroku</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="flex-1 flex flex-col p-8">
                        {content.portfolioBurger.tech.map(tech => (
                            <LazyLoadImage src={tech.img} alt={tech.alt} />
                        ))}
                        <h3 className="mt-6 text-gray-900 text-sm font-medium">{content.portfolioBurger.name}</h3>
                        <dl className="mt-1 flex-grow flex flex-col justify-between">
                            <dt className="sr-only">Title</dt>
                            <dd className="text-gray-500 text-sm">{content.portfolioBurger.desc}</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="mt-3">
                                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">#BurgerApp</span>
                                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">#devourAburger</span>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="w-0 flex-1 flex">
                                <a href="https://github.com/adpir/Burger" className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                                    {/* Heroicon name: solid/mail */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="mr-3 ml-2">Github</span>
                                </a>
                            </div>
                            <div className="-ml-px w-0 flex-1 flex">
                                <a href="https://intense-retreat-76456.herokuapp.com" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                                    {/* Heroicon name: solid/phone */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="30" viewBox="0 0 72 100">
                                        <path fill="#430098" fill-rule="evenodd" d="M41.798,88 C44.421,88 47.148,89.666 47.148,93.66 C47.148,97.654 44.421,99.32 41.798,99.32 C39.159,99.319 36.433,97.654 36.433,93.66 C36.433,89.667 39.159,88 41.798,88 Z M65.796,88.207 L65.796,94.722 C65.796,96.225 66.282,96.903 67.462,96.903 C68.641,96.903 69.112,96.225 69.112,94.722 L69.112,88.207 L72,88.207 L72,94.736 C72,97.625 70.615,99.275 67.431,99.275 C64.247,99.275 62.848,97.625 62.848,94.736 L62.848,88.207 L65.796,88.207 Z M53.376,88.207 L53.376,92.157 L56.383,88.207 L59.802,88.207 L56.132,92.511 L60.126,99.114 L56.795,99.114 L54.216,94.751 L53.376,95.724 L53.376,99.114 L50.428,99.114 L50.428,88.207 L53.376,88.207 Z M21.1,88.207 L21.1,90.654 L16.266,90.654 L16.266,92.423 L19.715,92.423 L19.715,94.722 L16.266,94.722 L16.266,96.741 L21.351,96.741 L21.351,99.114 L13.319,99.114 L13.319,88.207 L21.1,88.207 Z M28.847,88.207 C31.647,88.207 33.357,89.136 33.357,91.759 C33.357,93.468 32.635,94.457 31.205,94.942 L33.519,99.113 L30.395,99.113 L28.287,95.326 L27.476,95.326 L27.476,99.113 L24.587,99.113 L24.587,88.207 L28.847,88.207 Z M2.948,88.207 L2.948,92.26 L6.574,92.26 L6.574,88.207 L9.522,88.207 L9.522,99.113 L6.574,99.113 L6.574,94.706 L2.948,94.706 L2.948,99.113 L0,99.113 L0,88.207 L2.948,88.207 Z M41.797,90.433 C40.249,90.433 39.38,91.656 39.38,93.66 C39.38,95.665 40.25,96.962 41.797,96.962 C43.33,96.961 44.199,95.665 44.199,93.66 C44.199,91.656 43.329,90.433 41.797,90.433 Z M28.744,90.594 L27.477,90.594 L27.477,93.085 L28.744,93.085 C29.953,93.085 30.483,92.746 30.483,91.832 C30.483,90.918 29.952,90.594 28.744,90.594 Z M64.8,0 C68.776,0 72,3.224 72,7.2 L72,7.2 L72,72.8 C72,76.776 68.776,80 64.8,80 L64.8,80 L7.2,80 C3.224,80 0,76.776 0,72.8 L0,72.8 L0,7.2 C0,3.224 3.224,0 7.2,0 L7.2,0 Z M64.8,4 L7.2,4 C5.436,4 4,5.435 4,7.2 L4,7.2 L4,72.8 C4,74.564 5.436,76 7.2,76 L7.2,76 L64.8,76 C66.565,76 68,74.564 68,72.8 L68,72.8 L68,7.2 C68,5.435 66.565,4 64.8,4 L64.8,4 Z M19,52 L28,60 L19,68 L19,52 Z M27,12 L27,34.711 C30.994,33.411 36.577,32 42,32 C46.945,32 49.905,33.944 51.517,35.575 C54.814625,38.91 54.995191,43.1202378 55.0003112,43.9159307 L55.0002258,68 L47,68 L47,44.11 C46.961,42.243 46.062,40 42,40 C33.866,40 24.742,44.091 24.651,44.132 L24.651,44.132 L19,46.692 L19,12 L27,12 Z M55,12 C54.46,16.544 52.618,20.9 49,25 L49,25 L41,25 C44.144,20.875 46.118,16.534 47,12 L47,12 Z" />
                                    </svg>
                                    <span className="mr-3">Deploy Heroku</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="flex-1 flex flex-col p-8">
                        {content.portfolioBudget.tech.map(tech => (
                            <LazyLoadImage src={tech.img} alt={tech.alt} />
                        ))}
                        <h3 className="mt-6 text-gray-900 text-sm font-medium">{content.portfolioBudget.name}</h3>
                        <dl className="mt-1 flex-grow flex flex-col justify-between">
                            <dt className="sr-only">Title</dt>
                            <dd className="text-gray-500 text-sm">{content.portfolioBudget.desc}</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="mt-3">
                                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">#budget</span>
                                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">#trackingMoney</span>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="w-0 flex-1 flex">
                                <a href="https://github.com/adpir/Progressive-Budget" className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                                    {/* Heroicon name: solid/mail */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="mr-3 ml-2">Github</span>
                                </a>
                            </div>
                            <div className="-ml-px w-0 flex-1 flex">
                                <a href="https://stark-waters-65434.herokuapp.com" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                                    {/* Heroicon name: solid/phone */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="30" viewBox="0 0 72 100">
                                        <path fill="#430098" fill-rule="evenodd" d="M41.798,88 C44.421,88 47.148,89.666 47.148,93.66 C47.148,97.654 44.421,99.32 41.798,99.32 C39.159,99.319 36.433,97.654 36.433,93.66 C36.433,89.667 39.159,88 41.798,88 Z M65.796,88.207 L65.796,94.722 C65.796,96.225 66.282,96.903 67.462,96.903 C68.641,96.903 69.112,96.225 69.112,94.722 L69.112,88.207 L72,88.207 L72,94.736 C72,97.625 70.615,99.275 67.431,99.275 C64.247,99.275 62.848,97.625 62.848,94.736 L62.848,88.207 L65.796,88.207 Z M53.376,88.207 L53.376,92.157 L56.383,88.207 L59.802,88.207 L56.132,92.511 L60.126,99.114 L56.795,99.114 L54.216,94.751 L53.376,95.724 L53.376,99.114 L50.428,99.114 L50.428,88.207 L53.376,88.207 Z M21.1,88.207 L21.1,90.654 L16.266,90.654 L16.266,92.423 L19.715,92.423 L19.715,94.722 L16.266,94.722 L16.266,96.741 L21.351,96.741 L21.351,99.114 L13.319,99.114 L13.319,88.207 L21.1,88.207 Z M28.847,88.207 C31.647,88.207 33.357,89.136 33.357,91.759 C33.357,93.468 32.635,94.457 31.205,94.942 L33.519,99.113 L30.395,99.113 L28.287,95.326 L27.476,95.326 L27.476,99.113 L24.587,99.113 L24.587,88.207 L28.847,88.207 Z M2.948,88.207 L2.948,92.26 L6.574,92.26 L6.574,88.207 L9.522,88.207 L9.522,99.113 L6.574,99.113 L6.574,94.706 L2.948,94.706 L2.948,99.113 L0,99.113 L0,88.207 L2.948,88.207 Z M41.797,90.433 C40.249,90.433 39.38,91.656 39.38,93.66 C39.38,95.665 40.25,96.962 41.797,96.962 C43.33,96.961 44.199,95.665 44.199,93.66 C44.199,91.656 43.329,90.433 41.797,90.433 Z M28.744,90.594 L27.477,90.594 L27.477,93.085 L28.744,93.085 C29.953,93.085 30.483,92.746 30.483,91.832 C30.483,90.918 29.952,90.594 28.744,90.594 Z M64.8,0 C68.776,0 72,3.224 72,7.2 L72,7.2 L72,72.8 C72,76.776 68.776,80 64.8,80 L64.8,80 L7.2,80 C3.224,80 0,76.776 0,72.8 L0,72.8 L0,7.2 C0,3.224 3.224,0 7.2,0 L7.2,0 Z M64.8,4 L7.2,4 C5.436,4 4,5.435 4,7.2 L4,7.2 L4,72.8 C4,74.564 5.436,76 7.2,76 L7.2,76 L64.8,76 C66.565,76 68,74.564 68,72.8 L68,72.8 L68,7.2 C68,5.435 66.565,4 64.8,4 L64.8,4 Z M19,52 L28,60 L19,68 L19,52 Z M27,12 L27,34.711 C30.994,33.411 36.577,32 42,32 C46.945,32 49.905,33.944 51.517,35.575 C54.814625,38.91 54.995191,43.1202378 55.0003112,43.9159307 L55.0002258,68 L47,68 L47,44.11 C46.961,42.243 46.062,40 42,40 C33.866,40 24.742,44.091 24.651,44.132 L24.651,44.132 L19,46.692 L19,12 L27,12 Z M55,12 C54.46,16.544 52.618,20.9 49,25 L49,25 L41,25 C44.144,20.875 46.118,16.534 47,12 L47,12 Z" />
                                    </svg>
                                    <span className="mr-3">Deploy Heroku</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="flex-1 flex flex-col p-8">
                        {content.portfolioFitness.tech.map(tech => (
                            <LazyLoadImage src={tech.img} alt={tech.alt} />
                        ))}
                        <h3 className="mt-6 text-gray-900 text-sm font-medium">{content.portfolioFitness.name}</h3>
                        <dl className="mt-1 flex-grow flex flex-col justify-between">
                            <dt className="sr-only">Title</dt>
                            <dd className="text-gray-500 text-sm">{content.portfolioFitness.desc}</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="mt-3">
                                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">#trackingExercises</span>
                                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">#dailyworkouts</span>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="w-0 flex-1 flex">
                                <a href="https://github.com/adpir/Workout_Tracker" className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                                    {/* Heroicon name: solid/mail */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="mr-3 ml-2">Github</span>
                                </a>
                            </div>
                            <div className="-ml-px w-0 flex-1 flex">
                                <a href="https://nameless-badlands-86963.herokuapp.com/" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                                    {/* Heroicon name: solid/phone */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="30" viewBox="0 0 72 100">
                                        <path fill="#430098" fill-rule="evenodd" d="M41.798,88 C44.421,88 47.148,89.666 47.148,93.66 C47.148,97.654 44.421,99.32 41.798,99.32 C39.159,99.319 36.433,97.654 36.433,93.66 C36.433,89.667 39.159,88 41.798,88 Z M65.796,88.207 L65.796,94.722 C65.796,96.225 66.282,96.903 67.462,96.903 C68.641,96.903 69.112,96.225 69.112,94.722 L69.112,88.207 L72,88.207 L72,94.736 C72,97.625 70.615,99.275 67.431,99.275 C64.247,99.275 62.848,97.625 62.848,94.736 L62.848,88.207 L65.796,88.207 Z M53.376,88.207 L53.376,92.157 L56.383,88.207 L59.802,88.207 L56.132,92.511 L60.126,99.114 L56.795,99.114 L54.216,94.751 L53.376,95.724 L53.376,99.114 L50.428,99.114 L50.428,88.207 L53.376,88.207 Z M21.1,88.207 L21.1,90.654 L16.266,90.654 L16.266,92.423 L19.715,92.423 L19.715,94.722 L16.266,94.722 L16.266,96.741 L21.351,96.741 L21.351,99.114 L13.319,99.114 L13.319,88.207 L21.1,88.207 Z M28.847,88.207 C31.647,88.207 33.357,89.136 33.357,91.759 C33.357,93.468 32.635,94.457 31.205,94.942 L33.519,99.113 L30.395,99.113 L28.287,95.326 L27.476,95.326 L27.476,99.113 L24.587,99.113 L24.587,88.207 L28.847,88.207 Z M2.948,88.207 L2.948,92.26 L6.574,92.26 L6.574,88.207 L9.522,88.207 L9.522,99.113 L6.574,99.113 L6.574,94.706 L2.948,94.706 L2.948,99.113 L0,99.113 L0,88.207 L2.948,88.207 Z M41.797,90.433 C40.249,90.433 39.38,91.656 39.38,93.66 C39.38,95.665 40.25,96.962 41.797,96.962 C43.33,96.961 44.199,95.665 44.199,93.66 C44.199,91.656 43.329,90.433 41.797,90.433 Z M28.744,90.594 L27.477,90.594 L27.477,93.085 L28.744,93.085 C29.953,93.085 30.483,92.746 30.483,91.832 C30.483,90.918 29.952,90.594 28.744,90.594 Z M64.8,0 C68.776,0 72,3.224 72,7.2 L72,7.2 L72,72.8 C72,76.776 68.776,80 64.8,80 L64.8,80 L7.2,80 C3.224,80 0,76.776 0,72.8 L0,72.8 L0,7.2 C0,3.224 3.224,0 7.2,0 L7.2,0 Z M64.8,4 L7.2,4 C5.436,4 4,5.435 4,7.2 L4,7.2 L4,72.8 C4,74.564 5.436,76 7.2,76 L7.2,76 L64.8,76 C66.565,76 68,74.564 68,72.8 L68,72.8 L68,7.2 C68,5.435 66.565,4 64.8,4 L64.8,4 Z M19,52 L28,60 L19,68 L19,52 Z M27,12 L27,34.711 C30.994,33.411 36.577,32 42,32 C46.945,32 49.905,33.944 51.517,35.575 C54.814625,38.91 54.995191,43.1202378 55.0003112,43.9159307 L55.0002258,68 L47,68 L47,44.11 C46.961,42.243 46.062,40 42,40 C33.866,40 24.742,44.091 24.651,44.132 L24.651,44.132 L19,46.692 L19,12 L27,12 Z M55,12 C54.46,16.544 52.618,20.9 49,25 L49,25 L41,25 C44.144,20.875 46.118,16.534 47,12 L47,12 Z" />
                                    </svg>
                                    <span className="mr-3">Deploy Heroku</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};
export default CardAboutMe;