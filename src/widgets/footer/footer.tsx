import Link from "next/link";
import { commonTexts } from "@/shared/config/commonTexts";
import { CURRENT_YEAR } from "@/shared/config/date";
import { routerConfig } from "@/shared/lib/routerConfig";
import { Logo } from "@/shared/ui/logo";
import { Menu } from "./menu";
import styles from "./footer.module.css";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("OtherLinks");

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <Logo width={120} height={28.8} />
          <Menu />
          <div />
        </div>
        <div className={styles.footer__links}>
          <span>
            &copy; {commonTexts.PROJECT_NAME}, {CURRENT_YEAR}
          </span>
          <Link className={styles.footer__link} href={routerConfig.PRIVACY}>
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
};
