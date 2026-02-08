// import React from 'react';
// import kws from '../images/clients/kws.png';
// import geps from '../images/clients/geps.png';
// import protergia from '../images/clients/protergia.png';

// const clientImage = {
//     height: '10rem',
//     width: 'auto',
//     mixBlendMode: 'colorBurn'
// }

// const Clients = () => {
//     return (
//         <div className="mt-8 bg-gray-100">
//             <section data-aos="fade-up">
//                 <div className="my-4 py-4">
//                         <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Clients</h2>
//                         <div className='flex justify-center'>
//                             <div className='w-24 border-b-4 border-blue-900'></div>
//                         </div>
//                         <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our clients.</h2>
//                     </div>

//                 <div className="p-16" data-aos="fade-in" data-aos-delay="600">
//                     <div className="grid sm:grid-cols-3 lg:grid-cols-3">
//                         <div style={clientImage} className= "overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
//                             <img src={kws} alt="client" />                           
//                         </div>

//                         <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
//                             <img src={protergia} alt="client" />                            
//                         </div> 

//                         <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
//                             <img src={geps} alt="client" />                            
//                         </div>

                                           
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Clients;

import React from 'react';
// Keep your imports as they are
import kws from '../images/clients/kws.png';
import geps from '../images/clients/geps.png';
import protergia from '../images/clients/protergia.png';
import license1 from '../images/clients/GMP.jpeg';
import license2 from '../images/clients/NABL-Acredited.jpg';
import license3 from '../images/clients/Haccp.jpeg';
import license4 from '../images/clients/ISO 9000 2015.jpg';
import license5 from '../images/clients/fssai.jfif';
import license6 from '../images/clients/apeda.jfif';

const Clients = () => {
    // Array of clients for cleaner mapping
    const clientLogos = [
        { img: kws, name: "KWS" },
        { img: protergia, name: "Protergia" },
        { img: geps, name: "GEPS" },
    ];
    const clientLogos1 = [
        { img: license1, name: "KWS" },
        { img: license2, name: "Protergia" },
        { img: license3, name: "GEPS" },
        { img: license4, name: "GEPS" },
        { img: license5, name: "GEPS" },
        { img: license6, name: "GEPS" },
    ];

    return (
        <section className="bg-white py-16 lg:py-24" id="clients">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">
                        Global Reach
                    </span>
                    <h2 className="mt-3 text-3xl md:text-3xl font-serif font-bold text-[#013289]">
                        Trusted by Brands
                    </h2>
                    {/* <div className='flex justify-center mt-4'>
                        <div className='w-16 border-b-4 border-orange-500'>Trusted by Brands</div>
                    </div> */}
                    <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-sm">
                        We are proud to partner with food brands, institutions, and manufacturers who prioritize quality and nutritional integrity
                    </p>
                </div>

                {/* Logo Grid */}
                <div 
                    className="grid grid-cols-2 md:grid-cols-6 lg:flex lg:justify-center lg:items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700" 
                    data-aos="fade-in" 
                    data-aos-delay="300"
                >
                    {clientLogos1.map((client, index) => (
                        <div 
                            key={index} 
                            className="flex justify-center items-center transition-transform hover:scale-110 duration-300"
                        >
                            <img 
                                src={client.img} 
                                alt={`${client.name} logo`} 
                                className="h-12 md:h-16 lg:h-20 w-auto object-contain filter drop-shadow-sm" 
                            />
                        </div>
                    ))}
                </div>

                {/* Optional Trust Caption */}
                <div className="mt-16 text-center" data-aos="fade-up">
                    <p className="text-sm text-gray-400 font-medium italic">
                         We undergo rigorous quality and compliance audits conducted by a team of enterprise experts before onboarding.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Clients;