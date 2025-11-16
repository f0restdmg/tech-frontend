import { ProductPreview } from "@/entities/products";

export interface ProductListProps {
  title: string;
  items: ProductPreview[];
  className?: string;
}
