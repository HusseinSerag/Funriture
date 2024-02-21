import ProductCard from "../ProductCard/ProductCard";

export default function ProductList({ products }) {
  return (
    <>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </>
  );
}
