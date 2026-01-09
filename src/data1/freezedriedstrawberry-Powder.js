import strawberry1 from '../images/clients/strawberrypdt1.png'
import strawberry2 from '../images/clients/strawberrypdt2.png'

const strawberryPowder = {
  slug: "freeze-dried-strawberry-powder",
  name: "Freeze Dried Strawberry Powder",
  category: "Powders & Blends",

  shortDescription: "Freeze-Dried Strawberry Powder is produced from fresh, ripe strawberries that are gently freeze-dried to retain their natural sweet-tangy flavor, vibrant red color, and nutritional richness. The process removes moisture while preserving vitamins, antioxidants, and aroma, resulting in a fine, free-flowing powder. 100% natural and free from added sugar, preservatives, or artificial colors, it is perfect for use in smoothies, beverages, desserts, bakery products, confectionery, sauces, and health supplements.",

  longDescription: "Freeze-Dried Strawberry Powder is produced from fresh, ripe strawberries that are gently freeze-dried to retain their natural sweet-tangy flavor, vibrant red color, and nutritional richness. The process removes moisture while preserving vitamins, antioxidants, and aroma, resulting in a fine, free-flowing powder. 100% natural and free from added sugar, preservatives, or artificial colors, it is perfect for use in smoothies, beverages, desserts, bakery products, confectionery, sauces, and health supplements. Specifications: Botanical name: Fragaria × ananassa",

  images: {
    gallery: [strawberry1, strawberry2],
  },

  specifications: [
    { label: "Botanical Name", value: "Fragaria × ananassa" },
    { label: "Botanical name", value: "Fragaria × ananassa" },
    { label: "Appearance", value: "Free-flowing, fine powder" },
    { label: "Color", value: "Pink to deep red (natural variation possible)" },
    { label: "Flavor & Aroma", value: "Characteristic sweet-tart strawberry flavor and aroma, no off-odor" },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Bulk Density", value: "0.25 – 0.55 g/ml" },
    { label: "Particle Size", value: "80–120 mesh (customizable)" },
    { label: "Application & Uses", value: "" }
  ],

  applications: [
    "Beverages",
    "Bakery & Confectionery",
    "Dairy & Frozen Desserts",
    "Breakfast & Snacks",
    "Culinary Uses",
    "Nutraceuticals",
    "Baby & Kids’ Food",
    "Ready-to-Eat Foods",
    "More Info",
    "Pkg Size",
    "Shelf Life: 12 months (in sealed, moisture-proof packaging)",
    "Packaging Material",
    "Code",
    "Manufacturing Process",
    "Raw Material Selection: Select ripe, firm, bright red strawberries with uniform size, aroma, and sweetness. Avoid overripe, moldy, or bruised fruits. Washing & Cleaning: Wash strawberries thoroughly with clean potable water. Sanitize with 50"
  ],

  packaging: {
    packSizes: "2kgs & 5 kgs".split(","),
    shelfLife: "12 months (in sealed, moisture-proof packaging)",
    material: "Zipper Pouch (Food Grade)",
    hsnCode: "",
  },

  manufacturingProcess: [
    {
      step: "Raw Material Selection",
      description: "Select ripe, firm, bright red strawberries with uniform size, aroma, and sweetness. Avoid overripe, moldy, or bruised fruits. Washing & Cleaning"
    }
  ],
};

export default strawberryPowder;