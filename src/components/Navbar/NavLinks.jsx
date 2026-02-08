

import React from 'react';
import { HashLink } from 'react-router-hash-link';
import ProductsMenu from './ProductsLinks';

const NavLinks = () => {
    // Reusable tailwind classes for the underline effect
    const linkStyles = "relative text-sm inline-block font-semibold text-black hover:text-orange-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-out  hover:after:w-full font-inter";

    return (
        <>
            <HashLink className={linkStyles} smooth to="/#hero">
                Home
            </HashLink>

            <HashLink className={linkStyles} smooth to="/#about">
                About
            </HashLink>

            {/* <HashLink className={linkStyles} to="/private-labels">
               
            </HashLink> */}
          
            <div className="hidden lg:inline-block">
                <ProductsMenu />
            </div>

            <HashLink to="/products" className={linkStyles}>
                Application
            </HashLink>

            <HashLink className={linkStyles} to="/contact#contact">
                 Private Labels
            </HashLink>

            <HashLink className={linkStyles} to="/contact#contact">
                Contact Us
            </HashLink>
        </>
    )
}

export default NavLinks;