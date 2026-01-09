import cranberry1 from '../images/clients/cranberrypdt1.png'
// import cranberry2 from '../images/clients/cranberrypdt2.png'

const cranberryPowder = {
  slug: "freeze-dried-cranberry-powder",
  name: "Freeze Dried Cranberry Powder",
  category: "Powders & Blends",

  shortDescription: "Freeze-Dried Cranberry Powder is made from fresh, ripe cranberries that are carefully freeze-dried to preserve their natural tart flavor, deep red color, and nutritional benefits. Rich in antioxidants and vitamins, the powder is finely milled and free-flowing, with no added sugar, preservatives, or artificial colors. 100% natural, it is ideal for smoothies, beverages, desserts, bakery items, sauces, confectionery, and nutraceutical formulations.",

  longDescription: "Freeze-Dried Cranberry Powder is made from fresh, ripe cranberries that are carefully freeze-dried to preserve their natural tart flavor, deep red color, and nutritional benefits. Rich in antioxidants and vitamins, the powder is finely milled and free-flowing, with no added sugar, preservatives, or artificial colors. 100% natural, it is ideal for smoothies, beverages, desserts, bakery items, sauces, confectionery, and nutraceutical formulations. Specifications: Botanical name: Vaccinium macrocarpon",

  images: {
    gallery: [cranberry1],
  },

  specifications: [
    { label: "Botanical Name", value: "Vaccinium macrocarpon" },
    { label: "Botanical name", value: "Vaccinium macrocarpon" },
    { label: "Appearance", value: "Free-flowing, fine powder" },
    { label: "Color", value: "Pink to deep red (natural variation)" },
    { label: "Flavor & Aroma", value: "Characteristic tart-sweet cranberry flavor and aroma, free from off-odor" },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Bulk Density", value: "0.25 – 0.55 g/ml" },
    { label: "Particle Size", value: "80–120 mesh (customizable)" },
    { label: "Application & Uses", value: "" }
  ],

  applications: [
    "Bakery & Confectionery",
    "Snacks & Cereals",
    "Dairy & Desserts",
    "Sauces & Dressings",
    "Smoothies & Shakes",
    "Juices & Cocktails",
    "Functional & Detox Drinks",
    "Flavored Water & Teas",
    "Dietary Supplements",
    "Capsules & Tablets",
    "Functional Foods",
    "Superfood Blends",
    "Fortified Foods",
    "Clean-Label Products",
    "Pet Nutrition",
    "More Info",
    "Pkg Size",
    "Shelf Life: 12 months (in sealed, moisture-proof packaging)",
    "Packaging Material",
    "HSN Code",
    "Manufacturing Process",
    "Raw Material Selection: Select ripe, firm, and bright red cranberries with uniform size and maturity. Avoid underripe (very tart), overripe, or damaged fruits. Washing & Cleaning: Wash cranberries thoroughly with potable water. Sanitize using 50"
  ],

  packaging: {
    packSizes: "2kgs & 5 kgs".split(","),
    shelfLife: "12 months (in sealed, moisture-proof packaging)",
    material: "Zipper Pouch (Food Grade)",
    hsnCode: "08134060",
  },

  manufacturingProcess: [
    {
      step: "Raw Material Selection",
      description: "Select ripe, firm, and bright red cranberries with uniform size and maturity. Avoid underripe (very tart), overripe, or damaged fruits. Washing & Cleaning"
    }
  ],
};

export default cranberryPowder;