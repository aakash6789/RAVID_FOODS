import React, { useState, useEffect,useRef } from 'react';
import PRODUCT_CATEGORIES from '../../data/productsListData';
// const ProductsMenu = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       {/* Trigger */}
//       <span
//         className="
//           relative text-[0.9rem] font-semibold text-black cursor-pointer
//           after:absolute after:left-0 after:-bottom-1
//           after:h-[2px] after:w-0 after:bg-black
//           after:transition-all after:duration-300
//           hover:after:w-full hover:text-orange-600
//         "
//       >
//         Products
//       </span>

//       <div
//   className={`
//     fixed left-0 right-0 top-[64px] bg-white border-t shadow-[0_20px_40px_rgba(0,0,0,0.08)]
//  bg-white z-40
//     transition-all duration-300 ease-out
//     ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}
//   `}
// >
//   <div className="max-w-7xl mx-auto px-10 py-12">
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//       {PRODUCT_CATEGORIES.map((cat) => (
//         <div key={cat.title}>
//           <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
//             {cat.title}
//           </h4>

//           <ul className="space-y-3">
//             {cat.items.map((item) => (
//               <li
//                 key={item}
//                 className="text-sm text-gray-700 hover:text-orange-600 cursor-pointer transition"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
//     </div>
//   );
// };

const ProductsMenu = () => {
  const [open, setOpen] = useState(false);
    const closeTimeout = useRef(null);
 const handleClose = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 150); // 👈 critical delay
  };
  const handleOpen = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpen(true);
  };
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
    //   onMouseLeave={() => setOpen(false)}
       onMouseLeave={handleClose}
    >
      {/* Trigger */}
      <span
        className="
          relative text-[0.9rem] font-semibold text-black cursor-pointer
          after:absolute after:left-0 after:-bottom-1
          after:h-[2px] after:w-0 after:bg-black
          after:transition-all after:duration-300
          hover:after:w-full hover:text-orange-600
        "
      >
        Products
      </span>

      {/* Drawer */}
      <div
        className={`
          fixed left-0 right-0 top-[64px] bg-white border-t shadow-[0_20px_40px_rgba(0,0,0,0.08)]
 bg-white z-50
          transition-all duration-300 ease-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}
        `}
      >
        <div className="flex justify-center">
        <div className="max-w-7xl mx-auto px-10 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {PRODUCT_CATEGORIES.map((cat) => (
              <div key={cat.title}>
                <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  {cat.title}
                </h4>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-700 hover:text-orange-600 cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};



export default ProductsMenu;