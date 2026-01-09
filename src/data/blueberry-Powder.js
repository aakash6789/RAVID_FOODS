const blueberryPowder = {
  slug: "freeze-dried-blueberry-powder",
  name: "Freeze Dried Blueberry Powder",

  category: "Powders & Blends",

  shortDescription:
    "Freeze-dried blueberry powder with concentrated natural flavor, vibrant color, and high antioxidant content for clean-label formulations.",

  longDescription:
    "Freeze-Dried Blueberry Powder delivers concentrated natural blueberry flavor, deep blue-purple color, and high antioxidant content. It blends smoothly into dry and liquid applications without adding moisture and maintains excellent color and flavor stability during processing. Its rich phytonutrient profile makes it suitable for functional foods, nutraceuticals, infant foods, and cosmetic applications.",

  images: {
    hero: "/images/blueberry-powder/hero.webp",
    gallery: [
      "/images/blueberry-powder/1.webp",
      "/images/blueberry-powder/2.webp",
      "/images/blueberry-powder/3.webp",
    ],
  },

  specifications: [
    { label: "Botanical Name", value: "Vaccinium corymbosum" },
    { label: "Appearance", value: "Fine, free-flowing powder" },
    { label: "Colour", value: "Deep purple to dark blue" },
    {
      label: "Flavor & Aroma",
      value: "Characteristic blueberry aroma",
    },
    { label: "Particle Size", value: "80–100 mesh (customizable)" },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Bulk Density", value: "0.35 – 0.55 g/ml" },
  ],

  applications: [
    "Beverages & Smoothies",
    "Bakery & Confectionery",
    "Snacks & Cereals",
    "Dairy Products",
    "Dietary Supplements",
    "Superfood Blends",
    "Fortified Foods",
    "Skin Care Products",
    "DIY Herbal Cosmetics",
    "Clean-Label Products",
    "HORECA & Food Service",
  ],

  packaging: {
    packSizes: ["2 kg", "5 kg"],
    shelfLife: "12 months",
    material: "Food-grade zipper pouch",
    hsnCode: "", // Not provided
  },

  manufacturingProcess: [
    {
      step: "Raw Material Selection",
      description:
        "Fresh, fully ripe blueberries with deep blue to purple color are selected. Overripe, damaged, moldy, or shriveled berries are rejected to ensure high anthocyanin content and quality.",
    },
    {
      step: "Washing & Cleaning",
      description:
        "Berries are thoroughly washed with potable water and optionally sanitized using 50–100 ppm chlorinated water. Drained carefully to avoid bruising.",
    },
    {
      step: "Sorting",
      description:
        "Stems, leaves, and damaged or discolored berries are removed. Uniform size and quality are ensured.",
    },
    {
      step: "Pre-Treatment (Optional)",
      description:
        "Optional dipping in a mild ascorbic acid solution may be used to prevent enzymatic browning and preserve natural color.",
    },
    {
      step: "Pre-Freezing",
      description:
        "Berries are spread in a single layer and rapidly frozen at –35°C to –40°C to preserve cell structure, flavor, and anthocyanins.",
    },
    {
      step: "Freeze Drying (Lyophilization)",
      description:
        "Frozen berries undergo primary drying under deep vacuum at –40°C to –50°C followed by secondary drying at 20–40°C to achieve final moisture content of approximately 3–5%.",
    },
    {
      step: "Milling",
      description:
        "Freeze-dried blueberries are ground into a fine powder using low-heat pulverization to protect anthocyanins and vitamin C.",
    },
    {
      step: "Sieving",
      description:
        "Powder is sieved to achieve uniform particle size, typically 80–100 mesh, with optional coarser grades if required.",
    },
  ],
};

export default blueberryPowder;
