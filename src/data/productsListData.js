
// const PRODUCT_CATEGORIES = [

//   {
//     title: "Freeze-Dried Fruits",
//     route: "/products/freeze-dried-fruits",
//     items: [
//       "Mango", "Banana", "Strawberry", "Pineapple",
//       "Kiwi", "Jackfruit", "Orange", "Raspberry",
//       "Chikoo", "Amla", "Blackberry", "BlueBerry",
//       "Cranberry", "Pear",
//     ],
//   },
//   {
//     title: "Freeze-Dried Vegetables",
//     route: "/products/freeze-dried-vegetables",
//     items: [
//       "Onion", "Garlic", "Tomato", "Peas",
//       "Carrot", "Capsicum", "Cauliflower",
//       "DrumStick", "FrenchBeans", "Ginger",
//       "Redbeat", "Spinach", "SweetCorn", "SweetPotato",
//     ],
//   },
//   {
//     title: "Powders & Blends",
//     route: "/products/powders",
//     items: ["Mango Powder", "Banana Powder", "Custom Blends"],
//   },
//   {
//     title: "Applications",
//     route: "/applications",
//     items: ["Bakery", "Dairy", "Snacks", "Beverages"],
//   },
// ];
// export default PRODUCT_CATEGORIES;


const PRODUCT_CATEGORIES = [
  /* ---------------- FRUITS ---------------- */
  {
    title: "Freeze-Dried Fruits",
    route: "/products/freeze-dried-fruits",
    type: "product",
    items: [
      { label: "Mango", slug: "freeze-dried-mango" },
      { label: "Banana", slug: "freeze-dried-banana" },
      { label: "Strawberry", slug: "freeze-dried-strawberry" },
      { label: "Pineapple", slug: "freeze-dried-pineapple" },
      { label: "Kiwi", slug: "freeze-dried-kiwi" },
      { label: "Jackfruit", slug: "freeze-dried-jackfruit" },
      { label: "Orange", slug: "freeze-dried-orange" },
      { label: "Raspberry", slug: "freeze-dried-raspberry" },
      { label: "Chikoo", slug: "freeze-dried-chikoo" },
      { label: "Amla", slug: "freeze-dried-avla" },
      { label: "Blackberry", slug: "freeze-dried-blackberry" },
      { label: "Blueberry", slug: "freeze-dried-blueberry" },
      { label: "Cranberry", slug: "freeze-dried-cranberry" },
      { label: "Pear", slug: "freeze-dried-pear" },
    ],
  },

  /* ---------------- VEGETABLES ---------------- */
  {
    title: "Freeze-Dried Vegetables",
    route: "/products/freeze-dried-vegetables",
    type: "product",
    items: [
      { label: "Onion", slug: "freeze-dried-onion" },
      { label: "Garlic", slug: "freeze-dried-garlic" },
      { label: "Tomato", slug: "freeze-dried-tomato" },
      { label: "Green Peas", slug: "freeze-dried-green-peas" },
      { label: "Carrot", slug: "freeze-dried-carrot" },
      { label: "Capsicum", slug: "freeze-dried-capsicum" },
      { label: "Cauliflower", slug: "freeze-dried-cauliflower" },
      { label: "Drumstick", slug: "freeze-dried-drumstick" },
      { label: "French Beans", slug: "freeze-dried-french-beans" },
      { label: "Ginger", slug: "freeze-dried-ginger" },
      { label: "Red Beet", slug: "freeze-dried-redbeet" },
      { label: "Spinach", slug: "freeze-dried-spinach" },
      { label: "Sweet Corn", slug: "freeze-dried-sweetcorn" },
      { label: "Sweet Potato", slug: "freeze-dried-sweetpotato" },
    ],
  },

  /* ---------------- POWDERS ---------------- */
  {
    title: "Powders & Blends",
    route: "/products/powders",
    type: "product",
    items: [
      { label: "Mango Powder", slug: "freeze-dried-mango-powder" },
      { label: "Banana Powder", slug: "freeze-dried-banana-powder" },
      { label: "Custom Blends", slug: "custom-blends" },
    ],
  },

  /* ---------------- APPLICATIONS ---------------- */
  {
    title: "Applications",
    route: "/applications",
    type: "application",
    items: [
      { label: "Bakery", slug: "bakery" },
      { label: "Dairy", slug: "dairy" },
      { label: "Snacks", slug: "snacks" },
      { label: "Beverages", slug: "beverages" },
    ],
  },
];

export default PRODUCT_CATEGORIES;
