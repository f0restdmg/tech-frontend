import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { mainMenu } from "./config";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {mainMenu.map((item, index) => (
          <li key={index}>
            <Link
              className={styles.navbar__link}
              href={item.link}
              locale={locale}
              prefetch={false}
            >
              {t(item.key)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
