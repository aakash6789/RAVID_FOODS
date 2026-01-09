import papaya1 from '../images/clients/papayapdt1.png'
import papaya2 from '../images/clients/papayapdt2.png'

const papayaPowder = {
  slug: "freeze-dried-papaya-powder",
  name: "Freeze Dried Papaya Powder",
  category: "Powders & Blends",

  shortDescription: "Freeze-Dried Papaya Powder is made from fresh, ripe papayas that are carefully freeze-dried to retain their natural sweetness, vibrant orange color, aroma, and nutritional value. The process preserves vitamins, antioxidants, and flavor while removing moisture, resulting in a fine, free-flowing powder. It is 100% natural, without added sugar, preservatives, or artificial colors, and is ideal for smoothies, beverages, desserts, bakery products, sauces, and nutraceutical formulations.",

  longDescription: "Freeze-Dried Papaya Powder is made from fresh, ripe papayas that are carefully freeze-dried to retain their natural sweetness, vibrant orange color, aroma, and nutritional value. The process preserves vitamins, antioxidants, and flavor while removing moisture, resulting in a fine, free-flowing powder. It is 100% natural, without added sugar, preservatives, or artificial colors, and is ideal for smoothies, beverages, desserts, bakery products, sauces, and nutraceutical formulations. Specifications: Botanical name: Carica papaya",

  images: {
    gallery: [papaya1, papaya2],
  },

  specifications: [
    { label: "Botanical Name", value: "Carica papaya" },
    { label: "Botanical name", value: "Carica papaya" },
    { label: "Appearance", value: "Free-flowing, fine powder" },
    { label: "Color", value: "Light orange to deep orange (natural variation possible)" },
    { label: "Flavor & Aroma", value: "Characteristic sweet papaya flavor and aroma, free from off-notes" },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Bulk Density", value: "0.3 – 0.6 g/ml" },
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
    "Baby & Kids’ Foods",
    "Ready-to-Eat Foods",
    "More Info",
    "Pkg Size",
    "Shelf Life: 12 months (in sealed, moisture-proof packaging)",
    "Packaging Material",
    "HSN Code",
    "Manufacturing Process",
    "Raw Material Selection:  Select ripe, firm, and sweet papayas with uniform color and aroma. Avoid overripe, damaged, or diseased fruits. Washing & Cleaning: Wash papayas thoroughly with clean potable water. Sanitize using 50"
  ],

  packaging: {
    packSizes: "2kgs & 5 kgs".split(","),
    shelfLife: "12 months (in sealed, moisture-proof packaging)",
    material: "Zipper Pouch (Food Grade)",
    hsnCode: "08134030",
  },

  manufacturingProcess: [
    {
      step: "Raw Material Selection",
      description: "Select ripe, firm, and sweet papayas with uniform color and aroma. Avoid overripe, damaged, or diseased fruits. Washing & Cleaning"
    }
  ],
};

export default papayaPowder;