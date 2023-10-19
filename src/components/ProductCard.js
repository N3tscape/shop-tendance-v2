export default function ProductCard({ product }) {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>{product.basePrice}</p>
      <p>{product.salePrice}</p>
      <img src={product.imageUrl} alt={product.title} />
    </div>
  );
}
