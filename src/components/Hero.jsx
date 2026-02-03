// import React from 'react';
// import { Link } from 'react-router-dom';
// import NavBar from '../components/Navbar/NavBar';
// import heroImg from '../images/web-dev.svg';

// import BannerCarousel from './Carousel/BannerCarousel';
// const Hero = () => {
//     return (
//         <>
//             <div className="hero" id='hero'>
//                 <div>
//                     <NavBar />
//                 </div>
                
//                 <div className="m-auto overflow-hidden  mt-8 lg:mt-4  md:py-6 h-5/6" data-aos="zoom-in">

//                     <div id='hero' className="flex flex-col w-full lg:flex-row py-8 justify-between text-center lg:text-left">
//                         <BannerCarousel/>
                       
                        
//                     </div>
         

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg';

import BannerCarousel from './Carousel/BannerCarousel';
const Hero = () => {
    return (
        <section
            id="hero"
            className="relative h-screen w-full overflow-hidden"
        >
            {/* Navbar */}
            <div className="absolute top-0 left-0 w-full z-20">
                <NavBar />
            </div>

            {/* Carousel */}
            <div className="h-full w-full">
                <BannerCarousel />
            </div>
        </section>
    );
};

export default Hero;
