

import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import PRODUCT_CATEGORIES from '../../data/productsListData';
const ProductsMenu = () => {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef(null);

  // Clear timeout to prevent closing
  const handleOpen = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpen(true);
  };

  // Start timer to close
  const handleClose = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 300); // 300ms is usually enough for a smooth user experience
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      {/* Trigger */}
      <span
        className={`
          relative text-[0.9rem] font-semibold cursor-pointer py-4
          after:absolute after:left-0 after:-bottom-1
          after:h-[2px] after:w-0 after:bg-black
          after:transition-all after:duration-300
          hover:after:w-full hover:text-orange-600
          ${open ? "text-orange-600 after:w-full" : "text-black"}
        `}
      >
        Products
      </span>

      {/* 
         BRIDGE: This invisible div fills the gap between the nav link 
         and the drawer so the mouse never technically "leaves" the area.
      */}
      {open && (
        <div 
          className="absolute h-10 w-full top-full bg-transparent" 
          onMouseEnter={handleOpen}
        />
      )}

      {/* Drawer */}
      <div
        onMouseEnter={handleOpen} // IMPORTANT: Keeps it open when hovering the drawer
        onMouseLeave={handleClose} // IMPORTANT: Starts closing timer when leaving the drawer
        className={`
          fixed left-0 right-0 top-[64px] bg-white border-t shadow-[0_20px_40px_rgba(0,0,0,0.08)]
          z-50 transition-all duration-300 ease-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}
        `}
      >
        <div className="flex justify-center">
          <div className="max-w-7xl mx-auto px-10 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {PRODUCT_CATEGORIES.map((cat) => {
                const visibleItems = cat.items.slice(0, 10);
                const hasMore = cat.items.length > 10;

                return (
                  <div key={cat.title}>
                    <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                      {cat.title}
                    </h4>
                    <ul className="space-y-2">
                      {visibleItems.map((item) => (
                        <li key={item.slug}>
                          <NavLink
                            to={`/products/${item.slug}-powder`}
                            className="text-sm text-gray-700 hover:text-orange-600 transition"
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                      {hasMore && (
                        <li>
                          <NavLink
                            to={cat.route}
                            className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
                            onClick={() => setOpen(false)}
                          >
                            View More →
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsMenu;