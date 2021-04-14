// /* eslint-disable no-lone-blocks */
// /* eslint-disable react/jsx-no-target-blank */
// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import CardAboutMe from '../components/CardAboutMe';


function Portfolio() {
    return (
        <div className="portfolio-section" id="portfolio">
            <div class="min-h-screen bg-gray-100 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h1 className="text-5xl font-dosis text-center font-bold  text-gray-600 ">Portfolio</h1>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:p-6">
                    <CardAboutMe
                    />
                </div>

            </div>
        </div>
    );
}


export default Portfolio;
