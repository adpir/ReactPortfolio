import React from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";
import './index.css';

// function Greeting() {
//   return (
//     <div>
//       <Question />
//       <Tutorial />
//     </div>

//   );


// }
// const Question = () => <h1>What are you practice?</h1>
// const Tutorial = () => {
//   return (
//     <p> Learning React</p>

//   )
// }

function App() {
    return (
        <section className="App">
            <Navbar />
            <Background />
            <Footer />
        </section>
    )
}

// const Book = () => {
//     return (
//         <section>
//             <article className="book">
//                 <h1 >
//                     Outlander
//     </h1>
//                 <img src="https://m.media-amazon.com/images/I/51PrW27sXWL.jpg" alt='' />
//                 <h4>Outlander: A Novel (Outlander, Book 2) </h4>
//                 <h3>Book 5 of 8: </h3>
//                 <a href="#">Outlander</a>
//             </article>

//         </section>
//     )
// }

export default App;
