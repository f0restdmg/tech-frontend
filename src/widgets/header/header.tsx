"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { mainMenu } from "@/widgets/header/navbar/config";
import { Logo } from "@/shared/ui/logo";
import { Navbar } from "./navbar";
import styles from "./header.module.css";

export const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className={clsx(styles.header)}>
      <div className={clsx(styles.header__inner, "container")}>
        <Logo className={styles.header__logo} />
        <Navbar />
        <div className={styles.header__actions}></div>
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
            <div className={styles["styles.header__actions--mobile"]}></div>
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
          </div>
        </div>
      </div>
    </header>
  );
};
