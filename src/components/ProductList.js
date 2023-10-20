import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Spinner, Typography } from "@material-tailwind/react";

export default function ProductList() {
  const products = useSelector((state) => state.productReducer);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  return (
    <div className="container mx-auto my-8">
      <Typography variant="h4" color="blue-gray" className="text-center">
        Liste des produits
      </Typography>
      {loading ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-blue-gray-700 opacity-50 flex flex-col items-center justify-center">
          <Spinner className="h-12 w-12 mb-4" />
          <Typography variant="h3" color="white">
            Chargement...
          </Typography>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
