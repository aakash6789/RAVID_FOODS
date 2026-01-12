
// import NavBar from "../components/Navbar/NavBar";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const ProductDetails = ({ product }) => {
//   return (
//     <>
//       <NavBar />

//       {/* Offset for fixed navbar */}
//       <div className="pt-28 mt-[3%] bg-white ml-[3%] ">

//         {/* ================= HERO ================= */}
//     <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

//   {/* LEFT — IMAGE (CONSTRAINED, NOT STRETCHED) */}
//   <div className="w-full max-w-lg">
//     <Swiper
//       modules={[Autoplay]}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//         pauseOnMouseEnter: true,
//       }}
//       loop
//       speed={800}
//       className="rounded-2xl shadow-lg overflow-hidden"
//     >
//       {product?.images?.gallery?.map((img, index) => (
//         <SwiperSlide key={index}>
//           <img
//             src={img}
//             alt={`${product.name} ${index + 1}`}
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   </div>

//   {/* RIGHT — CONTENT */}
//   <div className="flex flex-col items-start text-left mt-[5%]">
//     <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
//       {product.name}
//     </h1>

//     <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
//       {product.longDescription}
//     </p>

//     <div className="mt-8 flex flex-wrap gap-4">
//       <a
//         href="/contact#contact"
//         className="px-6 py-3 bg-orange-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-700 transition"
//       >
//         Enquire Now
//       </a>

//       <a
//         href="/#products"
//         className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
//       >
//         View More Products
//       </a>
//     </div>
//   </div>

// </section>





//         {/* ================= QUICK FACTS ================= */}
//         <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
           
 

//           </div>
//         </section>

//         {/* ================= OVERVIEW ================= */}
    

//         {/* ================= SPECIFICATIONS ================= */}
//         <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Specifications
//           </h2>

//           <div className="mt-6 bg-white border rounded-xl overflow-hidden shadow-sm">
//             <table className="min-w-full">
//               <tbody>
//                 {product.specifications.map((spec, index) => (
//                   <tr
//                     key={index}
//                     className="odd:bg-white even:bg-gray-50"
//                   >
//                     <td className="px-6 py-4 text-sm font-medium text-gray-700 w-1/3">
//                       {spec.label}
//                     </td>
//                     <td className="px-6 py-4 text-sm text-gray-600">
//                       {spec.value}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* ================= APPLICATIONS ================= */}
//         <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Applications
//           </h2>

//           <div className="mt-6 flex flex-wrap gap-3">
//             {product.applications.map((app, index) => (
//               <span
//                 key={index}
//                 className="px-4 py-2 text-sm border border-gray-200 rounded-full bg-white text-gray-700 shadow-sm"
//               >
//                 {app}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* ================= MANUFACTURING PROCESS ================= */}
//         <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Manufacturing Process
//           </h2>

//           <div className="mt-8 space-y-4 max-w-4xl">
//             {product.manufacturingProcess.map((step, index) => (
//               <div
//                 key={index}
//                 className="border rounded-xl px-6 py-4 bg-white shadow-sm"
//               >
//                 <h3 className="font-semibold text-gray-800">
//                   {index + 1}. {step.step}
//                 </h3>
//                 <p className="mt-2 text-sm text-gray-600 leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ================= PACKAGING ================= */}
//         <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20 mb-28">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Packaging & Storage
//           </h2>

//           <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <InfoCard
//               label="Pack Sizes"
//               value={product.packaging.packSizes.join(", ")}
//             />
//             <InfoCard
//               label="Shelf Life"
//               value={product.packaging.shelfLife}
//             />
//             <InfoCard
//               label="Packaging Material"
//               value={product.packaging.material}
//             />
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// const InfoCard = ({ label, value }) => (
//   <div className="border rounded-xl p-6 bg-white shadow-sm">
//     <p className="text-sm text-gray-500">{label}</p>
//     <p className="mt-1 font-semibold text-gray-800">{value}</p>
//   </div>
// );

// export default ProductDetails;

import NavBar from "../components/Navbar/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowLeft } from "lucide-react"; // Assuming you use lucide-react, or use a standard SVG
import "swiper/css";
import "swiper/css/pagination";

const ProductDetails = ({ product }) => {
  // Safety check if product isn't loaded yet
  if (!product) return <div className="pt-40 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        
        {/* --- BACK BUTTON --- */}
        <div className="mb-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-orange-600 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Products</span>
          </button>
        </div>

        {/* ================= HERO SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
          
          {/* LEFT — IMAGE CAROUSEL */}
          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop
              className="rounded-3xl shadow-xl overflow-hidden border border-gray-100"
            >
              {product?.images?.gallery?.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-square md:aspect-[4/3] w-full">
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              {product.name}
            </h1>
            
            <div className="w-20 h-1.5 bg-orange-500 mt-4 rounded-full"></div>

            <p className="mt-8 text-md text-gray-600 leading-relaxed">
              {product.longDescription}
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
        <section className="mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Technical Specifications
          </h2>

          <div className="bg-gray-50 rounded-2xl p-2 sm:p-4 border border-gray-100 shadow-sm">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {product?.specifications?.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-700 bg-gray-50 w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ================= APPLICATIONS ================= */}
        <section className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Applications
          </h2>
          <div className="flex flex-wrap gap-3">
            {product?.applications?.map((app, index) => (
              <span
                key={index}
                className="px-5 py-2.5 text-sm font-medium border border-orange-100 rounded-full bg-orange-50 text-orange-700 shadow-sm"
              >
                {app}
              </span>
            ))}
          </div>
        </section>

        {/* ================= MANUFACTURING PROCESS ================= */}
        <section className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Manufacturing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product?.manufacturingProcess?.map((step, index) => (
              <div
                key={index}
                className="relative pl-14 pr-6 py-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="absolute left-4 top-6 flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white font-bold text-sm">
                  {index + 1}
                </span>
                <h3 className="font-bold text-gray-800 text-lg">
                  {step.step}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PACKAGING ================= */}
        <section className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Packaging & Storage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <InfoCard
              label="Pack Sizes"
              value={product?.packaging?.packSizes?.join(", ")}
            />
            <InfoCard
              label="Shelf Life"
              value={product?.packaging?.shelfLife}
            />
            <InfoCard
              label="Packaging Material"
              value={product?.packaging?.material}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

// Reusable Info Card Component
const InfoCard = ({ label, value }) => (
  <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50 transition-transform hover:-translate-y-1">
    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{label}</p>
    <p className="mt-2 font-bold text-gray-800 text-lg">{value || "N/A"}</p>
  </div>
);

export default ProductDetails;