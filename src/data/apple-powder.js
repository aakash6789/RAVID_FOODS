const applePowder = {
  slug: "freeze-dried-apple-powder",
  name: "Freeze Dried Apple Powder",

  category: "Powders & Blends",

  shortDescription:
    "Freeze-dried apple powder made from fresh, ripe apples, offering a sweet and tangy flavor with natural nutrition.",

  longDescription:
    "Freeze-Dried Apple Powder is produced from fresh, ripe apples that are gently freeze-dried to preserve their natural flavor, aroma, nutrients, and vibrant color. Rich in dietary fiber, antioxidants, and vitamin C, it provides a clean-label, shelf-stable ingredient suitable for food, beverage, baby food, and nutraceutical applications.",

  images: {
    hero: "/images/apple-powder/hero.webp",
    gallery: [
      "/images/apple-powder/1.webp",
      "/images/apple-powder/2.webp",
      "/images/apple-powder/3.webp",
    ],
  },

  specifications: [
    { label: "Botanical Name", value: "Malus domestica" },
    { label: "Appearance", value: "Fine, free-flowing powder" },
    { label: "Color", value: "Light cream to pale yellow (natural apple shade)" },
    {
      label: "Flavor & Aroma",
      value: "Characteristic sweet apple flavor and aroma, no off-notes",
    },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Mesh Size", value: "60–100 mesh (customizable)" },
    { label: "Bulk Density", value: "0.3 – 0.6 g/ml (approx.)" },
  ],

  applications: [
    "Beverages",
    "Bakery & Confectionery",
    "Dairy & Frozen Desserts",
    "Baby Food & Instant Mixes",
    "Nutraceuticals & Supplements",
    "Culinary Use",
    "Snacks & Cereals",
  ],

  packaging: {
    packSizes: ["2 kg", "5 kg"],
    shelfLife: "12 months",
    material: "Food-grade zipper pouch",
    hsnCode: "08133000",
  },

  manufacturingProcess: [
    {
      step: "Selection & Sorting",
      description:
        "Fresh, ripe apples are carefully selected and sorted to ensure consistent quality.",
    },
    {
      step: "Washing & Peeling",
      description:
        "Apples are thoroughly washed and peeled to remove surface impurities.",
    },
    {
      step: "Cutting & Preparation",
      description:
        "Apples are sliced or diced into uniform pieces for even drying.",
    },
    {
      step: "Freeze Drying (Lyophilization)",
      description:
        "Apple pieces are frozen at very low temperatures and dried under vacuum, allowing ice to sublimate while preserving nutrients, flavor, and color.",
    },
    {
      step: "Grinding / Milling",
      description:
        "Freeze-dried apple pieces are gently milled into a fine powder.",
    },
    {
      step: "Sieving",
      description:
        "The powder is sieved to achieve uniform particle size as required.",
    },
    {
      step: "Packaging",
      description:
        "Final product is packed in airtight, moisture-proof packaging to maintain quality and extend shelf life.",
    },
  ],
};

export default applePowder;
