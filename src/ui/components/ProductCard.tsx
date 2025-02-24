import { Product } from "@/entities/Product";

type Props = { product: Product };

export const ProductCard = ({ product }: Props) => (
  <div>
    <h3>{product.name}</h3>
    <p>{product.price} грн</p>
  </div>
);
