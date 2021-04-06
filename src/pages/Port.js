// import React from "react";
// import content from '../content/index'
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// function Port() {
//     return (
//         <>
//             <h1 className="text-5xl font-dosis text-center font-bold mb-10">sss</h1>
//             <div className=" relative mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
//                 <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
//                     <div className="flex-shrink-0">
//                         {content.about.imag.map((imag, index) => {
//                             return (
//                                 <span className={`${
//                                     index % 2 === 0 ? 'animate-float' : 'animate-refloat'
//                                     }h-48 w-full object-cover`}>
//                                     <LazyLoadImage src={imag.img} alt={imag.alt} />
//                                 </span>
//                             );
//                         })}
//                     </div>
//                     <div className="flex-1 p-6 flex flex-col justify-between">
//                         <div className="flex-1 ">
//                             <p className="text-md leading-5 font-medium text-indigo-600">
//                                 Burger
//                 </p>
//                             <h3 className="mt-2 text-xl leading-7 text-gray-500">
//                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
//                                 quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
//                                 nihil.
//                 </h3>
//                             <div className="-mt-px flex divide-x divide-gray-200">
//                                 <div className="w-0 flex-1 flex">
//                                     <a href="mailto:janecooper@example.com" className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
//                                         {/* Heroicon name: solid/mail */}
//                                         <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                             <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                                             <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                                         </svg>
//                                         <span className="ml-3">Porfolio</span>
//                                     </a>
//                                 </div>
//                                 <div className="-ml-px w-0 flex-1 flex">
//                                     <a href="tel:+1-202-555-0170" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
//                                         {/* Heroicon name: solid/phone */}
//                                         <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                             <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                                         </svg>
//                                         <span className="ml-3">Call</span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div >
//                 <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
//                     <div className="flex-shrink-0">
//                         {content.about.imag.map((imag, index) => {
//                             return (
//                                 <span className={`${
//                                     index % 2 === 0 ? 'animate-float' : 'animate-refloat'
//                                     }h-48 w-full object-cover`}>
//                                     <LazyLoadImage src={imag.img} alt={imag.alt} />
//                                 </span>
//                             );
//                         })}
//                     </div>
//                     <div className="flex-1 p-6 flex flex-col justify-between">
//                         <div className="flex-1 ">
//                             <p className="text-sm leading-5 font-medium text-indigo-600">
//                                 Burger
//                 </p>
//                             <h3 className="mt-2 text-xl leading-7 text-gray-500">
//                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
//                                 quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
//                                 nihil.
//                 </h3>
//                             <div className="-mt-px flex divide-x divide-gray-200">
//                                 <div className="w-0 flex-1 flex">
//                                     <a href="mailto:janecooper@example.com" className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
//                                         {/* Heroicon name: solid/mail */}
//                                         <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                             <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                                             <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                                         </svg>
//                                         <span className="ml-3">Porfolio</span>
//                                     </a>
//                                 </div>
//                                 <div className="-ml-px w-0 flex-1 flex">
//                                     <a href="tel:+1-202-555-0170" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
//                                         {/* Heroicon name: solid/phone */}
//                                         <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                             <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                                         </svg>
//                                         <span className="ml-3">Call</span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div >
//                 <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
//                     {/* <div className="flex-shrink-0">
//                         {content.about.imag.map((imag, index) => {
//                             return (
//                                 <span className={`${
//                                     index % 2 === 0 ? 'animate-float' : 'animate-refloat'
//                                     }h-48 w-full object-cover`}>
//                                     <LazyLoadImage src={imag.img} alt={imag.alt} />
//                                 </span>
//                             );
//                         })}
//                     </div> */}
//                     <div className="flex-1 p-6 flex flex-col justify-between">
//                         <div className="flex-1 ">
//                             <p className="text-sm leading-5 font-medium text-indigo-600">
//                                 Burger
//                 </p>
//                             <h3 className="mt-2 text-xl leading-7 text-gray-500">
//                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
//                                 quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
//                                 nihil.
//                 </h3>
//                             <div className="-mt-px flex divide-x divide-gray-200">
//                                 <div className="w-0 flex-1 flex">
//                                     <a href="mailto:janecooper@example.com" className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
//                                         {/* Heroicon name: solid/mail */}
//                                         <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                             <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                                             <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                                         </svg>
//                                         <span className="ml-3">Porfolio</span>
//                                     </a>
//                                 </div>
//                                 <div className="-ml-px w-0 flex-1 flex">
//                                     <a href="tel:+1-202-555-0170" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
//                                         {/* Heroicon name: solid/phone */}
//                                         <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                             <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                                         </svg>
//                                         <span className="ml-3">Call</span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div >
//             </div >
//         </>
//     )
// }


// export default Port;
// // {/* <div className="max-w-xs rounded overflow-hidden shadow-lg my-2"> */ }
// // <div class="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">

