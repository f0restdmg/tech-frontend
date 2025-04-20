"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { mainMenu } from "@/widgets/header/navbar/config";
import { Logo } from "@/shared/ui/logo";
import { ButtonLink } from "@/shared/ui/button-link";
import { Socials } from "@/shared/ui/socials";
import { Navbar } from "./navbar";
import { DEMO_BUTTON, LOGIN_BUTTON } from "./constants";
import styles from "./header.module.css";

export const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const isCalculatorPage = pathname?.startsWith("/calculator");

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header
      className={clsx(
        styles.header,
        isCalculatorPage && styles["header__purple"],
      )}
    >
      <div className={clsx(styles.header__inner, "container")}>
        <Logo className={styles.header__logo} />
        <Navbar />
        <div className={styles.header__actions}>
          <ButtonLink
            className={styles.header__login}
            href={LOGIN_BUTTON.HREF}
            ariaLabel={LOGIN_BUTTON.ARIA_LABEL}
          >
            {LOGIN_BUTTON.TEXT}
          </ButtonLink>
          <ButtonLink
            className={styles.header__demo}
            href={DEMO_BUTTON.HREF}
            ariaLabel={DEMO_BUTTON.ARIA_LABEL}
          >
            {DEMO_BUTTON.TEXT}
          </ButtonLink>
        </div>
        <button
          className={`${styles.header__burger} ${isDrawerOpen ? styles["header__burger--open"] : ""}`}
          aria-label="Открыть меню"
          onClick={toggleDrawer}
        >
          <span className={styles.header__line}></span>
          <span className={styles.header__line}></span>
          <span className={styles.header__line}></span>
        </button>
        <div
          className={`${styles.header__drawer} ${isDrawerOpen ? styles["header__drawer--open"] : ""}`}
        >
          <div className={styles.header__mobile} onClick={toggleDrawer}>
            <div className={styles["styles.header__actions--mobile"]}>
              <ButtonLink
                className={styles.header__login}
                href={LOGIN_BUTTON.HREF}
                ariaLabel={LOGIN_BUTTON.ARIA_LABEL}
              >
                {LOGIN_BUTTON.TEXT}
              </ButtonLink>
              <ButtonLink
                className={styles.header__demo}
                href={DEMO_BUTTON.HREF}
                ariaLabel={DEMO_BUTTON.ARIA_LABEL}
              >
                {DEMO_BUTTON.TEXT}
              </ButtonLink>
            </div>
            <ul className={styles["header__mobile-menu"]}>
              {mainMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    className={styles["header__mobile-menu--link"]}
                    href={item.link}
                    prefetch={false}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};
