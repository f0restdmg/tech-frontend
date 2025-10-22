import clsx from "clsx";

import { CssDropdown } from "@/shared/ui/css-dropdown";
import { Logo } from "@/shared/ui/logo";

import { headerLinks } from "./constants";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={clsx(styles.header, "container")}>
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
    </header>
  );
};
