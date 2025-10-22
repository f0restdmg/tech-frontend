import clsx from "clsx";

import { Icon } from "@/shared/ui/icon";

import { CssDropdownProps } from "./types";

import styles from "./css-dropdown.module.css";

export const CssDropdown = ({ className, label, items }: CssDropdownProps) => {
  return (
    <div className={clsx(styles.dropdown, className)}>
      <button className={styles.dropdown__button} type="button">
        {label}
        <Icon
          className={styles.dropdown__icon}
          section={"common"}
          name="arrow"
        />
      </button>
      <div className={styles.dropdown__overlay}></div>
      <ul className={styles.dropdown__menu}>
        {items.map((item) => (
          <li key={item.href} className={styles.dropdown__item}>
            <a href={item.href} className={styles.dropdown__link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
