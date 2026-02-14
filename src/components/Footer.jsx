
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        // <footer className="bg-gray-900 text-gray-300 pl-4">
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
                    
                    {/* 1st block: Company Info */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="flex flex-col space-y-6">
                            <h3 className="text-3xl font-serif font-bold text-white tracking-tight">
                                RAVID<span className="text-orange-500">FOODS</span>
                            </h3>
                            <p className="text-sm font-medium leading-relaxed max-w-xs text-white">
                                 Leading the way in premium freeze-dried nutrition. We provide scalable, high-quality food solutions for global brands and institutions.
                            </p>
                            <div className="text-sm space-y-1 italic font-medium text-white">
                                <p>Factory :</p>
                                <p>Plot No 53,New GIDC Rd</p>
                                <p>52 Hector, GIDC Umbergaon</p>
                                <p>Umbergaon,Gujarat 396171,India</p>
                                <p>Email: ravidenterpises@gmail.com</p>
                                <p>Phone no: 9372451492, 9821042008</p>
                            </div>
                            
<p className="mt-2 text-sm font-semibold italic text-white underline underline-offset-4 hover:text-gray-200 transition">
  <a
    href="https://www.google.com/maps/place/RAVID+ENTERPRISES/@20.1639112,72.7260749,4488m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be72bbda362f13f:0x64ae3cb0a0a6ca1a!8m2!3d20.1638748!4d72.7629416!16s%2Fg%2F11b6j4d25t?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1"
  >
    {/* <!-- Location Icon --> */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-green-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>

    <span>View Factory Location</span>
  </a>
</p>



                        </div>
                    </div>

                    {/* 2nd block: Quick Links */}
                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Company</h6>
                        <ul className="space-y-4 text-sm text-white font-medium">
                            <li><HashLink to="/#hero" className="hover:text-orange-500 transition-colors">Home</HashLink></li>
                            <li><HashLink to="/#about" className="hover:text-orange-500 transition-colors">About Us</HashLink></li>
                            <li><HashLink to="/#portfolio" className="hover:text-orange-500 transition-colors">Product Range</HashLink></li>
                            <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* 3rd block: Products */}
                    <div className="col-span-6 md:col-span-3 lg:col-span-3">
                        <h6 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Our Solutions</h6>
                        {/* <ul className="space-y-4 text-sm text-white font-medium">
                            <li><Link to="#" className="hover:text-orange-500 transition-colors">Freeze-Dried Fruits</Link></li>
                            <li><Link to="#" className="hover:text-orange-500 transition-colors">Freeze-Dried Vegetables</Link></li>
                            <li><Link to="#" className="hover:text-orange-500 transition-colors">Premium Spice Masalas</Link></li>
                            <li><Link to="#" className="hover:text-orange-500 transition-colors">Custom Bulk Formulations</Link></li>
                        </ul> */}
                        <ul className="space-y-4 text-sm text-white font-medium">
  <li>
    <Link to="/products" className="hover:text-orange-500 transition-colors">
      Freeze-Dried Fruits
    </Link>
  </li>
  <li>
    <Link to="/products" className="hover:text-orange-500 transition-colors">
      Freeze-Dried Vegetables
    </Link>
  </li>
  <li>
    <Link to="/products" className="hover:text-orange-500 transition-colors">
      Premium Spice Masalas
    </Link>
  </li>
  <li>
    <Link to="/products" className="hover:text-orange-500 transition-colors">
      Custom Bulk Formulations
    </Link>
  </li>
</ul>

                    </div>

                    {/* 4th block: Social & Newsletter */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                        <h6 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Connect With Us</h6>
                        <p className="text-xs text-gray-500 mb-4 uppercase font-semibold">Follow our journey</p>
                        <div className="flex space-x-4 mb-8">
                            <Link to="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                            </Link>
                            <Link to="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            </Link>
                            <Link to="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </Link>
                        </div>
                        <Link to="/contact" className="text-xs font-bold border-b border-orange-500 text-orange-500 hover:text-white hover:border-white transition-all">
                            REQUEST BULK PRICING →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            {/* <div className="bg-black py-8">
                <div className="max-w-8xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0 w-full">
                    <p>Copyright &copy; {new Date().getFullYear()} Ravid Enterprises. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link to="#" className="hover:text-white">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white">Terms of Supply</Link>
                        <Link to="#" className="hover:text-white">Cookie Settings</Link>
                    </div>
                </div>
            </div> */}
            <div className="bg-black py-8 w-full">
    {/* Removed max-w-8xl and mx-auto to allow content to span full width */}
    <div className="px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0 w-full">
        <p>Copyright &copy; {new Date().getFullYear()} Ravid Enterprises. All rights reserved.</p>
        <div className="flex space-x-6">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Supply</Link>
            <Link to="#" className="hover:text-white">Cookie Settings</Link>
        </div>
    </div>
</div>
        </footer>
    );
}

export default Footer;

