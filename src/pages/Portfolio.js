import React from "react";
import CardAboutMe from '../components/CardAboutMe/';

function Portfolio() {
    const image = process.env.PUBLIC_URL + '/images/lines.png'

    return (
        <>
            <div className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
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
