const chikooPowder = {
  slug: "freeze-dried-chikoo-powder",
  name: "Freeze Dried Chikoo Powder (Sapota / Sapodilla)",

  category: "Powders & Blends",

  shortDescription:
    "Freeze-dried chikoo powder made from ripe sapota fruit, offering natural sweetness and a caramel-like flavor in a shelf-stable form.",

  longDescription:
    "Freeze-Dried Chikoo Powder is produced from fresh, ripe chikoo (sapota) fruit using freeze-drying technology to preserve its natural flavor, aroma, color, and nutrients. The powder retains the fruit’s characteristic sweetness and caramel-like taste and is free from added sugar, preservatives, or artificial colors, making it a wholesome and clean-label ingredient.",

  images: {
    hero: "/images/chikoo-powder/hero.webp",
    gallery: [
      "/images/chikoo-powder/1.webp",
      "/images/chikoo-powder/2.webp",
      "/images/chikoo-powder/3.webp",
    ],
  },

  specifications: [
    { label: "Botanical Name", value: "Manilkara zapota" },
    { label: "Appearance", value: "Fine, free-flowing powder" },
    { label: "Color", value: "Light brown to tan (natural chikoo shade)" },
    {
      label: "Flavor & Aroma",
      value: "Sweet, characteristic chikoo flavor and aroma, no off-notes",
    },
    {
      label: "Raw Material",
      value: "100% ripe chikoo (sapota) fruit, no additives unless specified",
    },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Mesh Size", value: "60–100 mesh (customizable)" },
    { label: "Bulk Density", value: "0.3 – 0.6 g/ml (approx.)" },
  ],

  applications: [
    "Snacking",
    "Beverages",
    "Bakery",
    "Cereals & Granola",
    "Dairy & Desserts",
    "Confectionery",
    "Baby Food",
    "Nutraceuticals",
  ],

  packaging: {
    packSizes: ["2 kg", "5 kg"],
    shelfLife: "12 months",
    material: "Food-grade zipper pouch",
    hsnCode: "08135000",
  },

  manufacturingProcess: [
    {
      step: "Selection & Sorting",
      description:
        "Fresh, ripe chikoos (sapotas) are selected to ensure uniform ripeness and consistent quality.",
    },
    {
      step: "Washing & Peeling",
      description:
        "Fruits are thoroughly washed, peeled, and deseeded to remove impurities and inedible parts.",
    },
    {
      step: "Cutting & Preparation",
      description:
        "Chikoo pulp is cut into small, uniform pieces for efficient and even processing.",
    },
    {
      step: "Freezing",
      description:
        "Prepared chikoo pieces are rapidly frozen at very low temperatures to lock in natural sweetness, flavor, and nutrients.",
    },
    {
      step: "Freeze Drying (Lyophilization)",
      description:
        "Frozen pieces are dried under vacuum where moisture sublimates directly from solid to vapor, preserving color, taste, and nutrition.",
    },
    {
      step: "Milling / Grinding",
      description:
        "Freeze-dried chikoo pieces are gently ground into a fine powder.",
    },
    {
      step: "Sieving",
      description:
        "Powder is sieved to maintain uniform mesh size and consistent quality.",
    },
    {
      step: "Packaging",
      description:
        "Final powder is packed in airtight, food-grade, moisture-proof packaging to ensure long shelf life and product stability.",
    },
  ],
};

export default chikooPowder;
