import { Hero } from "@/widgets/hero";
import { ProductList } from "@/entities/products";
import { fallbackPopularProcessors } from "@/shared/config/fallbacks";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ProductList
        title="Популярные процессоры"
        items={fallbackPopularProcessors}
      />
    </main>
  );
}
