
// import React from 'react';
// import { HashLink } from 'react-router-hash-link';
// import NavDropdown from './NavDropdown'; 
// import PRODUCT_CATEGORIES from '../../data2/productListData';

// const NavLinks = () => {
//     const linkStyles = "relative text-[0.9rem] inline-block font-semibold text-black hover:text-orange-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-out hover:after:w-full font-inter";

//     // Your specific Applications Data
//     const APPLICATION_DATA = [
//         { title: "Dairy Products, Alternatives", items: [] },
//         { title: "Curries | Gravies", items: [] },
//         { title: "Condiment Sauces, Mayo, Dips", items: [] },
//         { title: "Snacks", items: [] },
//         { title: "Soups, Seasonings, Savories", items: [] },
//         { title: "Healthy Drinks", items: [] },
//         { title: "Baby Food | Nutraceuticals", items: [] },
//     ];
//     const INDUSTRY_DATA = [
//         { title: "Dairy | Ice Cream | Processed Foods", items: [] },
//         { title: "Human Nutrition (Nutraceuticals)", items: [] },
//         { title: "Cosmetics", items: [] },
//         { title: "FMCG | Beverage", items: [] },
//         { title: "HoReCa", items: [] },
//         { title: "Confectionary",itmes:[]},
//         { title: "Baby Food | Nutraceuticals", items: [] },
//     ];

//     return (
//         <>
//             <HashLink className={linkStyles} smooth to="/#hero">
//                 Home
//             </HashLink>

//             <HashLink className={linkStyles} smooth to="/#about">
//                 About
//             </HashLink>

//             {/* New Industry Tab */}
//             <div className="hidden lg:inline-block">
//                 <NavDropdown 
//                     title="Industry" 
//                     data={INDUSTRY_DATA} 
//                     baseUrl="/applications" 
//                 />
//             </div>
          
//             {/* Products Dropdown */}
//             <div className="hidden lg:inline-block">
//                 <NavDropdown 
//                     title="Products" 
//                     data={PRODUCT_CATEGORIES} 
//                     baseUrl="/products" 
//                 />
//             </div>

//             {/* Applications Dropdown */}
//             <div className="hidden lg:inline-block">
//                 <NavDropdown 
//                     title="Applications" 
//                     data={APPLICATION_DATA} 
//                     baseUrl="/applications" 
//                 />
//             </div>

//             <HashLink className={linkStyles} to="/private-labels">
//                  Private Labels
//             </HashLink>

//             <HashLink className={linkStyles} to="/contact#contact">
//                 Contact Us
//             </HashLink>
//         </>
//     )
// }

// export default NavLinks;

import React from 'react';
import { HashLink } from 'react-router-hash-link';
import NavDropdown from './NavDropdown'; 
import PRODUCT_CATEGORIES from '../../data2/productListData';

 

const NavLinks = () => {
//     const APPLICATION_DATA = [
//     { title: "Dairy Products, Alternatives", slug: "dairy-products-alternatives", items: [] },
//     { title: "Curries | Gravies", slug: "curries-gravies", items: [] },
//     { title: "Condiment Sauces, Mayo, Dips", slug: "condiment-sauces-mayo-dips", items: [] },
//     { title: "Snacks", slug: "snacks", items: [] },
//     { title: "Soups, Seasonings, Savories", slug: "soups-seasonings-savories", items: [] },
//     { title: "Healthy Drinks", slug: "healthy-drinks", items: [] },
//     { title: "Baby Food | Nutraceuticals", slug: "baby-food-nutraceuticals", items: [] },
// ];

//  const INDUSTRY_DATA = [
//     { title: "Dairy | Ice Cream | Processed Foods", slug: "dairy-ice-cream-processed-foods", items: [] },
//     { title: "Human Nutrition (Nutraceuticals)", slug: "human-nutrition-nutraceuticals", items: [] },
//     { title: "Cosmetics", slug: "cosmetics", items: [] },
//     { title: "FMCG | Beverage", slug: "fmcg-beverage", items: [] },
//     { title: "HoReCa", slug: "horeca", items: [] },
//     { title: "Confectionary", slug: "confectionary", items: [] },
//     { title: "Baby Food | Nutraceuticals", slug: "baby-food-nutraceuticals-industry", items: [] },
// ];
 const APPLICATION_DATA = [
    { title: "Dairy Products, Alternatives", slug: "dairy-products-alternatives", items: [] },
    { title: "Curries | Gravies", slug: "curries-gravies", items: [] },
    { title: "Condiment Sauces, Mayo, Dips", slug: "condiment-sauces-mayo-dips", items: [] },
    { title: "Snacks", slug: "snacks", items: [] },
    { title: "Soups, Seasonings, Savories", slug: "soups-seasonings-savories", items: [] },
    { title: "Healthy Drinks", slug: "healthy-drinks", items: [] },
    { title: "Baby Food | Nutraceuticals", slug: "baby-food-nutraceuticals", items: [] },
];

 const INDUSTRY_DATA = [
    { title: "Dairy | Ice Cream | Processed Foods", slug: "industry-dairy-processed", items: [] },
    { title: "Human Nutrition (Nutraceuticals)", slug: "industry-human-nutrition", items: [] },
    { title: "Cosmetics", slug: "industry-cosmetics", items: [] },
    { title: "FMCG | Beverage", slug: "industry-fmcg-beverage", items: [] },
    { title: "HoReCa", slug: "industry-horeca", items: [] },
    { title: "Confectionary", slug: "industry-confectionary", items: [] },
    { title: "Bakery", slug: "industry-bakery", items: [] },
    { title: "Ready-to-Eat", slug: "industry-ready-to-eat", items: [] },
];
    const linkStyles = "relative text-[0.9rem] inline-block font-semibold text-black hover:text-orange-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-out hover:after:w-full font-inter";

    return (
        <>
            <HashLink className={linkStyles} smooth to="/#hero">Home</HashLink>
            <HashLink className={linkStyles} smooth to="/#about">About</HashLink>

            {/* INDUSTRY DROPDOWN */}
            <div className="hidden lg:inline-block">
                <NavDropdown 
                    title="Industry" 
                    data={INDUSTRY_DATA} 
                    baseUrl="/industry" 
                />
            </div>
          
            {/* PRODUCTS DROPDOWN */}
            <div className="hidden lg:inline-block">
                <NavDropdown 
                    title="Products" 
                    data={PRODUCT_CATEGORIES} 
                    baseUrl="/products" 
                />
            </div>

            {/* APPLICATIONS DROPDOWN */}
            <div className="hidden lg:inline-block">
                <NavDropdown 
                    title="Applications" 
                    data={APPLICATION_DATA} 
                    baseUrl="/applications" 
                />
            </div>

            <HashLink className={linkStyles} to="/contact#contact">Private Labels</HashLink>
            <HashLink className={linkStyles} to="/contact#contact">Contact Us</HashLink>
        </>
    )
}

export default NavLinks;