const cranberryPowder = {
  slug: "freeze-dried-cranberry-powder",
  name: "Freeze Dried Cranberry Powder",

  category: "Powders & Blends",

  shortDescription:
    "Freeze-dried cranberry powder with natural tart flavor, vibrant red color, and high antioxidant content for clean-label formulations.",

  longDescription:
    "Freeze-Dried Cranberry Powder is produced from fresh, ripe cranberries that are carefully freeze-dried to preserve their natural tart flavor, deep red color, and nutritional benefits. The powder is finely milled, free-flowing, and contains no added sugar, preservatives, or artificial colors, making it suitable for food, beverage, nutraceutical, and wellness applications.",

  images: {
    hero: "/images/cranberry-powder/hero.webp",
    gallery: [
      "/images/cranberry-powder/1.webp",
      "/images/cranberry-powder/2.webp",
      "/images/cranberry-powder/3.webp",
    ],
  },

  specifications: [
    { label: "Botanical Name", value: "Vaccinium macrocarpon" },
    { label: "Appearance", value: "Free-flowing, fine powder" },
    { label: "Color", value: "Pink to deep red (natural variation)" },
    {
      label: "Flavor & Aroma",
      value:
        "Characteristic tart-sweet cranberry flavor and aroma, free from off-odor",
    },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Bulk Density", value: "0.25 – 0.55 g/ml" },
    { label: "Particle Size", value: "80–120 mesh (customizable)" },
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
  ],

  packaging: {
    packSizes: ["2 kg", "5 kg"],
    shelfLife: "12 months",
    material: "Food-grade zipper pouch",
    hsnCode: "08134060",
  },

  manufacturingProcess: [
    {
      step: "Raw Material Selection",
      description:
        "Ripe, firm, bright red cranberries of uniform size and maturity are selected. Underripe, overripe, or damaged fruits are rejected.",
    },
    {
      step: "Washing & Cleaning",
      description:
        "Cranberries are thoroughly washed with potable water and sanitized using 50–100 ppm chlorinated water to reduce microbial load.",
    },
    {
      step: "Sorting & Cutting (Optional)",
      description:
        "Stems, leaves, and defective berries are removed. Cranberries may be used whole or halved/lightly crushed to improve drying efficiency.",
    },
    {
      step: "Pre-Treatment (Optional)",
      description:
        "Optional dipping in ascorbic acid (0.1–0.3%) or citric acid solution (0.2–0.5%) for 2–3 minutes helps preserve bright red color and reduce enzymatic browning.",
    },
    {
      step: "Freezing",
      description:
        "Cranberries are rapidly frozen at –35°C to –40°C to protect cell structure, color, nutrients, and flavor.",
    },
    {
      step: "Freeze Drying",
      description:
        "Frozen cranberries undergo primary drying under vacuum at –40°C to –50°C followed by secondary drying at 20–40°C to achieve final moisture content of 2–4%.",
    },
    {
      step: "Milling / Grinding",
      description:
        "Freeze-dried cranberries are ground into fine powder using a hammer mill or pulverizer and sieved to 80–120 mesh.",
    },
    {
      step: "Blending & Standardization (Optional)",
      description:
        "Optional addition of carriers such as maltodextrin may be used to reduce stickiness and improve flowability while ensuring uniform flavor and color.",
    },
  ],
};

export default cranberryPowder;
