import pineapple1 from '../images/clients/pineapplepdt1.png'
import pineapple2 from '../images/clients/pineapplepdt2.png'

const pineapplePowder = {
  slug: "freeze-dried-pineapple-powder",
  name: "Freeze Dried Pineapple Powder",
  category: "Powders & Blends",

  shortDescription: "Freeze-Dried Pineapple Powder is made from fresh, juicy pineapples that are carefully freeze-dried to preserve their tropical sweetness, tangy flavor, bright yellow color, and nutrient profile. The gentle process locks in vitamins, minerals, and antioxidants while removing only moisture, resulting in a fine, free-flowing powder. It is 100% natural, with no added sugar, preservatives, or artificial colors, making it ideal for smoothies, beverages, desserts, bakery items, sauces, confectionery, and nutraceutical formulations.",

  longDescription: "Freeze-Dried Pineapple Powder is made from fresh, juicy pineapples that are carefully freeze-dried to preserve their tropical sweetness, tangy flavor, bright yellow color, and nutrient profile. The gentle process locks in vitamins, minerals, and antioxidants while removing only moisture, resulting in a fine, free-flowing powder. It is 100% natural, with no added sugar, preservatives, or artificial colors, making it ideal for smoothies, beverages, desserts, bakery items, sauces, confectionery, and nutraceutical formulations. Specifications: Botanical name: Ananas comosus",

  images: {
    gallery: [pineapple1, pineapple2],
  },

  specifications: [
    { label: "Botanical Name", value: "Ananas comosus" },
    { label: "Botanical name", value: "Ananas comosus" },
    { label: "Appearance", value: "Free-flowing, fine powder," },
    { label: "Color", value: "Light yellow to golden yellow (natural variation possible)" },
    { label: "Flavor & Aroma", value: "Characteristic sweet-tangy pineapple taste & aroma, no off-odor" },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Bulk Density", value: "0.3 – 0.6 g/ml" },
    { label: "Particle Size", value: "80–120 mesh (customizable)" },
    { label: "Application & Uses", value: "" }
  ],

  applications: [
    "Beverages - Smoothies, cocktails, mocktails, flavored water, instant drink mixes, energy drinks.",
    "Bakery & Confectionery - Cakes, cookies, muffins, pastries, candies, fillings, and chocolates.",
    "Dairy & Frozen Desserts - Ice creams, yogurts, kulfis, puddings, custards, cheesecakes.",
    "Breakfast & Snacks - Granola, cereals, protein bars, trail mixes.",
    "Culinary Uses - Sauces, glazes, marinades, chutneys, salad dressings, seasoning blends.",
    "Nutraceuticals - Health powders, meal replacements, vitamin-enriched mixes.",
    "Baby Food - Natural fruit sweetness, easy-to-digest tropical flavor.",
    "Ready-to-Eat Foods - Instant mixes, flavored rice, or dehydrated meals.",
    "More Info",
    "Pkg Size",
    "Shelf Life: 12 months (in sealed, moisture-proof packaging)",
    "Packaging Material",
    "HSN Code",
    "Manufacturing Process",
    "Raw Material Selection",
    "Washing & Cleaning: Wash pineapples thoroughly with clean potable water. Sanitize with chlorinated water (50"
  ],

  packaging: {
    packSizes: "2kgs & 5 kgs".split(","),
    shelfLife: "12 months (in sealed, moisture-proof packaging)",
    material: "Zipper Pouch (Food Grade)",
    hsnCode: "08134020",
  },

  manufacturingProcess: [
    {
      step: "Raw Material Selection",
      description: "Select ripe, sweet, and firm pineapples with good flavor and aroma. Avoid overripe, bruised, or fermented fruits."
    },
    {
      step: "Washing & Cleaning",
      description: "Wash pineapples thoroughly with clean potable water. Sanitize with chlorinated water (50–100 ppm) to reduce microbial load. Peeling & Cutting"
    }
  ],
};

export default pineapplePowder;