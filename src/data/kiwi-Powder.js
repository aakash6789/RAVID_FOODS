// import kiwpdt from '../images/clients'
import kiwi1 from "../images/clients/kiwipdt1.png";
import kiwi2 from "../images/clients/kiwipdt2.png";
const kiwiPowder = {
  slug: "freeze-dried-kiwi-powder",
  name: "Freeze Dried Kiwi Powder",

  category: "Powders & Blends",

  shortDescription:
    "Freeze-dried kiwi powder made from fresh, high-quality kiwis, offering natural tangy flavor, vibrant green color, and rich nutritional value.",

  longDescription:
    "Freeze-Dried Kiwi Powder is produced from fresh, high-quality kiwifruits that are gently freeze-dried to retain their natural tangy flavor, vibrant green color, and rich nutrient profile. The process removes only moisture while preserving vitamins, antioxidants, and dietary fiber. The resulting fine, free-flowing powder is 100% natural and free from additives, preservatives, or added sugar, making it suitable for food, beverage, nutraceutical, and functional applications.",

  images: {
    
    gallery: [
   kiwi1,kiwi2
      
    ],
  },

  specifications: [
    { label: "Botanical Name", value: "Actinidia deliciosa" },
    { label: "Appearance", value: "Free-flowing, fine powder" },
    {
      label: "Color",
      value: "Light green to pale yellow-green (natural variation)",
    },
    {
      label: "Flavor & Aroma",
      value:
        "Characteristic sweet-tangy kiwi flavor and aroma, free from off-notes",
    },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Bulk Density", value: "0.3 – 0.6 g/ml" },
    { label: "Particle Size", value: "80–120 mesh (customizable)" },
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
  ],

  packaging: {
    packSizes: ["2 kg", "5 kg"],
    shelfLife: "12 months",
    material: "Food-grade zipper pouch",
    hsnCode: "08134090",
  },

  manufacturingProcess: [
    {
      step: "Raw Material Selection",
      description:
        "Ripe, firm, and uniform kiwifruits are selected. Overripe, damaged, or diseased fruits are rejected.",
    },
    {
      step: "Washing & Cleaning",
      description:
        "Kiwis are thoroughly washed with potable water and sanitized using 50–100 ppm chlorinated water to reduce microbial load.",
    },
    {
      step: "Peeling & Cutting",
      description:
        "Outer fuzzy skin is removed and fruits are cut into small slices or cubes (5–10 mm thick) for uniform freezing and drying.",
    },
    {
      step: "Pre-Treatment (Optional)",
      description:
        "Optional dipping in ascorbic acid (0.1–0.3%) or citric acid (0.2–0.5%) solution may be used to prevent oxidation and preserve bright green color.",
    },
    {
      step: "Freezing",
      description:
        "Kiwi slices are rapidly frozen at –35°C to –40°C to preserve cellular structure, flavor, and nutrients.",
    },
    {
      step: "Freeze Drying",
      description:
        "Frozen kiwi undergoes primary drying under vacuum at –40°C to –50°C followed by secondary drying at 20–40°C to achieve final moisture content of 2–4%.",
    },
    {
      step: "Milling / Grinding",
      description:
        "Freeze-dried kiwi pieces are ground into fine powder using a hammer mill or pulverizer.",
    },
    {
      step: "Sieving",
      description:
        "Powder is sieved to ensure uniform particle size, typically 80–100 mesh.",
    },
    {
      step: "Blending & Standardization (Optional)",
      description:
        "Powder may be blended for consistency. Permitted anti-caking agents such as maltodextrin or food-grade starches may be added if required.",
    },
  ],
};

export default kiwiPowder;
