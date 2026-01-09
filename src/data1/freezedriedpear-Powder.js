import pear1 from '../images/clients/pearpdtpdt1.png'
import pear2 from '../images/clients/pearpdt2.png'

const pearPowder = {
  slug: "freeze-dried-pear-powder",
  name: "Freeze Dried Pear Powder",
  category: "Powders & Blends",

  shortDescription: "Freeze-Dried Pear Powder is produced from fresh, ripe pears that are gently freeze-dried to preserve their natural mild sweetness, delicate aroma, and nutritional content. The process locks in vitamins, minerals, and fiber while removing only moisture, resulting in a fine, free-flowing powder. 100% natural and free from added sugar, preservatives, or artificial colors, it is widely used in smoothies, beverages, bakery products, desserts, sauces, and health supplements.",

  longDescription: "Freeze-Dried Pear Powder is produced from fresh, ripe pears that are gently freeze-dried to preserve their natural mild sweetness, delicate aroma, and nutritional content. The process locks in vitamins, minerals, and fiber while removing only moisture, resulting in a fine, free-flowing powder. 100% natural and free from added sugar, preservatives, or artificial colors, it is widely used in smoothies, beverages, bakery products, desserts, sauces, and health supplements. Specifications: Botanical name: Pyrus communis",

  images: {
    gallery: [pear1, pear2],
  },

  specifications: [
    { label: "Botanical Name", value: "Pyrus communis" },
    { label: "Botanical name", value: "Pyrus communis" },
    { label: "Appearance", value: "Light cream to pale yellow powder" },
    { label: "Flavor & Aroma", value: "Characteristic sweet, fruity pear flavor and aroma" },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Particle Size", value: "60–100 mesh (customizable)" },
    { label: "Bulk Density", value: "0.3 – 0.6 g/ml" },
    { label: "Application & Uses", value: "" }
  ],

  applications: [
    "Bakery & Confectionery",
    "Snacks & Cereals",
    "Desserts & Dairy Products",
    "Instant Foods",
    "Smoothies & Shakes",
    "Juices & Cocktails",
    "Nutritional & Detox Drinks",
    "Dietary Supplements",
    "Functional Foods",
    "Herbal & Ayurvedic Formulations",
    "Superfood & Fruit Blends",
    "Fortified Foods",
    "Clean-Label Products",
    "Pet Nutrition",
    "More Info",
    "Pkg Size",
    "Shelf Life: 12 months (in sealed, moisture-proof packaging)",
    "Packaging Material",
    "HSN Code",
    "Manufacturing Process",
    "Raw Material Selection: Choose ripe, firm, and sweet pears of uniform size and maturity. Avoid bruised, overripe, or diseased fruits. Washing & Cleaning: Wash thoroughly with potable water. Use 50"
  ],

  packaging: {
    packSizes: "2kgs & 5 kgs".split(","),
    shelfLife: "12 months (in sealed, moisture-proof packaging)",
    material: "Zipper Pouch (Food Grade)",
    hsnCode: "08134040",
  },

  manufacturingProcess: [
    {
      step: "Raw Material Selection",
      description: "Choose ripe, firm, and sweet pears of uniform size and maturity. Avoid bruised, overripe, or diseased fruits. Washing & Cleaning"
    }
  ],
};

export default pearPowder;