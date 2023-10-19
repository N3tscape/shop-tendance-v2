import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = useSelector((state) => state.productReducer);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  return (
    <div>
      <h1>Liste des produits</h1>
      {loading ? (
        <p>Chargement en cours...</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
}
