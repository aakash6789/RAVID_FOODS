import spinach1 from '../images/clients/spinachpdt1.png'
import spinach2 from '../images/clients/spinachpdt2.png'

const spinachPowder = {
  slug: "freeze-dried-spinach-powder",
  name: "Freeze Dried Spinach Powder",
  category: "Powders & Blends",

  shortDescription: "Freeze-Dried Spinach Powder is made from fresh, nutrient-rich spinach leaves that are gently freeze-dried and milled into a fine, free-flowing powder. The process preserves the natural green color, earthy flavor, aroma, and nutritional value, including vitamins, minerals, antioxidants, and dietary fiber, while removing only moisture. 100% natural and free from additives, preservatives, or artificial colors, it is ideal for use in soups, sauces, smoothies, health drinks, bakery products, ready-to-eat meals, and nutraceutical formulations.",

  longDescription: "Freeze-Dried Spinach Powder is made from fresh, nutrient-rich spinach leaves that are gently freeze-dried and milled into a fine, free-flowing powder. The process preserves the natural green color, earthy flavor, aroma, and nutritional value, including vitamins, minerals, antioxidants, and dietary fiber, while removing only moisture. 100% natural and free from additives, preservatives, or artificial colors, it is ideal for use in soups, sauces, smoothies, health drinks, bakery products, ready-to-eat meals, and nutraceutical formulations. Specifications: Botanical Name: Spinacia oleracea",

  images: {
    gallery: [spinach1, spinach2],
  },

  specifications: [
    { label: "Botanical Name", value: "Spinacia oleracea" },
    { label: "Botanical Name", value: "Spinacia oleracea" },
    { label: "Appearance", value: "Free-flowing fine powder, free from lumps and foreign matter" },
    { label: "Color", value: "Dark green (depending on leaf maturity and processing)" },
    { label: "Flavor & Aroma", value: "Mild characteristic spinach flavor, no off-odor" },
    { label: "Moisture Content", value: "≤ 5%" },
    { label: "Bulk Density", value: "0.25 – 0.55 g/ml" },
    { label: "pH", value: "6.0 – 6.8" },
    { label: "Water Activity (aw)", value: "≤ 0.3" },
    { label: "Mesh Size", value: "60–100 mesh (customizable)" },
    { label: "Solubility", value: "Disperses well, rehydrates easily in water" },
    { label: "Application & Uses", value: "" }
  ],

  applications: [
    "Soups, Curries & Gravies",
    "Instant & Ready Meals",
    "Snacks & Savories",
    "Bakery & Processed Foods",
    "Smoothies & Health Drinks",
    "Meal Replacements",
    "Dietary Supplements",
    "Functional Foods",
    "Superfood & Vegetable Blends",
    "Clean-Label Products",
    "Fortified Foods",
    "HORECA (Hotels, Restaurants, Catering)",
    "More Info",
    "Pkg Size",
    "Shelf Life: 12 months (in sealed, moisture-proof packaging)",
    "Packaging Material",
    "HSN Code",
    "Manufacturing Process",
    "Raw Material Selection: Select fresh, tender spinach leaves with vibrant green color, Avoid yellowed, wilted, or damaged leaves. Washing & Cleaning: Wash thoroughly with potable water to remove soil, dust, and residues, Sanitize with 50"
  ],

  packaging: {
    packSizes: "2kgs & 5kgs".split(","),
    shelfLife: "12 months (in sealed, moisture-proof packaging)",
    material: "Zipper Pouch (Food Grade)",
    hsnCode: "07129090",
  },

  manufacturingProcess: [
    {
      step: "Raw Material Selection",
      description: "Select fresh, tender spinach leaves with vibrant green color, Avoid yellowed, wilted, or damaged leaves. Washing & Cleaning"
    }
  ],
};

export default spinachPowder;