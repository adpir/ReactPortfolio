/* eslint-disable import/no-anonymous-default-export */
export default {
    header: {
        text: [" 👋 I'm Alice Piar!"],
        typical: [
            "Creative 🎭",
            2000,
            "Passionate 🤩",
            2000,
            "Leader 🤓 ",
            2000,
            "And",
            2000,
            "Software Engineer 👩‍💻",
            2000,
        ],
        btnText: "Welcome",
    },

    about: {
        title: "About",
        imag: [
            {
                img: process.env.PUBLIC_URL + "/images/Alice.png",
                alt: "alice",
            },
        ],
        desc: `A passionate, creative, bilingual Full-Stack Software Engineer with a background in operations. I am a true creative at heart both on and off the computer, I have always enjoyed making things work and look the way they should. With a recently completed Full-Stack Certificate from the University of Minnesota with technical experience in HTML, CSS, Javascript, React, Node.js. and many more, I am ready and excited to learn the next new thing. I am looking to specialize as a Front-End Developer to marry my creativity with technology. 
When I work on a project, my goal is to make things visually striking, uniform, and cohesive to messaging and brand. `,
        btnText: "Scroll down",

    },
    portfolioWC: {
        title: 'Portfolio',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/images/WC1.png',
                alt: 'wcn',

            },
        ],
        name: `Word Connections`,
        desc:
            ` Word Connections is an app where the user can
              search for a word and get the word's definitions. A giphy will illustrate
             the meaning of the word, and using local Storage; the user will be able to
              see the history of the words`,

    },
    portfolioDinner: {
        title: 'Portfolio',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/images/dinner.png',
                alt: 'dinner',
            },
        ],
        name: `Dinner And A Movie`,
        desc:
            ` Create an application app were you are able to search a movie 
    and it will automatically pick a meal to match, including the recipe to that meal!.`,
    },
    portfolioYogo: {
        title: 'Portfolio',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/images/YOGO.jpg',
                alt: 'yogo',
            },
        ],
        name: `Yogo`,
        desc:
            ` YoGo is an app to help user prioritize self-care. Self-care is essential for our health and well-being, especially with increased stressors introduced within the last year.
As a user, I want an app that will help me prioritize and manage my self-care practices and routines.`,
    },
    portfolioBurger: {
        title: 'Portfolio',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/images/burger.png',
                alt: 'burger',
            },
        ],
        name: `Get In My Be-LLY`,
        desc:
            ` This burger app uses this programming tools like MySQL, Node, Express, Handlebars, and a homemade ORM (yum!). 
   Remember to follow the MVC design pattern; use MySQL to query and route data in your app, and Handlebars to generate your HTML`,
    },
    portfolioMysql: {
        title: 'Portfolio',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/images/mysql.png',
                alt: 'mysql',
            },
        ],
        name: `Employee Database`,
        desc:
            ` Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems.This project included  a solution for managing a company's employees using node, inquirer, and MySQL.
.`,
    },
    portfolioFitness: {
        title: 'Portfolio',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/images/workout.png',
                alt: 'Fitness',
            },
        ],
        name: `Fitness Tracker`,
        desc:
            `As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.
`,
    },
    portfolioBudget: {
        title: 'Portfolio',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/images/Progressive.png',
                alt: 'Budget',
            },
        ],
        name: `Progressive Budget`,
        desc:
            `Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.`

    },
    portfolio8: {
        title: 'Portfolio',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/images/note.png',
                alt: 'note',
            },
        ],
        name: `Note Taker`,
        desc:
            `Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.
`,
    },
    portfolio9: {
        title: 'Portfolio',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/images/emptdirectory.png',
                alt: 'emptdirectory',
            },
        ],
        name: `Employee Directory`,
        desc:
            `Employee Directory with React. When the user loads the page, a table of employees should render.
`,
    },
    portfolio10: {
        title: 'Portfolio',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/images/halfbrain.png',
                alt: 'emptdirectory',
            },
        ],


    },


    skills: {
        title: 'Skills',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/logo512.png',
                alt: 'react',
                name: `Employee Directory`,
                desc:
                    `Employee Directory with React. When the user loads the page, a table of employees should render.
`,
            },
            {
                img: process.env.PUBLIC_URL + '/images/node.png',
                alt: 'node',
                name: `Employee Directory`,
                desc:
                    `Employee Directory with React. When the user loads the page, a table of employees should render.
`,
            },
            {
                img: process.env.PUBLIC_URL + '/images/mongo.png',
                alt: 'mongo',
                name: `Employee Directory`,
                desc:
                    `Employee Directory with React. When the user loads the page, a table of employees should render.
`,
            },
            {
                img: process.env.PUBLIC_URL + '/images/express.png',
                alt: 'express',
                name: `Employee Directory`,
                desc:
                    `Employee Directory with React. When the user loads the page, a table of employees should render.
`,
            },


        ],
    },

};
