import jackFruit1 from '../images/clients/jackfruitpdt1.png'
import jackFruit2 from '../images/clients/jackfruitpdt1.png'
const jackfruitPowder = {
  slug: "freeze-dried-jackfruit-powder",
  name: "Freeze Dried Jackfruit Powder",

  category: "Powders & Blends",

  shortDescription:
    "Freeze-dried jackfruit powder made from ripe jackfruit bulbs, offering natural sweetness, rich aroma, and clean-label versatility.",

  longDescription:
    "Freeze-Dried Jackfruit Powder is produced from fresh, ripe jackfruits that are gently freeze-dried to preserve their natural sweetness, flavor, color, and nutrients. The process removes moisture while retaining the fruit’s original aroma and taste, resulting in a fine, free-flowing powder. It is 100% natural, without added sugar, preservatives, or artificial colors, making it suitable for food, beverage, nutraceutical, and ready-to-eat applications.",

  images: {
    gallery: [
      jackFruit1,jackFruit2
    ],
  },

  specifications: [
    { label: "Botanical Name", value: "Artocarpus heterophyllus" },
    { label: "Appearance", value: "Free-flowing, fine powder" },
    {
      label: "Color",
      value: "Light yellow to pale golden (natural variation possible)",
    },
    {
      label: "Flavor & Aroma",
      value:
        "Characteristic sweet jackfruit flavor and aroma, no off-odor",
    },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Bulk Density", value: "0.3 – 0.6 g/ml" },
    { label: "Particle Size", value: "80–120 mesh (customizable)" },
  ],

  applications: [
    "Beverages",
    "Bakery & Confectionery",
    "Dairy & Frozen Desserts",
    "Breakfast & Snacks",
    "Culinary Uses",
    "Nutraceuticals",
    "Baby Food",
    "Ready-to-Eat Foods",
  ],

  packaging: {
    packSizes: ["2 kg", "5 kg"],
    shelfLife: "12 months",
    material: "Food-grade zipper pouch",
    hsnCode: "08134000",
  },

  manufacturingProcess: [
    {
      step: "Raw Material Selection",
      description:
        "Ripe, sweet jackfruit bulbs with uniform maturity are selected. Overripe, fermented, or damaged fruits are avoided.",
    },
    {
      step: "Cleaning & Preparation",
      description:
        "Jackfruit is washed thoroughly, bulbs are manually separated from the rind, seeds are removed, and fibrous parts are trimmed.",
    },
    {
      step: "Cutting / Slicing",
      description:
        "Jackfruit bulbs are cut into uniform pieces (approximately 1–2 cm) for efficient freezing and drying.",
    },
    {
      step: "Pre-Treatment (Optional)",
      description:
        "Optional dipping in ascorbic acid (0.1–0.3%) or citric acid (0.2–0.5%) solution may be used to prevent enzymatic browning.",
    },
    {
      step: "Freezing",
      description:
        "Jackfruit pieces are rapidly frozen at –35°C to –40°C to preserve cellular structure, flavor, and nutrients.",
    },
    {
      step: "Freeze Drying",
      description:
        "Frozen jackfruit undergoes primary drying under vacuum at –40°C to –50°C followed by secondary drying at 20–40°C to achieve final moisture content of 2–4%.",
    },
    {
      step: "Milling / Grinding",
      description:
        "Freeze-dried jackfruit pieces are ground into fine powder using a hammer mill or pulverizer.",
    },
    {
      step: "Sieving",
      description:
        "Powder is sieved to ensure uniform particle size, typically 80–100 mesh.",
    },
    {
      step: "Blending & Standardization (Optional)",
      description:
        "Powder may be blended to adjust flavor, sweetness, or solubility. Permitted anti-caking agents such as maltodextrin or food-grade starches may be added if required.",
    },
  ],
};

export default jackfruitPowder;
