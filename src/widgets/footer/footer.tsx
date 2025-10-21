import clsx from "clsx";

import { Logo } from "@/shared/ui/logo";

import { FOOTER_LINKS } from "./constants";

import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={clsx(styles.footer, "container")}>
      <Logo width={222} height={35} />
      <ul className={styles.footer__links}>
        {FOOTER_LINKS.map(({ text, link }) => (
          <li key={link}>
            <a className={styles.footer__link} href={link}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
