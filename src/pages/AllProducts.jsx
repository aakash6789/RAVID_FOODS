

import React, { useState, useMemo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import PRODUCT_CATEGORIES from '../data2/productListData'; 
import productsData from '../data2/index.js'; 

const AllProducts = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("All");
    const navigate = useNavigate();

    // 1. Merge the two data sources
    const enrichedData = useMemo(() => {
        return PRODUCT_CATEGORIES.map(category => {
            const itemsWithImages = category.items.map(item => {
                // Find matching product in the detailed products array
                const richInfo = productsData.find(p => 
                    p.slug === item.slug || 
                    p.slug === `${item.slug}-powder` ||
                    p.slug.replace('-powder', '') === item.slug
                );

                // FIXED IMAGE LOGIC: 
                // In your JSON, images are inside the 'data' array (e.g., Cubes or Powder)
                // We find the first available image across all types.
                let firstAvailableImage = null;
                if (richInfo?.data) {
                    const firstTypeWithImage = richInfo.data.find(d => d.images && d.images.length > 0);
                    if (firstTypeWithImage) {
                        firstAvailableImage = firstTypeWithImage.images[0];
                    }
                }

                return {
                    ...item,
                    image: firstAvailableImage, // This is now a string like "Mango-Cubes-pdt1"
                    fullName: richInfo?.name || item.label,
                    finalSlug: richInfo?.slug || item.slug 
                };
            });

            return {
                ...category,
                items: itemsWithImages
            };
        });
    }, []);

    // 2. Extract Category Titles for Tabs
    const tabList = useMemo(() => ["All", ...enrichedData.map(c => c.title)], [enrichedData]);

    // 3. Filter Logic
    const filteredCategories = useMemo(() => {
        return enrichedData.map(category => {
            if (activeTab !== "All" && category.title !== activeTab) {
                return { ...category, items: [] };
            }

            const searchMatches = category.items.filter(item =>
                item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.fullName.toLowerCase().includes(searchTerm.toLowerCase())
            );

            return { ...category, items: searchMatches };
        }).filter(cat => cat.items.length > 0);
    }, [searchTerm, activeTab, enrichedData]);

    return (
        <>
            <NavBar />
            <div className="bg-gray-50 min-h-screen pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center text-orange-600 font-bold hover:text-orange-600 transition-colors mb-8 group"
                    >
                        <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>

                    <div className="text-center mb-12">
                        <h1 className="text-2xl md:text-2xl font-serif font-bold text-orange-600 mb-4 uppercase tracking-tight">
                            Global Ingredient Portfolio
                        </h1>
                        
                        {/* Search Bar */}
                        <div className="relative max-w-xl mx-auto mt-8">
                            <input
                                type="text"
                                placeholder="Search by name..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all text-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-16">
                        {tabList.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                                    activeTab === tab 
                                    ? "bg-orange-400 text-white shadow-lg" 
                                    : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Product Sections */}
                    <div className="space-y-20">
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((cat) => (
                                <div key={cat.title}>
                                    <div className="flex items-center gap-4 mb-10">
                                        <h2 className="text-lg font-bold text-orange-600 uppercase tracking-[0.2em]">
                                            {cat.title}
                                        </h2>
                                        <div className="h-[1px] bg-gray-200 flex-grow"></div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {cat.items.map((item) => {
                                            // DYNAMIC PATH RESOLUTION
                                            // If images are in public/images/clients/
                                            const imageSrc = `/images/clients/${item.image}.png`;

                                            return (
                                                <NavLink
                                                    key={item.slug}
                                                    to={`/products/${item.finalSlug}`}
                                                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full"
                                                >
                                                    {/* Image Container */}
                                                    <div className="w-full aspect-square bg-white p-6 flex items-center justify-center overflow-hidden">
                                                        {item.image ? (
                                                            <img 
                                                                src={imageSrc} 
                                                                alt={item.label}
                                                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                                                onError={(e) => {
                                                                    e.target.style.display = 'none';
                                                                    e.target.nextSibling.style.display = 'flex';
                                                                }}
                                                            />
                                                        ) : null}
                                                        
                                                        {/* Fallback SVG when no image is provided OR image fails to load */}
                                                        <div className={`${item.image ? 'hidden' : 'flex'} flex-col items-center text-gray-300`}>
                                                            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                            <span className="text-[10px] font-bold">Photo Pending</span>
                                                        </div>
                                                    </div>

                                                    <div className="p-6 pt-0 text-center flex flex-col flex-grow">
                                                        <h3 className="text-md font-bold text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
                                                            {item.label}
                                                        </h3>
                                                        <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-bold">
                                                            {cat.title.includes('Fruit') ? '100% Fruit' : 'Pure Ingredient'}
                                                        </p>
                                                        <div className="mt-auto pt-6">
                                                            <span className="text-xs font-bold text-orange-600 border-b border-orange-100 group-hover:border-orange-600 transition-all">
                                                                Detailed Specs →
                                                            </span>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                                <p className="text-gray-400 text-lg">No ingredients found.</p>
                                <button onClick={() => {setSearchTerm(""); setActiveTab("All")}} className="text-orange-600 font-bold mt-2 hover:underline">
                                    View All Products
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllProducts;