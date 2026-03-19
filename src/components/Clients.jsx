

import React from 'react';


const Clients = () => {
   
    const clientLogos1 = [
        { img: '/images/clients/GMP.webp', name: "KWS" },
        { img: '/images/clients/NABL-Acredited.webp', name: "Protergia" },
        { img: '/images/clients/Haccp.webp', name: "GEPS" },
        { img: '/images/clients/ISO 9000 2015.webp', name: "GEPS" },
        { img: '/images/clients/fssai.jfif', name: "GEPS" },
        { img: '/images/clients/apeda.jfif', name: "GEPS" },
    ];
    return (
        <section className="bg-white py-16 lg:py-24" id="clients">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">
                        Global Reach
                    </span>
                    {/* <h2 className="mt-3 text-3xl md:text-3xl font-serif font-bold text-[#013289]">
                        Trusted by Brands
                    </h2> */}
                    <h2 className="mt-3 text-3xl md:text-3xl font-serif font-bold text-[#013289]">
                        Our licenses
                    </h2>
                    
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
                                 loading="lazy"
                                decoding="async"
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