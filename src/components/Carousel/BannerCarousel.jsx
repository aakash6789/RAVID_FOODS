// import { useEffect, useState } from "react";
// import mangoPowder from '../../images/clients/mangoPowder(1).png'
// import bananaPowder from '../../images/clients/bananaPowder.jfif'
// import chikuPowder from '../../images/clients/chikuPowder.jfif'
// const images = [
//   mangoPowder,
//  bananaPowder,
//   chikuPowder,
// ];

// export default function BannerCarousel() {
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full  h-[65vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden bg-white">
//       {/* Images */}
//       {images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           alt="Freeze dried food ingredient"
//         //   className={`
//         //     absolute inset-0 w-full  h-full object-cover
//         //     transition-opacity duration-1000 ease-in-out
//         //     ${active === index ? "opacity-100" : "opacity-0"}
//         //   `}
//         className={`
//   absolute inset-0 w-full h-full object-cover
//   transition-opacity duration-1000 ease-in-out
//   ${active === index ? "opacity-100" : "opacity-0"}
//   filter brightness-[0.92] saturate-[0.85]
// `}

//         />
//       ))}

//       {/* Soft professional overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-transparent" />
//       {/* <div className="absolute inset-0 bg-gradient-to-l from-white/55 via-white/60 to-transparent" /> */}
// {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" /> */}
// {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)]" /> */}
//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="max-w-4xl ml-auto px-2">
//           <div className="max-w-xl">
//             <h1 className="text-3xl sm:text-4xl lg:text-3xl font-semibold text-black leading-tight">
//               Freeze-Dried Ingredients for Scalable Food Brands
//             </h1>

//             {/* <p className="mt-5 text-base sm:text-lg text-gray-400">
//               Preserving flavor, color, and nutrition through precision
//               freeze-drying for B2B applications.
//             </p> */}

//             <div className="mt-8 flex flex-wrap gap-4">
//               <button className="px-4 py-2 bg-gray-900 text-white rounded-md text-[0.8rem]  hover:bg-gray-800 transition">
//                 Request Samples
//               </button>

//               <button className="px-4 py-2 border border-gray-300 text-gray-800 rounded-md text-sm  hover:bg-gray-100 transition">
//                 Talk to Sales
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Subtle bottom fade */}
//       <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent" />

//       <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
//       {/* <div className="absolute top-0 left-0 right-0 h-0 bg-gradient-to-t from-transparent to-white" /> */}
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import mangoPowder from '../../images/clients/mangoPowder(1).png'
import bananaPowder from '../../images/clients/bananaPowder.jfif'
import chikuPowder from '../../images/clients/chikuPowder.jfif'
const images = [
  mangoPowder,
 bananaPowder,
  chikuPowder,
];

// const images = [
//   "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2070", // Example Banana Powder
//   "https://images.unsplash.com/photo-1532307527974-9843239b5622?auto=format&fit=crop&q=80&w=2070", // Example Mango
//   "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&q=80&w=2070"  // Example Fruit
// ];

export default function BannerCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-full lg:h-full overflow-hidden bg-gray-50 rounded-2xl shadow-2xl">
      {/* Background Images with subtle zoom effect */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            active === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
          } transition-transform duration-[6000ms]`}
        >
          <img
            src={img}
            alt="Freeze dried ingredients"
            className="w-full h-full object-cover filter brightness-[0.85]"
          />
        </div>
      ))}

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent lg:from-black/70" />
      
      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
        <div className="max-w-2xl text-white">
          
          {/* Subtle Label */}
          <span className="inline-block mt-[10%] py-1 px-3 mb-4 text-xs font-bold tracking-widest uppercase bg-yellow-500 text-black rounded">
            Premium B2B Supply
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
            Pure Ingredients, <br /> 
            <span className="italic text-yellow-400">Scalable</span> Solutions.
          </h1>

          <p className="text-lg md:text-md text-gray-200 mb-8 max-w-lg leading-relaxed font-light">
            Premium freeze-dried powders and slices engineered for global food brands, nutraceuticals, and clean-label snacks.
          </p>

          <div className="flex flex-wrap text-sm gap-4">
            <button className="px-6 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg">
              Get Free Samples
            </button>

            <button className="px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg transition-all">
              Bulk Catalog
            </button>
          </div>

          {/* Value Props Bar (Small & Professional) */}
          <div className="mt-12 mb-[5%] flex items-center gap-8 border-t border-white/20 pt-8">
            <div className="flex flex-col">
              <span className="text-yellow-400 font-bold text-xl">100%</span>
              <span className="text-xs uppercase tracking-wider text-gray-300">Natural</span>
            </div>
            <div className="h-8 w-[1px] bg-white/20" />
            <div className="flex flex-col">
              <span className="text-yellow-400 font-bold text-xl">GFSI</span>
              <span className="text-xs uppercase tracking-wider text-gray-300">Certified</span>
            </div>
            <div className="h-8 w-[1px] bg-white/20" />
            <div className="flex flex-col">
              <span className="text-yellow-400 font-bold text-xl">24/7</span>
              <span className="text-xs uppercase tracking-wider text-gray-300">Logistics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}