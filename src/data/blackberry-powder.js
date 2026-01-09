const blackberryPowder = {
  slug: "freeze-dried-blackberry-powder",
  name: "Freeze Dried Blackberry Powder",

  category: "Powders & Blends",

  shortDescription:
    "Freeze-dried blackberry powder with intense berry flavor, deep natural color, and high antioxidant content for premium formulations.",

  longDescription:
    "Freeze-Dried Blackberry Powder delivers an intense berry flavor, deep natural purple-black color, and high polyphenol content. It disperses easily in dry and liquid applications without adding moisture and offers excellent color and aroma stability. Its antioxidant-rich profile makes it ideal for functional foods, nutraceuticals, gourmet applications, and cosmetic formulations.",

  images: {
    hero: "/images/blackberry-powder/hero.webp",
    gallery: [
      "/images/blackberry-powder/1.webp",
      "/images/blackberry-powder/2.webp",
      "/images/blackberry-powder/3.webp",
    ],
  },

  specifications: [
    { label: "Botanical Name", value: "Rubus fruticosus" },
    { label: "Appearance", value: "Fine, free-flowing powder" },
    { label: "Colour", value: "Dark purple to almost black" },
    {
      label: "Flavor & Aroma",
      value: "Characteristic fresh blackberry aroma",
    },
    { label: "Taste", value: "Sweet-tart, natural fruity flavor" },
    { label: "Particle Size", value: "80–100 mesh (customizable)" },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "pH (1% Solution)", value: "3.0 – 4.0" },
    { label: "Bulk Density", value: "0.35 – 0.55 g/ml" },
  ],

  applications: [
    "Bakery & Confectionery",
    "Snacks & Cereals",
    "Dairy & Desserts",
    "Nutraceuticals & Functional Foods",
    "Gourmet, Culinary & Mixology",
    "Cosmetics & Personal Care",
    "Retail, FMCG & Home Use",
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
        "Fully ripe, fresh blackberries with deep purple-black color are selected. Damaged, moldy, or overripe berries are rejected to ensure high anthocyanin content and quality.",
    },
    {
      step: "Washing & Cleaning",
      description:
        "Berries are gently rinsed with potable water and optionally sanitized using 50–100 ppm chlorinated water. Drained carefully to avoid damage.",
    },
    {
      step: "Sorting",
      description:
        "Stalks, leaves, poorly colored, or damaged berries are removed to ensure uniformity.",
    },
    {
      step: "Pulping (Optional)",
      description:
        "For smooth powder, berries may be pulped and passed through a fine mesh to remove seeds. Alternatively, whole berries may be retained for freeze drying.",
    },
    {
      step: "Pre-Treatment (Optional)",
      description:
        "Optional ascorbic acid dip may be applied to retain bright color and reduce oxidation. No additives are typically used to maintain clean-label status.",
    },
    {
      step: "Pre-Freezing",
      description:
        "Whole berries or puree are spread in a single layer and rapidly frozen at –35°C to –40°C to preserve structure, flavor, and anthocyanins.",
    },
    {
      step: "Freeze Drying (Lyophilization)",
      description:
        "Frozen material undergoes primary drying under deep vacuum at –40°C to –50°C followed by secondary drying at 20–40°C to achieve final moisture of 2–4%.",
    },
    {
      step: "Milling (Pulverization)",
      description:
        "Freeze-dried berries are ground using low-temperature milling to protect anthocyanins and color integrity.",
    },
    {
      step: "Sieving",
      description:
        "Powder is sieved through 60–100 mesh depending on application, producing food-grade or cosmetic-grade particle sizes.",
    },
  ],
};

export default blackberryPowder;
