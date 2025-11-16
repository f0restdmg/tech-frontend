import { PreviewCard } from "@/entities/products";

import { ProductListProps } from "./types";

import styles from "./product-list.module.css";

export const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div className={styles.list}>
      <h2 className={styles.list__title}>{title}</h2>
      <div className={styles.list__inner}>
        {items.map((item) => (
          <PreviewCard
            key={item.id}
            name={item.name}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
