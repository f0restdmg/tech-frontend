import { ProductPreview } from "@/entities/products";

export interface PreviewCardProps extends Omit<ProductPreview, "id"> {
  className?: string;
}
