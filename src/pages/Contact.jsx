

import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notiflix from 'notiflix';
import emailjs from '@emailjs/browser';

const Contact = () => {
    useDocTitle('Ravid Foods | Contact Our B2B Team');
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);

    const clearErrors = () => setErrors([]);
    const clearInput = () => {
        setFirstName(''); setLastName(''); setEmail(''); setPhone(''); setMessage('');
    };

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     const btn = document.getElementById('submitBtn');
    //     btn.disabled = true;
    //     btn.innerHTML = 'Processing...';

    //     let fData = new FormData();
    //     fData.append('first_name', firstName);
    //     fData.append('last_name', lastName);
    //     fData.append('email', email);
    //     fData.append('phone_number', phone);
    //     fData.append('message', message);

    //     axios({
    //         method: "post",
    //         url: process.env.REACT_APP_CONTACT_API,
    //         data: fData,
    //         headers: { 'Content-Type': 'multipart/form-data' }
    //     })
    //     .then((response) => {
    //         btn.disabled = false;
    //         btn.innerHTML = 'Send Message';
    //         clearInput();
    //         Notiflix.Report.success('Message Sent', 'Our procurement team will contact you shortly.', 'Okay');
    //     })
    //     .catch((error) => {
    //         btn.disabled = false;
    //         btn.innerHTML = 'Send Message';
    //         const { response } = error;
    //         if (response?.status === 500) {
    //             Notiflix.Report.failure('Error', response.data.message, 'Okay');
    //         }
    //         if (response?.data?.errors) setErrors(response.data.errors);
    //     });
    // };
const sendEmail = (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.innerHTML = 'Processing...';

    const templateParams = {
        first_name: firstName,
        company: lastName,
        email: email,
        phone: phone,
        message: message,
    };
// console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
// console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
// console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        btn.disabled = false;
        btn.innerHTML = 'Send Inquiry';
        clearInput();
        Notiflix.Report.success(
            'Message Sent',
            'Our procurement team will contact you shortly.',
            'Okay'
        );
    })
    .catch((error) => {
        btn.disabled = false;
        btn.innerHTML = 'Send Inquiry';
        Notiflix.Report.failure(
            'Error',
            'Failed to send message. Please try again.',
            'Okay'
        );
        console.error(error);
    });
};

    return (
        <>
            <NavBar />
            <div className="bg-gray-50 min-h-screen pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center text-[#013289] font-bold hover:text-orange-500 transition-colors mb-8 group"
                    >
                        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </button>

                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row" data-aos="fade-up">
                        
                        {/* Left Side: Contact Info */}
                        <div className="lg:w-1/3 bg-[#013289] p-8 lg:p-12 text-white">
                            <h2 className="text-3xl font-serif font-bold mb-6">Partner with <br/><span className="text-orange-400">Ravid Foods</span></h2>
                            <p className="text-blue-100 mb-12 leading-relaxed text-xs">
                                Thank you for your interest. Customer success lies at the heart of our sales, marketing, and operations. We are always happy to assist with your inquiries, feedback, or concerns regarding our products and services.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-800 p-3 rounded-lg">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        {/* <h4 className="font-bold">Global Headquarters</h4>
                                        <p className="text-sm text-blue-200">Industrial Zone, Phase II, <br/>Umbergaon, Gujarat, India</p> */}
                                       
                                <p className="text-sm text-blue-200">Ravid Enterprise</p>
                                <p className="text-sm text-blue-200 mt-1"> Plot No 53, New GIDC</p>
                                <p className="text-sm text-blue-200 mt-1">52 Hector, GIDC Umbergaon</p>
                                <p className="text-sm text-blue-200 mt-1">Umbergaon, Gujarat 396171, India</p>
                                
                                <p className="text-sm text-blue-200 mt-1">Phone no: 9372451492, 9821042008</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-800 p-3 rounded-lg">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Email Us</h4>
                                        <p className="text-sm text-blue-200">sales@ravidfoods.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge */}
                            {/* <div className="mt-16 pt-8 border-t border-blue-800">
                                <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">Certifications</p>
                                <div className="flex gap-4 opacity-50">
                                    <span className="text-xs border border-white px-2 py-1 rounded">ISO 22000</span>
                                    <span className="text-xs border border-white px-2 py-1 rounded">HACCP</span>
                                    <span className="text-xs border border-white px-2 py-1 rounded">NABL</span>
                                    <span className="text-xs border border-white px-2 py-1 rounded">FSSAI</span>
                                    <span className="text-xs border border-white px-2 py-1 rounded">GMP</span>
                                    <span className="text-xs border border-white px-2 py-1 rounded">APEDA</span>
                                </div>
                            </div> */}
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:w-2/3 p-8 lg:p-16">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8">B2B Enquiry Form</h3>
                            <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                                    <input 
                                        type="text" required value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full border-b-2 border-gray-100 py-3 focus:border-[#013289] outline-none transition-colors"
                                        placeholder=""
                                    />
                                    {errors?.first_name && <p className="text-red-500 text-xs">{errors.first_name}</p>}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Company Name</label>
                                    <input 
                                        type="text" required value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full border-b-2 border-gray-100 py-3 focus:border-[#013289] outline-none transition-colors"
                                        placeholder=""
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Business Email</label>
                                    <input 
                                        type="email" required value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full border-b-2 border-gray-100 py-3 focus:border-[#013289] outline-none transition-colors"
                                        placeholder=""
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Mobile Number</label>
                                    <input 
                                        type="tel" required value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full border-b-2 border-gray-100 py-3 focus:border-[#013289] outline-none transition-colors"
                                        placeholder="+91..."
                                    />
                                </div>

                                <div className="md:col-span-2 space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Requirement Details</label>
                                    <textarea 
                                        rows="4" required value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full border-2 border-gray-50 rounded-xl p-4 mt-2 focus:border-[#013289] outline-none transition-colors bg-gray-50"
                                        placeholder="Tell us about your bulk needs..."
                                    ></textarea>
                                </div>

                                <div className="md:col-span-2 mt-4">
                                    <button 
                                        type="submit" id="submitBtn"
                                        className="w-full lg:w-max px-8 py-4 bg-[#013289] text-white font-bold rounded-xl hover:bg-orange-500 shadow-xl text-sm transition-all active:scale-95"
                                    >
                                        Send Inquiry
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;