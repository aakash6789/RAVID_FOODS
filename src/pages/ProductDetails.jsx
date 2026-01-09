
// import NavBar from "../components/Navbar/NavBar";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { Autoplay } from "swiper/modules";
// const ProductDetails = ({ product }) => {
//   return (
//     <>
//       <NavBar />

//       {/* Offset for fixed navbar */}
//       <div className="pt-28 bg-white">
//         {/* HERO */}
//         <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
//               {product.name}
//             </h1>

//             <p className="mt-4 text-gray-600 leading-relaxed">
//               {product.shortDescription}
//             </p>

//             <div className="mt-6 flex gap-4">
//               <a
//                 href="/contact#contact"
//                 className="px-6 py-3 bg-orange-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-700 transition"
//               >
//                 Enquire Now
//               </a>
//               <a
//                 href="/#products"
//                 className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
//               >
//                 View More Products
//               </a>
//             </div>
//           </div>

//          <div className="w-[40%]">
//   <Swiper
//     modules={[Autoplay]}
//     autoplay={{
//       delay: 3000,          // 3 seconds per image
//       disableOnInteraction: false,
//       pauseOnMouseEnter: true,
//     }}
//     loop={true}
//     speed={800}             // smooth transition
//     className="rounded-2xl shadow-lg overflow-hidden"
//   >
//     {product.images.gallery.map((img, index) => (
//       <SwiperSlide key={index}>
//         <img
//           src={img}
//           alt={`${product.name} image ${index + 1}`}
//           className="w-full h-full object-cover rounded-2xl"
//         />
//       </SwiperSlide>
//     ))}
//   </Swiper>
// </div>
//         </section>

//         {/* OVERVIEW */}
//         <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Product Overview
//           </h2>
//           <p className="mt-4 text-gray-600 leading-relaxed">
//             {product.longDescription}
//           </p>
//         </section>

//         {/* SPECIFICATIONS */}
//         <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Specifications
//           </h2>

//           <div className="mt-6 overflow-x-auto">
//             <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
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

//         {/* APPLICATIONS */}
//         <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Applications
//           </h2>

//           <div className="mt-6 flex flex-wrap gap-3">
//             {product.applications.map((app, index) => (
//               <span
//                 key={index}
//                 className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-full text-gray-700 shadow-sm"
//               >
//                 {app}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* MANUFACTURING PROCESS */}
//         <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Manufacturing Process
//           </h2>

//           <div className="mt-8 space-y-6">
//             {product.manufacturingProcess.map((step, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
//               >
//                 <h3 className="font-semibold text-gray-800">
//                   {index + 1}. {step.step}
//                 </h3>
//                 <p className="mt-2 text-gray-600 text-sm leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* PACKAGING */}
//         <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16 mb-24">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Packaging & Storage
//           </h2>

//           <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-xl shadow-sm border">
//               <p className="text-sm text-gray-500">Pack Sizes</p>
//               <p className="font-semibold text-gray-800 mt-1">
//                 {product.packaging.packSizes.join(", ")}
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-sm border">
//               <p className="text-sm text-gray-500">Shelf Life</p>
//               <p className="font-semibold text-gray-800 mt-1">
//                 {product.packaging.shelfLife}
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-sm border">
//               <p className="text-sm text-gray-500">Packaging Material</p>
//               <p className="font-semibold text-gray-800 mt-1">
//                 {product.packaging.material}
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;
import NavBar from "../components/Navbar/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ProductDetails = ({ product }) => {
  return (
    <>
      <NavBar />

      {/* Offset for fixed navbar */}
      <div className="pt-28 mt-[3%] bg-white ml-[3%] ">

        {/* ================= HERO ================= */}
    <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

  {/* LEFT — IMAGE (CONSTRAINED, NOT STRETCHED) */}
  <div className="w-full max-w-lg">
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      speed={800}
      className="rounded-2xl shadow-lg overflow-hidden"
    >
      {product?.images?.gallery?.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`${product.name} ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* RIGHT — CONTENT */}
  <div className="flex flex-col items-start text-left mt-[5%]">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
      {product.name}
    </h1>

    <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
      {product.longDescription}
    </p>

    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href="/contact#contact"
        className="px-6 py-3 bg-orange-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-700 transition"
      >
        Enquire Now
      </a>

      <a
        href="/#products"
        className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
      >
        View More Products
      </a>
    </div>
  </div>

</section>





        {/* ================= QUICK FACTS ================= */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
           
 

          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        {/* <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
          <h2 className="text-2xl font-semibold text-gray-900">
            Product Overview
          </h2>
          <p className="mt-4 max-w-4xl text-gray-600 leading-relaxed">
            {product.longDescription}
          </p>
        </section> */}

        {/* ================= SPECIFICATIONS ================= */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
          <h2 className="text-2xl font-semibold text-gray-900">
            Specifications
          </h2>

          <div className="mt-6 bg-white border rounded-xl overflow-hidden shadow-sm">
            <table className="min-w-full">
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white even:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 w-1/3">
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
        </section>

        {/* ================= APPLICATIONS ================= */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
          <h2 className="text-2xl font-semibold text-gray-900">
            Applications
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {product.applications.map((app, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm border border-gray-200 rounded-full bg-white text-gray-700 shadow-sm"
              >
                {app}
              </span>
            ))}
          </div>
        </section>

        {/* ================= MANUFACTURING PROCESS ================= */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
          <h2 className="text-2xl font-semibold text-gray-900">
            Manufacturing Process
          </h2>

          <div className="mt-8 space-y-4 max-w-4xl">
            {product.manufacturingProcess.map((step, index) => (
              <div
                key={index}
                className="border rounded-xl px-6 py-4 bg-white shadow-sm"
              >
                <h3 className="font-semibold text-gray-800">
                  {index + 1}. {step.step}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PACKAGING ================= */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20 mb-28">
          <h2 className="text-2xl font-semibold text-gray-900">
            Packaging & Storage
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              label="Pack Sizes"
              value={product.packaging.packSizes.join(", ")}
            />
            <InfoCard
              label="Shelf Life"
              value={product.packaging.shelfLife}
            />
            <InfoCard
              label="Packaging Material"
              value={product.packaging.material}
            />
          </div>
        </section>
      </div>
    </>
  );
};

const InfoCard = ({ label, value }) => (
  <div className="border rounded-xl p-6 bg-white shadow-sm">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="mt-1 font-semibold text-gray-800">{value}</p>
  </div>
);

export default ProductDetails;
