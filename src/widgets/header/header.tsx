import clsx from "clsx";
import { Logo } from "@/shared/ui/logo";
import { LanguagePicker } from "@/shared/ui/language-picker";
import { MobileBurger } from "./mobile-burger";
import { Navbar } from "./navbar";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx(styles.header__inner, "container")}>
        <Logo className={styles.header__logo} />
        <Navbar />
        <LanguagePicker className={styles.header__actions} />
        <MobileBurger />
      </div>
    </header>
  );
};
