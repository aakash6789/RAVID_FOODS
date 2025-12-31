import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="
    relative inline-block font-semibold text-black hover:text-orange-400
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300 after:ease-out
    hover:after:w-full
  " smooth to="/#about">
                About
            </HashLink>
            <HashLink className="
    relative inline-block font-semibold text-black hover:text-orange-400
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300 after:ease-out
    hover:after:w-full
  " smooth to="/#products">
                Products
            </HashLink>
            {/* <HashLink className="px-4 font-semibold text-black hover:text-gray-200 hover:underline" to="/">
                Portfolio
            </HashLink> */}
        
<HashLink
  to="/"
  className="
    relative inline-block font-semibold text-black hover:text-orange-400
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300 after:ease-out
    hover:after:w-full
  "
>
  Application
</HashLink>



            <HashLink className="
    relative inline-block font-semibold text-black hover:text-orange-400
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300 after:ease-out
    hover:after:w-full
  " to="/contact#contact">
                Contact Us
            </HashLink>
            {/* <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Demo our products
            </HashLink> */}
        </>
    )
}

export default NavLinks;
