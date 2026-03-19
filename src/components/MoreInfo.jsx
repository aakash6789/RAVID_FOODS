import React, { useEffect } from 'react';
import NavBar from './Navbar/NavBar.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const MoreInfo = () => {
     const navigate = useNavigate();
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }, []);

    const values = [
        {
            title: "Ethics & Accountability",
            desc: "We uphold strong ethical standards and take responsibility for our actions, ensuring trust and reliability in our services.",
            tagline: "Breaking silos and excelling together with people-first mindset"
        },
        {
            title: "Synergy & Success",
            desc: "We work together seamlessly to achieve common goals, ensuring the best outcomes for our clients.",
            tagline: "Collaborative growth and shared achievements"
        },
        {
            title: "Customer & Service Orientation",
            desc: "We prioritize our customers by delivering high-quality vacuum freeze-drying solutions. Our focus is on meeting their needs with precision and care.",
            tagline: "Win-Win partnerships, impact-driven solutions for right customer"
        },
        {
            title: "Progressive Innovation & Growth",
            desc: "Our commitment to research and development ensures we stay at the forefront of vacuum freeze-drying technology.",
            tagline: "Challenging norms, innovating with purpose, beyond products"
        },
        {
            title: "Integrity",
            desc: "Honesty and transparency are the pillars of our business. We conduct all our operations with integrity, ensuring trust and reliability.",
            tagline: "Trust and reliability in every relationship"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-inter">
            <NavBar />

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-16 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                     <button 
                        onClick={() => navigate(-1)} 
                        className="group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-orange-600 transition-colors duration-300"
                    >
                        <svg 
                            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back
                    </button>
                    <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
                        <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
                            Established 2024
                        </span>
                        <h1 className="mt-4 text-3xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
                            Leading the Future of <br />
                            <span className="italic text-orange-500 text-3xl md:text-3xl">Vacuum Freeze-Drying Solutions</span>
                        </h1>
                        <p className="mt-8 text-md text-gray-700 leading-relaxed italic border-l-4 border-orange-500 pl-6 inline-block text-left">
                            "Freeze dried/lyophilize itself is the world's best technology. No one can compare the product derived with this technology in comparison with traditional sun dried, spray dried, or dehydration methods."
                        </p>
                    </div>
                </div>
            </section>

            {/* --- CORE INTRODUCTION --- */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right" className="space-y-6">
                            <h2 className="text-2xl font-serif font-bold text-gray-900">About Ravid Enterprises</h2>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                RAVID ENTERPRISES is a leading provider serving industries ranging from food to pharmaceuticals and cosmetics. Our technology preserves flavor, texture, and nutrition by removing moisture through freezing and sublimation under vacuum conditions. 
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Founded in 2024, Ravid set out with a clear vision—to craft natural foods and ingredients that enhance everyday living. Every ingredient undergoes rigorous testing and certification to ensure uncompromising quality and consistency.
                            </p>
                        </div>
                        <div data-aos="fade-left" className="bg-orange-50 p-8 rounded-3xl">
                            <h4 className="font-bold text-orange-600 uppercase tracking-widest text-sm mb-4">Our Portfolio</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Fruit Chips & Powders",
                                    "Vegetable Chips & Powders",
                                    "Whole & Powdered Herbs",
                                    "Ready-to-Eat (RTE) Foods",
                                    "Nutraceutical Ingredients",
                                    "100% Vegetarian & Safe"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- INFRASTRUCTURE & B2B --- */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row-reverse gap-16">
                        <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-serif font-bold leading-tight">Advanced Infrastructure & Global B2B Reach</h2>
                            <p className="text-gray-400 text-sm">
                                We operate a <span className="text-orange-400 font-bold">–40°C blast freezing cold storage</span> facility for fruits and vegetables. This modern infrastructure allows us to serve international markets with innovative, application-driven solutions.
                            </p>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h4 className="text-orange-400 font-bold mb-3 uppercase text-xs tracking-widest">Target B2B Industries</h4>
                                <p className="text-sm text-gray-300 leading-loose">
                                    Flavored Tea Industry • Soup Industry • Nutrition Bar Industry • Chocolate Industry • Ice-cream Industry • Confectionery • Pharmaceuticals
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2" data-aos="fade-right">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h5 className="font-bold text-orange-400 mb-2">Pricing</h5>
                                    <p className="text-sm text-gray-400">Prices kept as low as possible to cater to a larger audience without compromising quality.</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h5 className="font-bold text-orange-400 mb-2">Transparency</h5>
                                    <p className="text-sm text-gray-400">Full transparency in all business dealings to build lasting client trust.</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h5 className="font-bold text-orange-400 mb-2">Payments</h5>
                                    <p className="text-sm text-gray-400">We accept various modes of both offline and online transactions for your convenience.</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h5 className="font-bold text-orange-400 mb-2">Logistics</h5>
                                    <p className="text-sm text-gray-400">Backed by a logistical system that ensures timely delivery of all consignments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PILLARS OF RAVID (VALUES) --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 uppercase tracking-tight">Our Core Values</h2>
                        {/* <p className="text-orange-600 font-bold mt-2">The DNA of RAVID ENTERPRISE</p> */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((val, idx) => (
                            <div key={idx} 
                                 className="flex flex-col h-full p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-orange-200 transition-all group"
                                 data-aos="fade-up" 
                                 data-aos-delay={idx * 100}>
                                <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 mb-4">{val.title}</h4>
                                <p className="text-sm text-gray-600 mb-6 flex-grow">{val.desc}</p>
                                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest pt-4 border-t border-gray-200">
                                    {val.tagline}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FINAL QUOTE / CTA --- */}
            <section className="py-20 bg-orange-600 text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-2xl md:text-2xl font-serif italic mb-10 leading-relaxed">
                        "We take full responsibility for the quality and safety of our ingredients, ensuring your brand delivers nothing but the best to your customers."
                    </p>
                    {/* <button className="px-12 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl">
                        <Link to='/contact'>
                        Start Your Partnership
                        </Link>
                    </button> */}
                    <Link 
    to="/contact" 
    className="inline-flex items-center justify-center px-12 py-4 bg-white text-orange-600 font-bold rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-orange-900/20 hover:bg-orange-50 group"
>
    Start Your Partnership
    <svg 
        className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
        />
    </svg>
</Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MoreInfo;