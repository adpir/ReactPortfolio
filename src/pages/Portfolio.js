/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import content from '../content/index'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Portfolio() {
    return (
        <>
            <h1 className="text-5xl font-dosis text-center font-bold mb-10 ">{content.portfolio.title}</h1>
            {/* <div className="text-gray-200 bg-gray-700 "> */}
            <div className=" relative mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 ">
                    <div className="flex-shrink-0">
                        {content.portfolio.tech.map((tech, index) => {
                            return (
                                <span className={`${
                                    index % 2 === 0 ? 'animate-refloat' : 'animate-refloat'
                                    } h-48 w-full object-cover`}>
                                    <LazyLoadImage src={tech.img} alt={tech.alt} />
                                </span>
                            );
                        })}
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div className="flex-1 ">
                            <p className="text-md text-center leading-5 font-bold text-yellow-500">
                                {content.portfolio.name}
                            </p>
                            <h3 className="mt-2 text-xl leading-7 text-gray-500">
                                {content.portfolio.desc}
                            </h3>
                            <div className="-mt-px flex divide-x divide-gray-200 text-yellow-500">
                                <div className="w-0 flex-1 flex ml-3">
                                    <p><a href="https://github.com/adpir/Word-Connections"
                                        target="_blank">Github</a></p>
                                </div>
                                <div className="w-0 flex-1 flex">
                                    <p><a href="https://adpir.github.io/Word-Connections/" target="_blank">Heroku</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >


                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                    <div className="flex-shrink-0">
                        {content.portfolio2.tech.map((tech, index) => {
                            return (
                                <span className={`${
                                    index % 2 === 0 ? 'animate-float' : 'animate-refloat'
                                    }h-48 w-full object-cover`}>
                                    <LazyLoadImage src={tech.img} alt={tech.alt} />
                                </span>
                            );
                        })}
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div className="flex-1 ">
                            <p className="text-md text-center leading-5 font-bold text-yellow-500">
                                {content.portfolio2.name}
                            </p>
                            <h3 className="mt-2 text-xl leading-7 text-gray-500">
                                {content.portfolio2.desc}
                            </h3>
                            <div className="-mt-px flex divide-x divide-gray-200 text-yellow-500">
                                <div className="w-0 flex-1 flex ml-3">
                                    <p><a href="https://github.com/adpir/DinnerAndAMovie"
                                        target="_blank">Github</a></p>
                                </div>
                                <div className="w-0 flex-1 flex">
                                    <p><a href="https://mysterious-retreat-01401.herokuapp.com" target="_blank">Heroku</a></p>

                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                    <div className="flex-shrink-0">
                        {content.portfolio3.tech.map((tech, index) => {
                            return (
                                <span className={`${
                                    index % 2 === 0 ? 'animate-float' : 'animate-refloat'
                                    }h-48 w-full object-cover`}>
                                    <LazyLoadImage src={tech.img} alt={tech.alt} />
                                </span>
                            );
                        })}
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div className="flex-1 ">
                            <p className="text-md text-center leading-5 font-bold text-yellow-500">
                                {content.portfolio3.name}
                            </p>
                            <h3 className="mt-2 text-xl leading-7 text-gray-500">
                                {content.portfolio3.desc}
                            </h3>
                            <div className="-mt-px flex divide-x divide-gray-200 text-yellow-500">
                                <div className="w-0 flex-1 flex ml-3">
                                    <p><a href="https://github.com/tforde4623/YoGo"
                                        target="_blank">Github</a></p>
                                </div>
                                <div className="w-0 flex-1 flex">
                                    <p><a href="https://yogood.herokuapp.com" target="_blank">Heroku</a></p>

                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                    <div className="flex-shrink-0">
                        {content.portfolio4.tech.map((tech, index) => {
                            return (
                                <span className={`${
                                    index % 2 === 0 ? 'animate-float' : 'animate-refloat'
                                    }h-48 w-full object-cover`}>
                                    <LazyLoadImage src={tech.img} alt={tech.alt} />
                                </span>
                            );
                        })}
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div className="flex-1 ">
                            <p className="text-md text-center leading-5 font-bold text-yellow-500">
                                {content.portfolio4.name}
                            </p>
                            <h3 className="mt-2 text-xl leading-7 text-gray-500">
                                {content.portfolio4.desc}
                            </h3>
                            <div className="-mt-px flex divide-x divide-gray-200 text-yellow-500">
                                <div className="w-0 flex-1 flex ml-3">
                                    <p><a href="https://github.com/adpir/Burger"
                                        target="_blank">Github</a></p>
                                </div>
                                <div className="w-0 flex-1 flex">
                                    <p><a href="https://intense-retreat-76456.herokuapp.com" target="_blank">Heroku</a></p>

                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                    <div className="flex-shrink-0">
                        {content.portfolio5.tech.map((tech, index) => {
                            return (
                                <span className={`${
                                    index % 2 === 0 ? 'animate-float' : 'animate-refloat'
                                    }h-48 w-full object-cover`}>
                                    <LazyLoadImage src={tech.img} alt={tech.alt} />
                                </span>
                            );
                        })}
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div className="flex-1 ">
                            <p className="text-md text-center leading-5 font-bold text-yellow-500">
                                {content.portfolio5.name}
                            </p>
                            <h3 className="mt-2 text-xl leading-7 text-gray-500">
                                {content.portfolio5.desc}
                            </h3>
                            <div className="-mt-px flex divide-x divide-gray-200 text-yellow-500">
                                <div className="w-0 flex-1 flex ml-3">
                                    <p><a href="https://github.com/adpir/Burger"
                                        target="_blank">Github</a></p>
                                </div>
                                <div className="w-0 flex-1 flex">
                                    <p><a href="https://intense-retreat-76456.herokuapp.com" target="_blank">Heroku</a></p>

                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                    <div className="flex-shrink-0">
                        {content.portfolio6.tech.map((tech, index) => {
                            return (
                                <span className={`${
                                    index % 2 === 0 ? 'animate-float' : 'animate-refloat'
                                    }h-48 w-full object-cover`}>
                                    <LazyLoadImage src={tech.img} alt={tech.alt} />
                                </span>
                            );
                        })}
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div className="flex-1 ">
                            <p className="text-md text-center leading-5 font-bold text-yellow-500">
                                {content.portfolio6.name}
                            </p>
                            <h3 className="mt-2 text-xl leading-7 text-gray-500">
                                {content.portfolio6.desc}
                            </h3>
                            <div className="-mt-px flex divide-x divide-gray-200 text-yellow-500">
                                <div className="w-0 flex-1 flex ml-3">
                                    <p><a href="https://github.com/adpir/Workout_Tracker"
                                        target="_blank">Github</a></p>
                                </div>
                                <div className="w-0 flex-1 flex">
                                    <p><a href="https://nameless-badlands-86963.herokuapp.com/?id=6042e9915d8f77001528bb92" target="_blank">Heroku</a></p>

                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                    <div className="flex-shrink-0">
                        {content.portfolio7.tech.map((tech, index) => {
                            return (
                                <span className={`${
                                    index % 2 === 0 ? 'animate-float' : 'animate-refloat'
                                    }h-48 w-full object-cover`}>
                                    <LazyLoadImage src={tech.img} alt={tech.alt} />
                                </span>
                            );
                        })}
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div className="flex-1 ">
                            <p className="text-md text-center leading-5 font-bold text-yellow-500">
                                {content.portfolio7.name}
                            </p>
                            <h3 className="mt-2 text-xl leading-7 text-gray-500">
                                {content.portfolio7.desc}
                            </h3>
                            <div className="-mt-px flex divide-x divide-gray-200 text-yellow-500">
                                <div className="w-0 flex-1 flex ml-3">
                                    <p><a href="https://github.com/adpir/Progressive-Budget"
                                        target="_blank">Github</a></p>
                                </div>
                                <div className="w-0 flex-1 flex">
                                    <p><a href="https://stark-waters-65434.herokuapp.com" target="_blank">Heroku</a></p>

                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                    <div className="flex-shrink-0">
                        {content.portfolio8.tech.map((tech, index) => {
                            return (
                                <span className={`${
                                    index % 2 === 0 ? 'animate-float' : 'animate-refloat'
                                    }h-48 w-full object-cover`}>
                                    <LazyLoadImage src={tech.img} alt={tech.alt} />
                                </span>
                            );
                        })}
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div className="flex-1 ">
                            <p className="text-md text-center leading-5 font-bold text-yellow-500">
                                {content.portfolio8.name}
                            </p>
                            <h3 className="mt-2 text-xl leading-7 text-gray-500">
                                {content.portfolio8.desc}
                            </h3>
                            <div className="-mt-px flex divide-x divide-gray-200 text-yellow-500">
                                <div className="w-0 flex-1 flex ml-3">
                                    <p><a href="https://github.com/adpir/Note_Taker"
                                        target="_blank">Github</a></p>
                                </div>
                                <div className="w-0 flex-1 flex">
                                    <p><a href="https://salty-headland-53673.herokuapp.com" target="_blank">Heroku</a></p>

                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                    <div className="flex-shrink-0">
                        {content.portfolio9.tech.map((tech, index) => {
                            return (
                                <span className={`${
                                    index % 2 === 0 ? 'animate-float' : 'animate-refloat'
                                    }h-48 w-full object-cover`}>
                                    <LazyLoadImage src={tech.img} alt={tech.alt} />
                                </span>
                            );
                        })}
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div className="flex-1 ">
                            <p className="text-md text-center leading-5 font-bold text-yellow-500">
                                {content.portfolio9.name}
                            </p>
                            <h3 className="mt-2 text-xl leading-7 text-gray-500">
                                {content.portfolio9.desc}
                            </h3>
                            <div className="-mt-px flex divide-x divide-gray-200 text-yellow-500">
                                <div className="w-0 flex-1 flex ml-3">
                                    <p><a href="https://github.com/adpir/React_Employee_Directory"
                                        target="_blank">Github</a></p>
                                </div>
                                <div className="w-0 flex-1 flex">
                                    <p><a href="https://adpir.github.io/React_Employee_Directory/" target="_blank">Live Pages</a></p>

                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>



    )
}


export default Portfolio;
// {/* <div className="max-w-xs rounded overflow-hidden shadow-lg my-2"> */ }
// <div class="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">

{/* <div className="h-48 w-full inline-flex items-center justify-center squared-full bg-yellow-500 mb-5 flex-shrink-0"> */ }
