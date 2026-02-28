
import React from 'react';
import { Link } from 'react-router-dom';
import FreezeDriedVegetables from '../images/clients/CabbageGreen-pow-pdt1.png'
import FreezeDriedFruit from '../images/clients/banana-pow-pdt1.png'
import FreezeDriedHerbs from '../images/clients/Curry-Leaves-pdt1.png'
import RTE from '../images/clients/Curries & Gravies.png'
const products = [
    {
        id: 1,
        title: "Freeze-Dried Vegetables",
        description: "Premium selection of corn, peas, and bell peppers. Ideal for instant soups, snack mixes, and industrial food processing.",
        features: ["100% Purity", "1-Year Shelf Life", "Quick Rehydration"],
        image: FreezeDriedVegetables
    },
    {
        id: 2,
        title: "Freeze-Dried Fruits",
        description: "Crispy slices and powders of mango, strawberry, and banana. Perfect for breakfast cereals and confectionery.",
        features: ["Nutrient Dense","Enjoy anytime",  "Vibrant Color"],
        image: FreezeDriedFruit
    },
    {
        id: 3,
        title: "Freeze-Dried Herbs",
        description: "Concentrated spice blends and herbs that retain their essential oils and aromatic profiles through cold-processing.",
        features: ["Aroma Retention", "Zero Fillers", "Instant use"],
        image: FreezeDriedHerbs
    },
    {
        id: 4,
        title: "Ready-to-Eat Foods",
        description: "Gourmet meal solutions that require only hot water. Scalable options for institutional catering and travel retail.",
        features: ["Clean Label", "Lightweight", "Chef-Crafted"],
        image: RTE
    }
];

const Portfolio = () => {
    return (
        <section className="bg-gray-50 py-20" id='portfolio'>
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-3xl font-serif font-bold text-gray-900 uppercase tracking-tight">
                        Our Product Categories
                    </h2>
                    <div className='flex justify-center mt-4'>
                        <div className='w-24 border-b-4 border-orange-500'></div>
                    </div>
                    <p className="mt-6 text-gray-800 max-w-2xl mx-auto text-sm">
                        Pure ingredients engineered for nutritional integrity and excellent outcome.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((item) => (
                        <div 
                            key={item.id} 
                            className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                            data-aos="fade-up"
                        >
                            {/* Image Container */}
                            <div className="h-64 overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h4 className="text-lg font-bold text-gray-800 mb-3 font-serif">
                                    {item.title}
                                </h4>
                                
                                <p className="text-gray-800 text-xs leading-relaxed mb-4 flex-grow">
                                    {item.description}
                                </p>

                                {/* Feature Tags */}
                                <div className="space-y-2 mb-6">
                                    {item.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-xs font-semibold text-gray-800">
                                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link 
                                    to="/products" 
                                    className="block text-sm text-center py-3 px-0 bg-gray-900 text-white font-bold rounded-lg hover:bg-orange-500 transition-colors duration-300"
                                >
                                    View more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <Link to="/contact" className="text-orange-600 font-bold text-sm hover:underline">
                        Need a custom formulation? Talk to our R&D team →
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;