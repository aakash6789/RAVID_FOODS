// const PRODUCT_CATEGORIES = [
//   {
//     title: "Freeze-Dried Fruits",
//     items: ["Mango", "Banana", "Strawberry", "Pineapple","Kiwi","Jackfruit","Orange","Raspberry","Chikoo","Amla","Blackberry","BlueBerry","Cranberry","Pear"],
//   },
//   {
//     title: "Freeze-Dried Vegetables",
//     items: ["Onion", "Garlic", "Tomato", "Peas","Carrot","Capsicum","Cauliflower","DrumStick",'FrenchBeans',"Ginger","Redbeat","Spinach","SweetCorn","SweetPotato"],
//   },
//   {
//     title: "Powders & Blends",
//     items: ["Mango Powder", "Banana Powder", "Custom Blends"],
//   },
//   {
//     title: "Applications",
//     items: ["Bakery", "Dairy", "Snacks", "Beverages"],
//   },
// ];

// export default PRODUCT_CATEGORIES;
const PRODUCT_CATEGORIES = [
  {
    title: "Freeze-Dried Fruits",
    route: "/products/freeze-dried-fruits",
    items: [
      "Mango", "Banana", "Strawberry", "Pineapple",
      "Kiwi", "Jackfruit", "Orange", "Raspberry",
      "Chikoo", "Amla", "Blackberry", "BlueBerry",
      "Cranberry", "Pear",
    ],
  },
  {
    title: "Freeze-Dried Vegetables",
    route: "/products/freeze-dried-vegetables",
    items: [
      "Onion", "Garlic", "Tomato", "Peas",
      "Carrot", "Capsicum", "Cauliflower",
      "DrumStick", "FrenchBeans", "Ginger",
      "Redbeat", "Spinach", "SweetCorn", "SweetPotato",
    ],
  },
  {
    title: "Powders & Blends",
    route: "/products/powders",
    items: ["Mango Powder", "Banana Powder", "Custom Blends"],
  },
  {
    title: "Applications",
    route: "/applications",
    items: ["Bakery", "Dairy", "Snacks", "Beverages"],
  },
];
export default PRODUCT_CATEGORIES;