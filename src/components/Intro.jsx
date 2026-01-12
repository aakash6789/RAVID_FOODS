// import React from 'react';
// import img from '../images/Web-developer.svg';
// import { Link } from 'react-router-dom';
// import freezeDrying from '../images/clients/freezeDrying.png'
// const Intro = () => {
//     return (
//         <>
//                 <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

//                     <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
//                         <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
//                             <img alt="card img" className="rounded-t float-right" src={freezeDrying} />
//                         </div>
//                         <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
//                             <h3 className="text-1xl  text-black font-bold">We develop high quality organic freezed food for organizations, institutions and SMEs</h3>
//                             <div>
//                                 <p className='my-3 text-md text-gray-600 font-semibold'>Our team is well vast in freezed food development and is ready to help develop the food of your choice.</p>
//                             </div>
                            
//                             <div>
//                                 <p className='my-3 text-xl text-gray-600 font-semibold'>We take responsibility for freezed foods that caters for automation of your business processes and improve efficiency.</p>
//                             </div>
//                             <Link to="/contact" className="text-white bg-orange-400 hover:bg-orange-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-sm shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
//                                 Contact us
//                                 <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//         </>
//     )
// }

// export default Intro;

import React from 'react';
import { Link } from 'react-router-dom';
import freezeDrying from '../images/clients/freezeDrying.png';

const Intro = () => {
    return (
        <section className="bg-white py-16 lg:py-24" id='about'>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2" data-aos="fade-right">
                        <div className="relative">
                            {/* Decorative element to make the illustration look more professional */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-50 rounded-full z-0" />
                            <img 
                                alt="Freeze Drying Process Illustration" 
                                className="relative z-10 w-full h-auto drop-shadow-sm hover:scale-105 transition-transform duration-500" 
                                src={freezeDrying} 
                            />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-50 rounded-full z-0" />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
                        <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
                            Industry Leaders in Preservation
                        </span>
                        
                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                            Premium Freeze-Dried Solutions for Modern Brands
                        </h2>
                        
                        <div className="mt-6 space-y-6">
                            <p className='text-lg text-gray-600 leading-relaxed'>
                                We specialize in developing high-quality, organic freeze-dried ingredients tailored for institutions, food manufacturers, and growing SMEs. 
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                <div className="border-l-4 border-orange-400 pl-4">
                                    <h4 className="font-bold text-gray-800">Nutritional Integrity</h4>
                                    <p className="text-sm text-gray-500">Preserving 97% of nutrients and original flavor profiles.</p>
                                </div>
                                <div className="border-l-4 border-orange-400 pl-4">
                                    <h4 className="font-bold text-gray-800">Supply Chain Ready</h4>
                                    <p className="text-sm text-gray-500">Scalable production volumes with global shipping standards.</p>
                                </div>
                            </div>

                            <p className='text-md text-gray-500 italic'>
                                "We take full responsibility for the quality and safety of our ingredients, ensuring your brand delivers nothing but the best to your customers."
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link to="/contact" className="inline-flex text-md items-center justify-center px-8 py-4 text-white bg-orange-500 hover:bg-orange-600 font-bold rounded-lg shadow-lg hover:shadow-orange-200/50 transition-all group">
                                Start Your Partnership
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Intro;