import clsx from "clsx";

import { Logo } from "@/shared/ui/logo";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={clsx(styles.header, "container")}>
      <Logo className={styles.header__logo} width={222} height={35} />
    </header>
  );
};
