import Link from "next/link";
import { footerMenu } from "./config";
import styles from "./menu.module.css";

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      {footerMenu.map((item) => (
        <Link className={styles.menu__link} href={item.slug} key={item.name}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
