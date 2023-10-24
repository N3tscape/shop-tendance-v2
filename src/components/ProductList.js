import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "./ProductCard";
import { Spinner, Typography } from "@material-tailwind/react";

export default function ProductList() {
  const products = useSelector((state) => state.productReducer);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  const filteredProducts = categoryName
    ? products.filter((product) => product.categories === categoryName)
    : products;

  return (
    <>
      <Typography variant="h4" color="blue-gray" className="text-center">
        Liste des produits
      </Typography>

      <Typography variant="small" color="gray" className="text-center">
        Nombre de produits : {filteredProducts.length}
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
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
