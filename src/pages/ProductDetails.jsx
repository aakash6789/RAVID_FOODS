

import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const ProductDetails = ({ product }) => {
  // 1. State to track the selected category (default to first item)
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Safety check
  if (!product || !product.data || product.data.length === 0) {
    return <div className="pt-40 text-center">Loading...</div>;
  }

  // 2. Get the specific data for the selected tab
  const activeData = product.data[activeTabIndex];

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* BACK BUTTON */}
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-orange-600 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 font-bold transition-transform" />
            {/* <span className="font-medium">Back to Products</span> */}
          </button>
        </div>

        {/* ================= HERO SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
          
          {/* LEFT — IMAGE CAROUSEL */}
           <div className="w-full">
    {/* 
      FIX: Fallback logic. 
      If activeData has no images, try to find any images in the product.data array 
    */}
    {(() => {
      const displayImages = (activeData.images && activeData.images.length > 0) 
        ? activeData.images 
        : product.data.find(d => d.images && d.images.length > 0)?.images || [];
      console.log("Displaying images for tab:", activeTabIndex, displayImages);
      if (displayImages.length > 0) {
        return (
          <Swiper
            key={activeTabIndex} // Force refresh on tab change
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            className="rounded-3xl shadow-xl overflow-hidden border border-gray-100"
          >
            {displayImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-square w-full">
                  <img
                    src={`/images/clients/${img}.png`} 
                    alt={activeData.fullName}
                    className="w-full h-full object-cover"
                    // Optional: Error handling if .png doesn't exist
                    onError={(e) => { e.target.src = "/images/placeholder.jpg"; }} 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        );
      }

      // Final fallback if absolutely no images exist in any category
      return (
        <div className="aspect-square md:aspect-[4/3] w-full bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400">
          <p>No Image Available</p>
        </div>
      );
    })()}
  </div>

          {/* RIGHT — CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              {product.name}
            </h1>

            {/* TABS FOR CATEGORIES */}
            <div className="flex flex-wrap gap-2 mt-6 mb-2 border-b border-gray-100">
              {product.data.map((item, index) => (
                <button
                  key={item.type}
                  onClick={() => setActiveTabIndex(index)}
                  className={`pb-3 px-4 text-sm font-bold transition-all relative ${
                    activeTabIndex === index
                      ? "text-orange-600"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {item.type}
                  {activeTabIndex === index && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* <h2 className="text-xl font-bold text-gray-800 mt-6">
                {activeData.fullName}
            </h2> */}
            
            <p className="mt-4 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {activeData.description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 text-sm">
              <a
                href="/contact#contact"
                className="px-8 py-4 bg-orange-600 text-white rounded-xl text-center font-bold hover:bg-orange-700 hover:shadow-lg transition-all active:scale-95"
              >
                Enquire Now
              </a>
              <a
                href="/#products"
                className="px-8 py-4 border border-gray-300 rounded-xl text-center font-bold text-gray-700 hover:bg-gray-50 transition-all"
              >
                View Catalog
              </a>
            </div>
          </div>
        </section>

        {/* ================= SPECIFICATIONS ================= */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-xl font-bold text-gray-900 mb-8">
            Technical Specifications
          </h2>
          <div className="bg-gray-50 rounded-2xl p-2 sm:p-4 border border-gray-100 shadow-sm">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {activeData.specifications &&
                    Object.entries(activeData.specifications).map(([label, value], index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-gray-700 bg-gray-50 w-1/3">
                          {label}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {value}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ================= APPLICATIONS ================= */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-xl font-bold text-gray-900 mb-6">
            Applications
          </h2>
          <div className="flex flex-wrap gap-3">
            {activeData.applications?.map((app, index) => (
              <span
                key={index}
                className="px-6 py-2.5 text-sm font-medium border border-orange-100 rounded-full bg-orange-50 text-orange-700 shadow-sm"
                title={app.description}
              >
                {app.name}
              </span>
            ))}
          </div>
        </section>

        {/* ================= MANUFACTURING PROCESS ================= */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-xl font-bold text-gray-900 mb-8">
            Manufacturing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeData.manufacturingProcess?.map((step, index) => (
              <div
                key={index}
                className="relative pl-14 pr-4 py-4 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="absolute left-4 top-4 flex items-center justify-center w-6 h-6 rounded-full bg-orange-600 text-white font-bold text-xs">
                  {index + 1}
                </span>
                <h3 className="font-bold text-gray-800 text-sm">{step}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PACKAGING ================= */}
        <section className="mt-14">
          <h2 className="text-xl sm:text-xl font-bold text-gray-900 mb-8">
            Packaging & Storage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <InfoCard label="Pack Sizes" value={activeData.moreInfo?.["Pkg Size"]} />
            <InfoCard label="Shelf Life" value={activeData.moreInfo?.["Shelf Life"]} />
            <InfoCard label="Packaging Material" value={activeData.moreInfo?.["Packaging Material"]} />
          </div>
        </section>
      </main>
    </div>
  );
};

const InfoCard = ({ label, value }) => (
  <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50 transition-transform hover:-translate-y-1">
    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{label}</p>
    <p className="mt-2 font-bold text-gray-800 text-sm">{value || "N/A"}</p>
  </div>
);

export default ProductDetails;