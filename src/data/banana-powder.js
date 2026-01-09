const bananaPowder = {
  slug: "freeze-dried-banana-powder-robusta",
  name: "Freeze Dried Banana Powder (Robusta)",

  category: "Powders & Blends",

  shortDescription:
    "Freeze-dried banana powder made from ripe Robusta bananas, offering natural sweetness, creamy texture, and high nutritional value.",

  longDescription:
    "Freeze-Dried Banana Powder is produced from ripe Robusta bananas that are carefully freeze-dried to preserve their natural flavor, aroma, and nutrients. With a sweet taste and creamy texture, it is rich in potassium, dietary fiber, and essential vitamins, making it ideal for food, beverage, and nutraceutical applications.",

  images: {
    hero: "/images/banana-powder/hero.webp",
    gallery: [
      "/images/banana-powder/1.webp",
      "/images/banana-powder/2.webp",
      "/images/banana-powder/3.webp",
    ],
  },

  specifications: [
    { label: "Botanical Name", value: "Musa paradisiaca" },
    { label: "Appearance", value: "Fine, free-flowing powder" },
    { label: "Color", value: "Light cream to pale yellow (natural banana shade)" },
    {
      label: "Flavor & Aroma",
      value: "Characteristic sweet banana flavor and aroma, no off-notes",
    },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Mesh Size", value: "60–100 mesh (customizable)" },
    { label: "Bulk Density", value: "0.3 – 0.6 g/ml (approx.)" },
  ],

  applications: [
    "Snacking",
    "Bakery",
    "Beverages",
    "Cereals & Granola",
    "Dairy & Desserts",
    "Confectionery",
    "Baby & Kids Food",
    "Nutraceuticals",
  ],

  packaging: {
    packSizes: ["2 kg", "5 kg"],
    shelfLife: "12 months",
    material: "Food-grade zipper pouch",
    hsnCode: "08134000",
  },

  manufacturingProcess: [
    {
      step: "Selection & Sorting",
      description:
        "Fresh, ripe Robusta bananas are selected and sorted to ensure uniform quality.",
    },
    {
      step: "Washing & Peeling",
      description:
        "Bananas are thoroughly washed and carefully peeled to remove the outer skin.",
    },
    {
      step: "Cutting & Slicing",
      description:
        "Peeled bananas are sliced into uniform pieces for even drying.",
    },
    {
      step: "Freezing",
      description:
        "Banana slices are rapidly frozen at very low temperatures to lock in nutrients and flavor.",
    },
    {
      step: "Freeze Drying (Lyophilization)",
      description:
        "Frozen slices are placed in a vacuum chamber where moisture is removed by sublimation while preserving taste, aroma, and nutrition.",
    },
    {
      step: "Milling / Grinding",
      description:
        "Freeze-dried banana pieces are gently ground into a fine powder.",
    },
    {
      step: "Sieving",
      description:
        "The powder is sieved to achieve uniform particle size as per requirement.",
    },
    {
      step: "Packaging",
      description:
        "The final powder is packed in airtight, moisture-proof packaging to retain freshness and extend shelf life.",
    },
  ],
};

export default bananaPowder;
