/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import content from '../../content/index'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


function CardAboutMe(props) {
    return (
        <>
            <div className="w-64 rounded-md overflow-hidden ">
                <div>
                    <Link className='w-64 rounded-md overflow-hidden' to={props.path}>
                        {content.portfolioYogo.tech.map(tech => (
                            <LazyLoadImage src={tech.img} alt={tech.alt} />
                        ))}</Link>
                    <div className="bg-indigo-50 text-gray-800 mb-6">
                        <p className="text-md text-center leading-5 font-bold text-yellow-500">
                            {content.portfolioYogo.name}
                        </p>
                        <h3 className="mt-2 text-sm leading-5 text-gray-500">
                            {content.portfolioYogo.desc}
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
                </div>

            </div >
            <div className="w-64 rounded-md overflow-hidden ">
                <div>
                    <Link className='w-64 rounded-md overflow-hidden' to={props.path}>
                        {content.portfolioDinner.tech.map(tech => (
                            <LazyLoadImage src={tech.img} alt={tech.alt} />
                        ))}</Link>
                    <div className="bg-indigo-50 text-gray-800 mb-6">
                        <p className="text-md text-center leading-5 font-bold text-yellow-500">
                            {content.portfolioDinner.name}
                        </p>
                        <h3 className="mt-2 text-sm leading-5 text-gray-500">
                            {content.portfolioDinner.desc}
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
                </div>

            </div >

            <div>
                <Link className='w-64 rounded-md overflow-hidden ' >
                    {content.portfolioMysql.tech.map(tech => (
                        <LazyLoadImage src={tech.img} alt={tech.alt} />
                    ))}</Link>
                <div className="bg-indigo-50 text-gray-800 mb-4 md:">
                    <p className="text-md text-center leading-5 font-bold text-yellow-500">
                        {content.portfolioMysql.name}
                    </p>
                    <h3 className="mt-2 text-sm leading-5 mb-9  text-gray-500">
                        {content.portfolioMysql.desc}
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
            </div>


        </>


    );
};
export default CardAboutMe;