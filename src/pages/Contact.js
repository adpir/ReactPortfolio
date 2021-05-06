/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import emailjs from 'emailjs-com';

import { GoFilePdf } from "react-icons/go";
import { MailIcon } from '@heroicons/react/outline'

export default function Contact() {
    const Resume = process.env.PUBLIC_URL + '/images/Alice-Piar-Resume.pdf'
    const Linkedin = "https://www.linkedin.com/in/alicepiar/"
    const Github = "https://github.com/adpir"

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_a99ougf', 'contact_form', e.target, 'user_kkcz0wj88SrTzyitZBYLQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className="relative bg-gradient-to-b from-pink-800 via-yellow-300 to-cyan-500" id="contact">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>
            <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="max-w-lg mx-auto">
                        <h1 className="text-3xl tracking-tight font-extrabold text-yellow-400 sm:text-5xl">Get in touch</h1>

                        <p className="mt-3 text-lg leading-6 text-gray-900">
                            Contact me if you would like to work or collaborate with me!
            </p>

                        <dl className="mt-8 text-base text-gray-900 hover:text-white hover:bg-lightblue-500 p-2">
                            <div className="mt-3">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex ml-2">
                                    <MailIcon className="flex-shrink-0 h-6 w-6  text-blue-400 hover:text-white hover:bg-pink-400" aria-hidden="true" />
                                    <span className="ml-3">adpir30@gmail.com</span>
                                </dd>
                            </div>
                        </dl>
                        <a
                            href={Github}
                            className="flex mt-3 items-center hover:text-white hover:bg-pink-400 p-2"
                        >
                            <svg
                                fill="currentColor"
                                className="w-7 h-7 m-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                   Follow me in Github
                </a>

                        <a
                            href={Linkedin}
                            className="flex items-center hover:text-white hover:bg-blue-500 p-2"
                        >
                            <svg
                                fill="currentColor"
                                className="w-7 h-7 m-2 bg-blue-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z" />
                            </svg>
                   Follow me on Linkedin
                </a>
                        <a
                            href={Resume}
                            className="flex items-center hover:text-white hover:bg-yellow-500 p-2"
                        >
                            <GoFilePdf className="w-7 h-7 m-2"></GoFilePdf>
                  Resume
                </a>
                    </div>
                </div>
                <div className="bg-gray-300 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <div className="max-w-lg mx-auto lg:max-w-none">
                        <form className="contact-form grid grid-cols-1 gap-y-6" onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="full_name" className="sr-only">
                                    Full name
                </label>
                                <input
                                    type="text"
                                    name="full_name"
                                    id="full_name"
                                    autoComplete="name"
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-cyan-400 border-gray-300 rounded-md"
                                    placeholder="Full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-cyan-400 border-gray-300 rounded-md"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-cyan-400 border-gray-300 rounded-md"
                                    placeholder="Message"
                                    defaultValue={''}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    value="Send"
                                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gradient-to-r from-gray-800 via-blue-600 to-cyan-400 hover:text-yellow-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                                >
                                    Submit
                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


