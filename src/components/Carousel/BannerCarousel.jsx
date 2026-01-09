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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full  h-[65vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden bg-white">
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Freeze dried food ingredient"
        //   className={`
        //     absolute inset-0 w-full  h-full object-cover
        //     transition-opacity duration-1000 ease-in-out
        //     ${active === index ? "opacity-100" : "opacity-0"}
        //   `}
        className={`
  absolute inset-0 w-full h-full object-cover
  transition-opacity duration-1000 ease-in-out
  ${active === index ? "opacity-100" : "opacity-0"}
  filter brightness-[0.92] saturate-[0.85]
`}

        />
      ))}

      {/* Soft professional overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-transparent" />
      {/* <div className="absolute inset-0 bg-gradient-to-l from-white/55 via-white/60 to-transparent" /> */}
{/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" /> */}
{/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)]" /> */}
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-4xl ml-auto px-2">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-3xl font-semibold text-black leading-tight">
              Freeze-Dried Ingredients for Scalable Food Brands
            </h1>

            {/* <p className="mt-5 text-base sm:text-lg text-gray-400">
              Preserving flavor, color, and nutrition through precision
              freeze-drying for B2B applications.
            </p> */}

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-gray-900 text-white rounded-md text-[0.8rem]  hover:bg-gray-800 transition">
                Request Samples
              </button>

              <button className="px-4 py-2 border border-gray-300 text-gray-800 rounded-md text-sm  hover:bg-gray-100 transition">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      {/* <div className="absolute top-0 left-0 right-0 h-0 bg-gradient-to-t from-transparent to-white" /> */}
    </section>
  );
}
