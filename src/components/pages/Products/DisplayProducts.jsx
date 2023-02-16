import { useShoppingCart } from "../../context/ShoppingCartContext";
import ProductCard from "./ProductCard";

export default function DisplayProducts() {
  const { bestSeller } = useShoppingCart();
  const ProductsFilter = bestSeller?.slice(3, 7);
  return <ProductCard Products={ProductsFilter} />;
}
