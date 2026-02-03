
import { useEffect, useState } from "react";
import mangoPowder from '../../images/clients/mangoPowder(1).png'
import bananaPowder from '../../images/clients/bananaPowder.jfif'
import chikuPowder from '../../images/clients/chikuPowder.jfif'
const images = [
  mangoPowder,
 bananaPowder,
  chikuPowder,
];



export default function BannerCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    // <section className="relative w-full h-full lg:h-full overflow-hidden bg-gray-50  shadow-2xl"> 
     <section className="relative w-full h-full min-h-screen overflow-hidden">

      {images.map((img, index) => (
  <div
    key={index}
    className={`absolute w-full inset-0 transition-opacity duration-1000 ease-in-out ${
      active === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
    } transition-transform duration-[6000ms]`}
  >
    <img
      src={img}
      alt="Freeze dried ingredients"
      className="w-full h-full object-cover" 
    />

  </div>
))}


      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent lg:from-black/70" />
      
      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-end">
  {/* Added 'flex flex-col items-end text-right' to align everything to the right */}
  <div className="max-w-2xl text-white flex flex-col items-end text-right">
    
    {/* Subtle Label - margin-right auto removed to stay on the right */}
    <span className="inline-block mt-[10%] py-1 px-3 mb-4 text-xs font-bold tracking-widest uppercase bg-yellow-500 text-black rounded">
      Premium B2B Supply
    </span>

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
      Pure Ingredients, <br /> 
      <span className="italic text-yellow-400">Scalable</span> Solutions.
    </h1>

    <p className="text-lg md:text-sm text-gray-200 mb-8 max-w-lg leading-relaxed font-light">
      Premium freeze-dried powders and slices engineered for global food brands, nutraceuticals, and clean-label snacks.
    </p>

    {/* Added 'justify-end' to keep buttons on the right */}
    <div className="flex flex-wrap text-sm gap-4 justify-end">
      <button className="px-6 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg">
        Get Free Samples
      </button>

      <button className="px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg transition-all">
        Bulk Catalog
      </button>
    </div>

    {/* Value Props Bar - Added 'justify-end' and changed flex-col items for symmetry */}
    <div className="mt-12 mb-[5%] flex items-center justify-end gap-8 border-t border-white/20 pt-8 w-full">
      <div className="flex flex-col items-end">
        <span className="text-yellow-400 font-bold text-xl">100%</span>
        <span className="text-xs uppercase tracking-wider text-gray-300">Natural</span>
      </div>
      <div className="h-8 w-[1px] bg-white/20" />
      <div className="flex flex-col items-end">
        <span className="text-yellow-400 font-bold text-xl">GFSI</span>
        <span className="text-xs uppercase tracking-wider text-gray-300">Certified</span>
      </div>
      <div className="h-8 w-[1px] bg-white/20" />
      <div className="flex flex-col items-end">
        <span className="text-yellow-400 font-bold text-xl">24/7</span>
        <span className="text-xs uppercase tracking-wider text-gray-300">Logistics</span>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}