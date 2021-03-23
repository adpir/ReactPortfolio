import React from "react";



export default function Skills() {
    return (
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h1 className="mb-6">Skills</h1>
                <div className="subheading mb-3">Programming Languages AND Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                    <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                    <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                    <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                    <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                </ul>
                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    <li>
                        <span className="fa-li"></span>
                    Mobile-First, Responsive Design
                </li>
                    <li>
                        <span className="fa-li"></span>
                    Cross Browser Testing AND Debugging
                </li>
                    <li>
                        <span className="fa-li"></span>
                    Cross Functional Teams
                </li>
                    <li>
                        <span className="fa-li"></span>
                    Agile Development
                </li>
                </ul>
            </div>
        </section>
    )
}