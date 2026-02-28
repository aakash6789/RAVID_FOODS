

// import React, { useState, useRef } from 'react';
// import { NavLink } from 'react-router-dom';

// const NavDropdown = ({ title, data, baseUrl }) => {
//   const [open, setOpen] = useState(false);
//   const closeTimeout = useRef(null);

//   const handleOpen = () => {
//     if (closeTimeout.current) clearTimeout(closeTimeout.current);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     closeTimeout.current = setTimeout(() => {
//       setOpen(false);
//     }, 300);
//   };

//   return (
//     <div className="relative" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
//       <span
//         className={`
//           relative text-[0.9rem] font-semibold font-inter cursor-pointer py-4
//           after:absolute after:left-0 after:-bottom-1
//           after:h-[2px] after:w-0 after:bg-black
//           after:transition-all after:duration-300
//           hover:after:w-full hover:text-orange-600
//           ${open ? "text-orange-600 after:w-full" : "text-black"}
//         `}
//       >
//         {title}
//       </span>

//       {open && (
//         <div className="absolute h-10 w-full top-full bg-transparent" />
//       )}

//       <div
//         onMouseEnter={handleOpen}
//         onMouseLeave={handleClose}
//         className={`
//           fixed left-0 right-0 top-[64px] bg-white border-t shadow-[0_20px_40px_rgba(0,0,0,0.08)]
//           z-50 transition-all duration-300 ease-out
//           ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}
//         `}
//       >
//         <div className="max-w-7xl mx-auto px-10 py-12">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
//             {data.map((cat, idx) => {
//               // --- Logic for View More ---
//               const itemsToShow = 8;
//               const hasMore = cat.items && cat.items.length > itemsToShow;
//               const visibleItems = cat.items ? cat.items.slice(0, itemsToShow) : [];
//               // ---------------------------

//               return (
//                 <div key={idx} className="group">
//                   <h4 className="text-[13px] font-bold text-gray-900 mb-4 uppercase tracking-wider border-l-2 border-orange-500 pl-3 group-hover:text-black transition-colors">
//                     {cat.title}
//                   </h4>
                  
//                   <ul className="space-y-2 pl-3">
//                     {visibleItems.map((item) => (
//                       <li key={item.slug}>
//                         <NavLink
//                           to={`${baseUrl}/${item.slug}`}
//                           className="text-sm text-gray-600 hover:text-orange-600 transition"
//                           onClick={() => setOpen(false)}
//                         >
//                           {item.label}
//                         </NavLink>
//                       </li>
//                     ))}
                    
//                     {/* View More Link */}
//                     {hasMore && (
//                       <li className="pt-1">
//                         <NavLink
//                           to={baseUrl}
//                           className="text-sm font-bold text-orange-600 hover:text-orange-700 transition flex items-center gap-1"
//                           onClick={() => setOpen(false)}
//                         >
//                           View More <span className="text-lg">→</span>
//                         </NavLink>
//                       </li>
//                     )}
//                   </ul>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavDropdown;

import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const NavDropdown = ({ title, data, baseUrl }) => {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef(null);

  const handleOpen = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleClose = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  return (
    <div className="relative" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <span className={`
          relative text-[0.9rem] font-semibold font-inter cursor-pointer py-4
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black
          after:transition-all after:duration-300 hover:after:w-full hover:text-orange-600
          ${open ? "text-orange-600 after:w-full" : "text-black"}
      `}>
        {title}
      </span>

      {open && <div className="absolute h-10 w-full top-full bg-transparent" />}

      <div className={`
          fixed left-0 right-0 top-[64px] bg-white border-t shadow-[0_20px_40px_rgba(0,0,0,0.08)]
          z-50 transition-all duration-300 ease-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}
      `}>
        <div className="max-w-7xl mx-auto px-10 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
            {data.map((cat, idx) => (
              <div key={idx} className="group">
                {/* CATEGORY TITLE - NOW CLICKABLE */}
                <NavLink
                  to={`${baseUrl}/${cat.slug}`}
                  onClick={() => setOpen(false)}
                  className="inline-block text-[13px] font-bold text-gray-900 mb-4 uppercase tracking-wider border-l-2 border-orange-500 pl-3 hover:text-orange-600 transition-colors"
                >
                  {cat.title}
                </NavLink>

                {/* SUB-ITEMS (Used by Products) */}
                {cat.items && cat.items.length > 0 && (
                  <ul className="space-y-2 pl-3">
                    {cat.items.slice(0, 8).map((item) => (
                      <li key={item.slug}>
                        <NavLink
                          to={`/products/${item.slug}`}
                          className="text-sm text-gray-600 hover:text-orange-600 transition"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;