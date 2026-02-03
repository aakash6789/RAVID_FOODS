// import React, { useState } from 'react';
// import NavBar from '../components/Navbar/NavBar';
// import Footer from '../components/Footer';
// import {useDocTitle} from '../components/CustomHook';
// import axios from 'axios';
// // import emailjs from 'emailjs-com';
// import Notiflix from 'notiflix';

// const Contact = () => {
//     useDocTitle('MLD | Molad e Konsult - Send us a message')
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [phone, setPhone] = useState('')
//     const [message, setMessage] = useState('')
//     const [errors, setErrors] = useState([])

//     const clearErrors = () => {
//         setErrors([])
//     }

//     const clearInput = () => {
//         setFirstName('')
//         setLastName('')
//         setEmail('')
//         setPhone('')
//         setMessage('')
//     }

//     const sendEmail = (e) => {
//         e.preventDefault();
//         document.getElementById('submitBtn').disabled = true;
//         document.getElementById('submitBtn').innerHTML = 'Loading...';
//         let fData = new FormData();
//         fData.append('first_name', firstName)
//         fData.append('last_name', lastName)
//         fData.append('email', email)
//         fData.append('phone_number', phone)
//         fData.append('message', message)

//         axios({
//             method: "post",
//             url: process.env.REACT_APP_CONTACT_API,
//             data: fData,
//             headers: {
//                 'Content-Type':  'multipart/form-data'
//             }
//         })
//         .then(function (response) {
//             document.getElementById('submitBtn').disabled = false;
//             document.getElementById('submitBtn').innerHTML = 'send message';
//             clearInput()
//             //handle success
//             Notiflix.Report.success(
//                 'Success',
//                 response.data.message,
//                 'Okay',
//             );
//         })
//         .catch(function (error) {
//             document.getElementById('submitBtn').disabled = false;
//             document.getElementById('submitBtn').innerHTML = 'send message';
//             //handle error
//             const { response } = error;
//             if(response.status === 500) {
//                 Notiflix.Report.failure(
//                     'An error occurred',
//                     response.data.message,
//                     'Okay',
//                 );
//             }
//             if(response.data.errors !== null) {
//                 setErrors(response.data.errors)
//             }
            
//         });
//     }
//     return (
//         <>
//             <div>
//                 <NavBar />
//             </div>
//             <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
//                 <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

//                 <form onSubmit={sendEmail}>

//                     <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
//                         <div className="flex">
//                             <h1 className="font-bold text-center lg:text-left text-orange-800 uppercase text-2xl">Send us a message</h1>
//                         </div>
//                         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
//                                 <div>
//                                     <input 
//                                         name="first_name" 
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="text" 
//                                         placeholder="First Name*" 
//                                         value={firstName}
//                                         onChange={(e)=> setFirstName(e.target.value)}
//                                         onKeyUp={clearErrors}
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.first_name}</p>
//                                     }
//                                 </div>
                                
//                                 <div>
//                                     <input 
//                                         name="last_name" 
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="text" 
//                                         placeholder="Last Name*"
//                                         value={lastName}
//                                         onChange={(e)=> setLastName(e.target.value)}
//                                         onKeyUp={clearErrors}
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.last_name}</p>
//                                     }
//                                 </div>

//                                 <div>
//                                     <input 
//                                         name="email"
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="email" 
//                                         placeholder="Email*"
//                                         value={email}
//                                         onChange={(e)=> setEmail(e.target.value)}
//                                         onKeyUp={clearErrors}   
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.email}</p>
//                                     }
//                                 </div>

//                                 <div>
//                                     <input
//                                         name="phone_number" 
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="number" 
//                                         placeholder="Phone*"
//                                         value={phone}
//                                         onChange={(e)=> setPhone(e.target.value)}
//                                         onKeyUp={clearErrors}
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.phone_number}</p>
//                                     }
//                                 </div>
//                         </div>
//                         <div className="my-4">
//                             <textarea 
//                                 name="message" 
//                                 placeholder="Message*" 
//                                 className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                 value={message}
//                                 onChange={(e)=> setMessage(e.target.value)}
//                                 onKeyUp={clearErrors}
//                             ></textarea>
//                             {errors && 
//                                 <p className="text-red-500 text-sm">{errors.message}</p>
//                             }
//                         </div>
//                         <div className="my-2 w-1/2 lg:w-2/4">
//                             <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
//                                     focus:outline-none focus:shadow-outline">
//                                 Send Message
//                             </button>
//                         </div>
//                 </div>
//                 </form>
//                         {/* <div
//                             className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-orange-600 rounded-2xl">
//                             <div className="flex flex-col text-white">
                                
//                                 <div className="flex my-4 w-2/3 lg:w-3/4">
//                                     <div className="flex flex-col">
//                                         <i className="fas fa-map-marker-alt pt-2 pr-2" />
//                                     </div>
//                                     <div className="flex flex-col">
//                                         <h2 className="text-2xl">Office Address</h2>
//                                         <p className="text-gray-400">Ilo Awela, Ota, Ogun State</p>
//                                     </div>
//                                 </div>
                    
//                     <div className="flex my-4 w-2/3 lg:w-1/2">
//                         <div className="flex flex-col">
//                         <i className="fas fa-phone-alt pt-2 pr-2" />
//                         </div>

//                         <div className="flex flex-col">
//                         <h2 className="text-2xl">Call Us</h2>
//                         <p className="text-gray-400">Tel: 08055384406</p>
                        
//                             <div className='mt-5'>
//                                 <h2 className="text-2xl">Send an E-mail</h2>
//                                 <p className="text-gray-400">info@mld.ng</p>
//                             </div>
                       
//                         </div>
//                     </div>
                    
//                     <div className="flex my-4 w-2/3 lg:w-1/2">
//                         <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
//                         </a>
//                         <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
//                         </a>
//                     </div>
//                     </div>
//                 </div> */}
//                 </div>
//             </div>
//             <Footer />
//         </>


//     )
// }

// export default Contact;

import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notiflix from 'notiflix';

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

    const sendEmail = (e) => {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        btn.disabled = true;
        btn.innerHTML = 'Processing...';

        let fData = new FormData();
        fData.append('first_name', firstName);
        fData.append('last_name', lastName);
        fData.append('email', email);
        fData.append('phone_number', phone);
        fData.append('message', message);

        axios({
            method: "post",
            url: process.env.REACT_APP_CONTACT_API,
            data: fData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((response) => {
            btn.disabled = false;
            btn.innerHTML = 'Send Message';
            clearInput();
            Notiflix.Report.success('Message Sent', 'Our procurement team will contact you shortly.', 'Okay');
        })
        .catch((error) => {
            btn.disabled = false;
            btn.innerHTML = 'Send Message';
            const { response } = error;
            if (response?.status === 500) {
                Notiflix.Report.failure('Error', response.data.message, 'Okay');
            }
            if (response?.data?.errors) setErrors(response.data.errors);
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
                            <p className="text-blue-100 mb-12 leading-relaxed">
                                Looking for bulk pricing or custom formulations? Reach out to our industrial supply team.
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
                            <div className="mt-16 pt-8 border-t border-blue-800">
                                <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">Certifications</p>
                                <div className="flex gap-4 opacity-50">
                                    <span className="text-xs border border-white px-2 py-1 rounded">ISO 22000</span>
                                    <span className="text-xs border border-white px-2 py-1 rounded">HACCP</span>
                                    <span className="text-xs border border-white px-2 py-1 rounded">NABL</span>
                                    <span className="text-xs border border-white px-2 py-1 rounded">FSSAI</span>
                                    <span className="text-xs border border-white px-2 py-1 rounded">GMP</span>
                                    <span className="text-xs border border-white px-2 py-1 rounded">APEDA</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:w-2/3 p-8 lg:p-16">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8">Industrial Inquiry Form</h3>
                            <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">First Name</label>
                                    <input 
                                        type="text" required value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full border-b-2 border-gray-100 py-3 focus:border-[#013289] outline-none transition-colors"
                                        placeholder="John"
                                    />
                                    {errors?.first_name && <p className="text-red-500 text-xs">{errors.first_name}</p>}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Last Name</label>
                                    <input 
                                        type="text" required value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full border-b-2 border-gray-100 py-3 focus:border-[#013289] outline-none transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Business Email</label>
                                    <input 
                                        type="email" required value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full border-b-2 border-gray-100 py-3 focus:border-[#013289] outline-none transition-colors"
                                        placeholder="email@company.com"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
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
                                        className="w-full lg:w-max px-12 py-4 bg-[#013289] text-white font-bold rounded-xl hover:bg-orange-500 shadow-xl transition-all active:scale-95"
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