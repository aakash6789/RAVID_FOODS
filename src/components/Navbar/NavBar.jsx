
import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import { HashLink } from 'react-router-hash-link';
import RavidFoodLogo from '../../images/clients/ravidFoodLogo.jfif'

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = React.useState(false);
    
    function handleClick() {
        setisOpen(!isOpen);
    }

    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 bg-white w-full z-40 transition duration-300 ease-in-out ${!top && 'bg-white  shadow-lg'}`}>
            <div className="flex flex-row justify-between items-center py-0 px-4 md:px-12">
                <div className="flex flex-row justify-center items-center text-center font-semibold bg-yellow-400">
                    <HashLink smooth to="/#hero"> 
                        <img src={RavidFoodLogo} className='w-16 md:w-14 lg:w-18' alt="Ravid Food Logo" />
                    </HashLink>
                </div>
               
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-blue-900" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Menu - Adjusted spacing for more links */}
                    <div className='hidden lg:flex items-center space-x-20 xl:space-x-16 2xl:space-x-28 p-5'>
                        <NavLinks />
                    </div>

                    {/* Mobile Menu */}
                    <div className={`fixed transition-all font-inter duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-b-md p-12 bg-white lg:hidden shadow-xl top-14 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
                        <div className='flex flex-col space-y-6 text-center'>
                            <NavLinks />
                        </div>                                                
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;