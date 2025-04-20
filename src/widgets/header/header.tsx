import clsx from "clsx";
import { Logo } from "@/shared/ui/logo";
import { MobileBurger } from "./mobile-burger";
import { Navbar } from "./navbar";
import styles from "./header.module.css";
import { LanguagePicker } from "@/shared/ui/language-picker";

export const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx(styles.header__inner, "container")}>
        <Logo className={styles.header__logo} />
        <Navbar />
        <LanguagePicker />
        <MobileBurger />
      </div>
    </header>
  );
};
