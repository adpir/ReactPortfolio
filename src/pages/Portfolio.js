// /* eslint-disable no-lone-blocks */
// /* eslint-disable react/jsx-no-target-blank */
// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import CardAboutMe from '../components/CardAboutMe';

function Portfolio() {
    const image = process.env.PUBLIC_URL + '/images/lines.png'

    return (
        <>
            <div className="min-h-screen shadow rounded-lg bg-cover bg-center bg-fixed bg-no-repeat"
                style={{
                    backgroundImage: `url(${image})`,
                }} id="/portfolio" >
                <div className="portfolio-section" id="portfolio"></div>
                <CardAboutMe />

            </div>
        </>
    );
}


export default Portfolio;
