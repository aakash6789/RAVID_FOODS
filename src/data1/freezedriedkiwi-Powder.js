import kiwi1 from '../images/clients/kiwipdt1.png'
import kiwi2 from '../images/clients/kiwipdt2.png'

const kiwiPowder = {
  slug: "freeze-dried-kiwi-powder",
  name: "Freeze Dried Kiwi Powder",
  category: "Powders & Blends",

  shortDescription: "Freeze-Dried Kiwi Powder is produced from fresh, high-quality kiwis that are gently freeze-dried to retain their natural tangy flavor, vibrant green color, and rich nutrient profile. The process locks in vitamins, antioxidants, and dietary fiber while removing only the moisture, resulting in a fine, easy-to-use powder. It is 100% natural, free from additives, preservatives, or added sugar, and is ideal for smoothies, beverages, desserts, bakery products, sauces, and health supplements.",

  longDescription: "Freeze-Dried Kiwi Powder is produced from fresh, high-quality kiwis that are gently freeze-dried to retain their natural tangy flavor, vibrant green color, and rich nutrient profile. The process locks in vitamins, antioxidants, and dietary fiber while removing only the moisture, resulting in a fine, easy-to-use powder. It is 100% natural, free from additives, preservatives, or added sugar, and is ideal for smoothies, beverages, desserts, bakery products, sauces, and health supplements. Specifications: Botanical name: Actinidia deliciosa",

  images: {
    gallery: [kiwi1, kiwi2],
  },

  specifications: [
    { label: "Botanical Name", value: "Actinidia deliciosa" },
    { label: "Botanical name", value: "Actinidia deliciosa" },
    { label: "Appearance", value: "Free-flowing, fine powder" },
    { label: "Color", value: "Light green to pale yellow-green (natural variation)" },
    { label: "Flavor & Aroma", value: "Characteristic sweet-tangy kiwi flavor and aroma, free from off-notes" },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Bulk Density", value: "0.3 – 0.6 g/ml" },
    { label: "Particle Size", value: "80–120 mesh (customizable)" },
    { label: "Application & Uses", value: "" }
  ],

  applications: [
    "Bakery & Confectionery",
    "Snacks & Savories",
    "Instant Foods",
    "Smoothies & Shakes",
    "Juices & Cocktails",
    "Health & Detox Drinks",
    "Ice Teas & Flavored Waters",
    "Dietary Supplements",
    "Functional Foods",
    "Ayurvedic & Herbal Formulations",
    "Superfood Blends",
    "Fortified Foods",
    "Clean-Label Products",
    "Premium Pet Nutrition",
    "More Info",
    "Pkg Size",
    "Shelf Life: 12 months (in sealed, moisture-proof packaging)",
    "Packaging Material",
    "HSN Code",
    "Manufacturing Process",
    "Raw Material Selection: Choose ripe, firm, and uniform kiwifruits. Avoid overripe, damaged, or diseased fruits. Washing & Cleaning: Wash thoroughly with potable water. Sanitization with 50"
  ],

  packaging: {
    packSizes: "2kgs & 5 kgs".split(","),
    shelfLife: "12 months (in sealed, moisture-proof packaging)",
    material: "Zipper Pouch (Food Grade)",
    hsnCode: "08134090",
  },

  manufacturingProcess: [
    {
      step: "Raw Material Selection",
      description: "Choose ripe, firm, and uniform kiwifruits. Avoid overripe, damaged, or diseased fruits. Washing & Cleaning"
    }
  ],
};

export default kiwiPowder;