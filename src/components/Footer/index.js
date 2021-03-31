import React from 'react'

const Footer = ({
    ...otherProps

}) => {
    return (
        <footer className=" 
       bg-gradient-to-r from-gray-900 via-blue-900 to-green-500 relative">
            <div className="w-full max-w-5xl text-center mx-auto py-11 px-2.6">
                <span className="text-base">
                    Copyright 2021 by Alice Piar
                </span>
            </div>
        </footer>
    )
}

export default Footer
