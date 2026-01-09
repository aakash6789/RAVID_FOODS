import { useParams } from "react-router-dom";
// import products from "@/data/products";
// import ProductDetails from "@/components/ProductDetails";
import products from "../data1";
import ProductDetails from "./ProductDetails";
const ProductPage = () => {
  const { slug } = useParams();

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-2xl font-semibold">
          Product not found
        </h1>
      </div>
    );
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;
