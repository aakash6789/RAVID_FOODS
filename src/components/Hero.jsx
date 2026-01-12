import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg';
import corrianderImg from '../images/clients/dried_corriander.png'
import BannerCarousel from './Carousel/BannerCarousel';
const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:px-12 md:py-6 h-5/6" data-aos="zoom-in">

                    <div id='hero' className="flex flex-col w-full lg:flex-row py-8 justify-between text-center lg:text-left">
                        <BannerCarousel/>
                       
                        
                    </div>
         

                </div>
            </div>
        </>
    )
}

export default Hero;