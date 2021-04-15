/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// import content from '../../content/index'
// // import { LazyLoadImage } from 'react-lazy-load-image-component'
import { GoMarkGithub } from "react-icons/go";
import { GoBrowser } from "react-icons/go";

const portfolio = [
    {
        name: 'Word Connections',
        description: `Word Connections is an app where the user can
              search for a word and get the word's definitions. A giphy will illustrate
             the meaning of the word, and using local Storage; the user will be able to
              see the history of the words`,
        Github: 'https://github.com/adpir/Word-Connections',
        Live: 'https://phillipmerriman.github.io/Word-Connections/',
        imageUrl: process.env.PUBLIC_URL + '/images/WC1.png',

    },
    {
        name: 'Dinner & A Movie',
        description: ` Create an application app were you are able to search a movie 
    and it will automatically pick a meal to match, including the recipe to that meal!.`,
        Github: 'https://github.com/adpir/DinnerAndAMovie',
        Live: 'https://mysterious-retreat-01401.herokuapp.com',
        imageUrl: process.env.PUBLIC_URL + '/images/dinner.png',

    },

    {
        name: 'Yogo',
        description: ` YoGo is an app to help user prioritize self-care. Self-care is essential for our health and well-being, especially with increased stressors introduced within the last year.
As a user, I want an app that will help me prioritize and manage my self-care practices and routines.`,
        Github: 'https://github.com/adpir/YoGo',
        Live: 'https://yogood.herokuapp.com',
        imageUrl: process.env.PUBLIC_URL + '/images/YOGO.jpg',

    },
    {
        name: `Get In My Be-LLY`,
        description: ` This burger app uses this programming tools like MySQL, Node, Express, Handlebars, and a homemade ORM (yum!). 
   Remember to follow the MVC design pattern; use MySQL to query and route data in your app, and Handlebars to generate your HTML`,
        Github: 'https://github.com/adpir/Burger',
        Live: 'https://intense-retreat-76456.herokuapp.com',
        imageUrl: process.env.PUBLIC_URL + '/images/burger.png',

    },
    {
        name: `Progressive Budget`,
        description: ` Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.`,
        Github: 'https://github.com/adpir/Progressive-Budget',
        Live: 'https://stark-waters-65434.herokuapp.com',
        imageUrl: process.env.PUBLIC_URL + '/images/Progressive.png',

    },
    {
        name: `Fitness Tracker`,
        description: `As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.`,
        Github: 'https://github.com/adpir/Workout_Tracker',
        Live: 'https://nameless-badlands-86963.herokuapp.com/',
        imageUrl: process.env.PUBLIC_URL + '/images/workout.png',

    },

]
function CardAboutMe() {
    return (
        <>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {portfolio.map((tech) => (
                    <li
                        className="col-span-1 flex flex-col text-center bg-white bg-opacity-25 rounded-lg shadow divide-y divide-gray-200"
                    >
                        <div className="flex-1 flex flex-col p-8">
                            <img className=" w-80 h-50 flex-shrink-0 mx-auto squared-full" src={tech.imageUrl} alt="" />
                            <h3 className="mt-3 text-gray-900 text-2xl font-medium">{tech.name}</h3>
                            <dl className="mt-1 flex-grow flex flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <dd className="text-gray-500 text-sm">{tech.title}</dd>
                                <dd className="mt-5">
                                    <span className="px-2 py-1 text-yellow-800 text-md rounded-full">
                                        {tech.description}
                                    </span>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <div className="-mt-px flex divide-x divide-gray-200">
                                <div className="w-0 flex-1 flex">
                                    <a
                                        href={`${tech.Github}`}
                                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                    >
                                        <GoMarkGithub className="w-5 h-5 text-black-500" aria-hidden="true" />
                                        <span className="ml-3">Github</span>
                                    </a>
                                </div>
                                <div className="-ml-px w-0 flex-1 flex">
                                    <a
                                        href={`${tech.Live}`}
                                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                                    >
                                        <GoBrowser className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">Live Page</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )

}
export default CardAboutMe;
