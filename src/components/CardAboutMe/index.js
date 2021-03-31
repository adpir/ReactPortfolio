/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Photo from "../../Images/Alice.png";

export default function CardAboutMe() {
    return (
        <>
            <div className="flex flex-wrap  justify-center relative   ">
                <div
                    className="
        h-screen lg:w-4/6 xl:w-/10 
        px-7 mb-5
      "
                >

                    <div className="bg-gray-200 shadow-xl  rounded-lg h-19">
                        <div>
                            <img src={Photo} className=" " />
                        </div>

                        <div className="p-2.5">
                            <p>
                                A true creative at heart both on and off of the computer, I have always enjoyed making things work
                                and look the way that they should. Born in the U.S. territory of Puerto Rico, I always dreamed of
                                coming to the states to immerse myself in the culture and learn English. I moved here 11 years ago
                                and have been in Minneapolis ever since. I have a bachelors in Theatre, have always been involved in
                                the arts, and love finding new ways to get creative.
                                I have been working at a software company for the last five years and recently, I completed a full
                                stack advanced coding program at the University of Minnesota that expanded my creative toolbelt
                                immensely. I enjoy tackling problems, have a strong range of leadership experience in multiple
                                fields of work, and work well with others. Recently I was nominated as a “Transformer” by the team I
                                lead for my hard work and dedication within the company. I look forward to opportunities to create
                                or augment existing systems in ways that ‘wow’ people and make a real, long lasting impressions.
</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
