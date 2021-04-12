// /* eslint-disable no-lone-blocks */
// /* eslint-disable react/jsx-no-target-blank */
// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import CardAboutMe from '../components/CardAboutMe';


function Portfolio() {
    return (
        <div>
            <div class="bg-gray-100 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h1 className="text-5xl font-dosis text-center font-bold  text-gray-600 ">Portfolio</h1>
                </div>
                <div className="px-4 py-5 sm:p-6">
                    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        <CardAboutMe

                        />
                    </div>  </div>
                <div class="bg-gray-50 px-4 py-5 sm:p-6">
                </div>
            </div>
        </div>
    );
}


export default Portfolio;
