import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { footerMenu } from "./config";
import styles from "./menu.module.css";

export const Menu = () => {
  const t = useTranslations("Menu");
  const locale = useLocale();

  return (
    <nav className={styles.menu}>
      {footerMenu.map((item) => (
        <Link
          className={styles.menu__link}
          key={item.key}
          href={item.link}
          locale={locale}
        >
          {t(item.key)}
        </Link>
      ))}
    </nav>
  );
};
