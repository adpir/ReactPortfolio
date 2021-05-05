import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { GoBrowser } from "react-icons/go";
import { Link as ScrollLink } from 'react-scroll';



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
        tools: `HTML, CSS, JS`

    },


    {
        name: 'Dinner & A Movie',
        description: ` Create an application app were you are able to search a movie 
    and it will automatically pick a meal to match, including the recipe to that meal!.`,
        Github: 'https://github.com/adpir/DinnerAndAMovie',
        Live: 'https://mysterious-retreat-01401.herokuapp.com',
        imageUrl: process.env.PUBLIC_URL + '/images/dinner.png',
        tools: 'AXIOS,Dotenv,Express,Handlebars,MySQL,Sequelize,HTML,CSS,JS,node'

    },

    {
        name: 'Yogo',
        description: ` YoGo is an app to help user prioritize self-care. Self-care is essential for our health and well-being, especially with increased stressors introduced within the last year.
As a user, I want an app that will help me prioritize and manage my self-care practices and routines.`,
        Github: 'https://github.com/adpir/YoGo',
        Live: 'https://yogood.herokuapp.com',
        imageUrl: process.env.PUBLIC_URL + '/images/YOGO.jpg',
        tools: 'HTML,Tailwinds,JS,REACT,Express,Mongo,Travis,Cypress,Node'


    },
    {
        name: `Get In My Be-LLY`,
        description: ` This burger app uses this programming tools like MySQL, Node, Express, Handlebars, and a homemade ORM (yum!). 
   Remember to follow the MVC design pattern; use MySQL to query and route data in your app, and Handlebars to generate your HTML`,
        Github: 'https://github.com/adpir/Burger',
        Live: 'https://intense-retreat-76456.herokuapp.com',
        imageUrl: process.env.PUBLIC_URL + '/images/burger.png',
        tools: 'HTML,CSS,JS,SQL,Express,NPM,MySQL,Node'


    },
    {
        name: `Progressive Budget`,
        description: ` Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.`,
        Github: 'https://github.com/adpir/Progressive-Budget',
        Live: 'https://stark-waters-65434.herokuapp.com',
        imageUrl: process.env.PUBLIC_URL + '/images/Progressive.png',
        tools: 'HTML,CSS,JS,Express,MongoDB,NPM,Node'


    },
    {
        name: `Fitness Tracker`,
        description: `As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.`,
        Github: 'https://github.com/adpir/Workout_Tracker',
        Live: 'https://nameless-badlands-86963.herokuapp.com/',
        imageUrl: process.env.PUBLIC_URL + '/images/workout.png',
        tools: 'HTML,JQuery,Express,Mongo,NPM,Node'


    },


]
export default function CardAboutMe() {
    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl tracking-tight font-extrabold text-yellow-400 sm:text-5xl">Projects</h1>
                    {/* <p className="mt-3 max-w-2xl mx-auto text-xl text-yellow-300 sm:mt-4">
                    </p> */}
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5  lg:grid-cols-3 lg:max-w-none ">
                    {portfolio.map((tech) => (
                        <div key={tech.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={tech.imageUrl} alt="" />
                            </div>
                            <div className="flex-1  bg-blue-600 p-6 bg-opacity-25 rounded-lg shadow divide-y divide-yellow-500  flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium font-mono text-yellow-500">{tech.tools}</p>
                                    <div className="block mt-6">
                                        <p className="text-3xl tracking-tight font-extrabold text-center mb-10 text-yellow-400">{tech.name}</p>
                                        <p className="font-medium text-yellow-200 mb-10">{tech.description}</p>
                                        <div className="flex mt-10 mb-10 divide-x divide-yellow-200">
                                            <div className="w-0 flex-1 flex ">
                                                <a
                                                    href={`${tech.Github}`}
                                                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4  font-mono text-yellow-500 font-medium border border-transparent rounded-br-lg hover:text-cyan-500"
                                                >
                                                    <GoMarkGithub className="w-5 h-5 text-black-500" aria-hidden="true" />
                                                    <span className="ml-3">Github</span>
                                                </a>
                                            </div>
                                            <div className="-ml-px w-0 flex-1 flex">
                                                <a
                                                    href={`${tech.Live}`}
                                                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 font-mono text-yellow-500 font-medium border border-transparent rounded-br-lg hover:text-cyan-500"
                                                >
                                                    <GoBrowser className="w-5 h-5 text-sm font-medium font-mono text-yellow-500" aria-hidden="true" />
                                                    <span className="ml-3">Live Page</span>

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <ScrollLink to="/skills" smooth={true}  >
                    <svg xmlns="http://www.w3.org/2000/svg" className=" text-cyan-400  h-10 cursor-pointer mx-auto mt-3 items-center text-center md:hidden  animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </ScrollLink>

            </div>
        </div >

    )
}
