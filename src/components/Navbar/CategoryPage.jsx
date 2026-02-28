

// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { CATEGORY_CONTENT } from './CategoryContent';
// import Navbar from './Navbar'; // Your existing Navbar

// const CategoryPage = () => {
//     const { slug } = useParams();
//     const data = CATEGORY_CONTENT[slug];

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [slug]);

//     if (!data) return <div className="pt-40 text-center">Category not found.</div>;

//     return (
//         <div className="min-h-screen bg-white">
//             <Navbar />
//             <main className="pt-24 pb-16 lg:pt-32 lg:pb-24">
//                 <div className="max-w-7xl mx-auto px-6 lg:px-12">
//                     <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        
//                         {/* Image Column */}
//                         <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-none" data-aos="fade-right">
//                             <div className="relative w-full max-w-md">
//                                 <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-50 rounded-full z-0 hidden lg:block" />
//                                 <img 
//                                     src={`/images/categories/${slug}.jpg`} // Name your images matching the slug
//                                     alt={data.title}
//                                     className="relative z-10 w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500" 
//                                 />
//                                 <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full z-0" />
//                             </div>
//                         </div>

//                         {/* Text Column */}
                        // <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
                        //     <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
                        //         {data.tagline}
                        //     </span>
                            
                        //     <h1 className="mt-4 text-2xl md:text-2xl lg:text-4xl font-serif font-bold text-gray-900 leading-tight">
                        //         {data.title}
                        //     </h1>
                            
                        //     <div className="mt-8 space-y-6">
                        //         <p className='text-md text-gray-800 font-semibold leading-relaxed'>
                        //             {data.description}
                        //         </p>

                        //         <p className='text-base text-gray-700 leading-relaxed'>
                        //             {data.details}
                        //         </p>

                        //         <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500">
                        //             <p className='text-sm text-gray-700 italic font-medium'>
                        //                 "{data.closing}"
                        //             </p>
                        //         </div>
                        //     </div>

                        //     <div className="mt-10">
                        //         <button className="px-10 py-4 text-white bg-orange-500 hover:bg-orange-600 font-bold rounded-full shadow-lg transition-all group">
                        //             Inquire for {data.title}
                        //         </button>
                        //     </div>
                        // </div>
//                  </div>
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default CategoryPage;

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORY_CONTENT } from './CategoryContent';
import NavBar from './NavBar';
import Footer from '../Footer';
import AOS from 'aos';

const CategoryPage = () => {
    const { slug } = useParams();
    const data = CATEGORY_CONTENT[slug];

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }, [slug]);

    if (!data) {
        return (
            <div className="h-screen flex items-center justify-center">
                <p className="text-xl font-serif">Category not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <NavBar />
            
            <main className="pt-24 pb-16 lg:pt-36 lg:pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    
                    {/* Breadcrumbs for UX */}
                    <div className="mb-10 flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-400">
                        <Link to="/" className="hover:text-orange-500 transition">Home</Link>
                        <span>/</span>
                        <span className="text-orange-600">{data.title}</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        
                        {/* Image Column */}
                        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-none" data-aos="zoom-in-right">
                            <div className="relative group">
                                {/* Decorative elements - Matching your Intro UI */}
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-50 rounded-full z-0 hidden lg:block group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gray-50 rounded-full z-0 group-hover:scale-110 transition-transform duration-700" />
                                
                                <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border border-gray-100">
                                    <img 
                                        src={data.image} 
                                        alt={data.title}
                                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Column */}
                        {/* <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
                            <span className="text-orange-600 font-bold tracking-[0.25em] uppercase text-xs sm:text-sm">
                                {data.tagline}
                            </span>
                            
                            <h1 className="mt-4 text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                                {data.title}
                            </h1>
                            
                            <div className="mt-8 space-y-6">
                                <p className='text-lg lg:text-xl text-gray-800 font-medium leading-relaxed'>
                                    {data.description}
                                </p>

                                <p className='text-base text-gray-600 leading-relaxed italic'>
                                    {data.details}
                                </p>

                                <div className="bg-orange-50/50 p-6 rounded-xl border-l-4 border-orange-500 mt-8">
                                    <p className='text-md text-gray-700 font-medium leading-relaxed'>
                                        "{data.closing}"
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 text-white bg-orange-500 hover:bg-orange-600 font-bold rounded-full shadow-lg hover:shadow-orange-200/50 transition-all group">
                                    Request Technical Sheet
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div> */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
                            <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
                                {data.tagline}
                            </span>
                            
                            <h1 className="mt-4 text-2xl md:text-2xl lg:text-4xl font-serif font-bold text-gray-900 leading-tight">
                                {data.title}
                            </h1>
                            
                            <div className="mt-8 space-y-6">
                                <p className='text-md text-gray-800 font-semibold leading-relaxed'>
                                    {data.description}
                                </p>

                                <p className='text-base text-gray-700 leading-relaxed'>
                                    {data.details}
                                </p>

                                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500">
                                    <p className='text-sm text-gray-700 italic font-medium'>
                                        "{data.closing}"
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <button className="px-10 py-4 text-white bg-orange-500 hover:bg-orange-600 font-bold rounded-full shadow-lg transition-all group">
                                    Inquire for {data.title}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default CategoryPage;