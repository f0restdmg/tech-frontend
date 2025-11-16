"use client";

import { useState } from "react";
import clsx from "clsx";

import { LanguageSwitcher } from "@/features/language-switcher";
import { CssDropdown } from "@/shared/ui/css-dropdown";
import { Logo } from "@/shared/ui/logo";

import { headerLinks } from "./constants";

import styles from "./header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={clsx(
          styles.header__burger,
          isOpen && styles["header__burger--open"],
        )}
        onClick={toggleMenu}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={styles.header__nav}>
        {headerLinks.map((group) => (
          <CssDropdown
            key={group.label}
            label={group.label}
            items={group.items}
          />
        ))}
      </nav>
      <Logo className={styles.header__logo} width={222} height={35} />
      <div className={styles.header__actions}>
        <LanguageSwitcher />
      </div>
    </header>
  );
};
