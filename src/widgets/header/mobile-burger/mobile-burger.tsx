"use client";

import { useState } from "react";
import Link from "next/link";
import { mainMenu } from "@/widgets/header/navbar/config";
import styles from "./mobile-burger.module.css";

export const MobileBurger = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
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
    </>
  );
};
