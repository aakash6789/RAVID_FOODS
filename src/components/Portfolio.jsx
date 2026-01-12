// import React from 'react';
// import { Link } from 'react-router-dom';

// const Portfolio = () => {
//     return (
//         <>
//             <div className="my-4 py-4" id='portfolio'>
//                 <h2 className="my-2 text-center text-3xl text-black uppercase font-bold">Products</h2>
//                 <div className='flex justify-center'>
//                     <div className='w-24 border-b-4 border-black mb-8'></div>
//                 </div>

//                 <div className="px-4" data-aos="fade-down" data-aos-delay="600">
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
//                         <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
//                             <div className="m-2 text-justify text-sm">
//                                 <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Freezed vegetables</h4>
//                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
//                                     Our Business Management System is a robust and easily scalable system that streamlines business operations, increase efficiency, and ultimately drive growth and profitability for your business.
//                                     With features such as employee management, 
//                                 </p>
//                                 <div className="flex justify-center my-4">
//                                     <Link to="/get-demo" className="text-white  bg-orange-400 hover:bg-orange-500 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
//                                         Know more
//                                         <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
//                             <div className="m-2 text-justify text-sm">
//                                 <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Freezed fruits</h4>
//                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
//                                     Our all encompassing School Management Portal is the only solution needed for any institution.
//                                     The School Management Portal (SMP) is a tool that can help educational institutions of all kinds manage their 
//                                 </p>
//                                 <div className="flex justify-center my-4">
//                                     <Link to="/get-demo" className="text-white bg-orange-400 hover:bg-orange-500 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
//                                         Know more
//                                         <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                                     </Link>
//                                 </div>
                                
//                                 {/* <ul className="border-t border-gray-300 py-8 space-y-6">
//                                     <li className="flex items-center space-x-2 px-8">
//                                         <span className="bg-blue-600 rounded-full p-1">
//                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
//                                                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
//                                             </svg>
//                                         </span>
//                                         <span className="text-gray-600 capitalize">Free Setup Guidance</span>
//                                     </li>
//                                 </ul> */}
//                             </div>
//                         </div>

//                         <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
//                             <div className="m-2 text-justify text-sm">
//                             <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Freezed masalas</h4>
//                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
//                                     The Payroll Management System automates the process of employee payments for businesses and organizations of different sizes. It helps to ensure that your employees get paid accurately and on time, while also reducing the time and effort required to manage payroll manually, with this system in place, you enjoy benefits such as: 
//                                     increased accuracy in employee payments
//                                 </p>
//                                 <div className="flex justify-center my-4">
//                                     <Link to="/get-demo" className="text-white  bg-orange-400 hover:bg-orange-500 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
//                                         Know more
//                                         <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
//                             <div className="m-2 text-justify text-sm">
//                                 <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Freezed ready-to-eat foods</h4>
//                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
//                                     Our event management system helps to manage different types of events, whether weddings, burials or any kind of event. With an easily customizable menu, you get to define your user experience and make your event fully customizable and memorable.
//                                     With
//                                 </p>
//                                 <div className="flex justify-center my-4">
//                                     <Link to="/get-demo" className="text-white  bg-orange-400 hover:bg-orange-500 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
//                                         Know more
//                                         <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>                    
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Portfolio;
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        title: "Freeze-Dried Vegetables",
        description: "Premium selection of corn, peas, and bell peppers. Ideal for instant soups, snack mixes, and industrial food processing.",
        features: ["100% Purity", "2-Year Shelf Life", "Quick Rehydration"],
        image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Freeze-Dried Fruits",
        description: "Crispy slices and powders of mango, strawberry, and banana. Perfect for breakfast cereals and confectionery.",
        features: ["No Added Sugar", "Nutrient Dense", "Vibrant Color"],
        image: "https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Freeze-Dried Masalas",
        description: "Concentrated spice blends and herbs that retain their essential oils and aromatic profiles through cold-processing.",
        features: ["Aroma Retention", "Zero Fillers", "Bulk Packaging"],
        image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Ready-to-Eat Foods",
        description: "Gourmet meal solutions that require only hot water. Scalable options for institutional catering and travel retail.",
        features: ["Clean Label", "Lightweight", "Chef-Crafted"],
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800"
    }
];

const Portfolio = () => {
    return (
        <section className="bg-gray-50 py-20" id='portfolio'>
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 uppercase tracking-tight">
                        Our Product Categories
                    </h2>
                    <div className='flex justify-center mt-4'>
                        <div className='w-24 border-b-4 border-orange-500'></div>
                    </div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                        High-performance ingredients engineered for nutritional integrity and operational efficiency.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((item) => (
                        <div 
                            key={item.id} 
                            className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                            data-aos="fade-up"
                        >
                            {/* Image Container */}
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h4 className="text-xl font-bold text-gray-800 mb-3 font-serif">
                                    {item.title}
                                </h4>
                                
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                                    {item.description}
                                </p>

                                {/* Feature Tags */}
                                <div className="space-y-2 mb-6">
                                    {item.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-xs font-semibold text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link 
                                    to="/contact" 
                                    className="block text-sm text-center py-3 px-0 bg-gray-900 text-white font-bold rounded-lg hover:bg-orange-500 transition-colors duration-300"
                                >
                                    View Specifications
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <Link to="/contact" className="text-orange-600 font-bold hover:underline">
                        Need a custom formulation? Talk to our R&D team →
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;