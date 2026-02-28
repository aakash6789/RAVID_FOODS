

import React from 'react';
import { Link } from 'react-router-dom';
import freezeDrying from '../images/clients/Picture1.png';
import freezeDrying1 from '../images/clients/Picture2.png';
import freezeDrying2 from '../images/clients/Freeze-dried-final.png';

const Intro = () => {
    return (
        <section className="bg-white py-8 lg:py-8" id='about'>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Image Column */}
               
                   <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-right">
    <div className="relative flex justify-center items-center w-full">
        {/* Top-Left Decorative element - Adjusted to follow the image width */}
        {/* <div className="absolute -top-4 left-[15%] w-[70%] aspect-square bg-orange-50 rounded-full z-0" /> */}
        
        <img 
            alt="Freeze Drying Process Illustration" 
            className="relative z-10 w-[60%] h-auto drop-shadow-sm hover:scale-105 transition-transform duration-500" 
            src={freezeDrying2} 
        />
      
        {/* Bottom-Right Decorative element - Anchored to image corner */}
        <div className="absolute -bottom-4 right-[15%] w-32 h-32 bg-gray-50 rounded-full z-0" />
    </div>
</div>

                    {/* Text Column */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
                        {/* <span className="text-orange-700 font-bold tracking-widest uppercase text-sm">
                            Industry Leaders in Preservation
                        </span> */}
                        <span className="text-orange-700 font-bold tracking-widest uppercase text-sm">
                            Process Driven Preservation Specialist
                        </span>
                        
                        {/* <h2 className="mt-4 text-3xl md:text-4xl lg:text-2xl font-serif font-bold text-gray-900 leading-tight">
                            Premium Freeze-Dried Solutions for Modern Brands
                        </h2> */}
                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-2xl font-serif font-bold text-gray-900 leading-tight">
                           A dedicated freeze-drying specialist with state-of-the-art infrastructure.
                        </h2>
                        
                        <div className="mt-6 space-y-6">
                            <p className='text-sm text-gray-800 leading-relaxed'>
                                <span className='font-semibold'>RAVID ENTERPRISE</span> is in Vacuum freeze-drying business involves the process of removing moisture from foods, Fruits,Vegetables,Milk,Coffe etc by freezing them and then subjecting them to a vacuum to remove ice via sublimation, leaving behind a dried product. This method preserves the product’s taste, texture, and nutrients better than traditional drying methods. We established with a commitment to quality and innovation, our company leverages cutting-edge freeze-drying technology to preserve the integrity, taste, and nutritional value of a wide range of products.
                            </p>
{/* <p className="text-sm text-gray-600 leading-relaxed text-center">
  <span className="font-semibold">RAVID ENTERPRISE</span> is in Vacuum freeze-drying business involves the process of removing moisture from foods, Fruits, Vegetables, Milk, Coffee etc by freezing them and then subjecting them to a vacuum to remove ice via sublimation, leaving behind a dried product. This method preserves the product’s taste, texture, and nutrients better than traditional drying methods. We established with a commitment to quality and innovation, our company leverages cutting-edge freeze-drying technology to preserve the integrity, taste, and nutritional value of a wide range of products.
</p> */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                <div className="border-l-4 border-orange-400 pl-4">
                                    <h4 className="font-bold text-gray-800">Nutritional Integrity</h4>
                                    <p className="text-sm text-gray-800">Preserving 97% of nutrients and original flavor profiles.</p>
                                </div>
                                <div className="border-l-4 border-orange-400 pl-4">
                                    <h4 className="font-bold text-gray-800">Supply Chain Ready</h4>
                                    <p className="text-sm text-gray-800">Scalable production volumes with global shipping standards.</p>
                                </div>
                            </div>

                            <p className='text-md text-gray-800 italic'>
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