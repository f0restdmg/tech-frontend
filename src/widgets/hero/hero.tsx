import clsx from "clsx";

import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "./constants";
import { HeroProps } from "./types";

import styles from "./hero.module.css";

export const Hero = ({ title, className }: HeroProps) => {
  return (
    <div className={clsx(styles.hero, "container", className)}>
      <h1 className={styles.hero__title}>{title ?? DEFAULT_TITLE}</h1>
      <p className={styles.hero__description}>{DEFAULT_DESCRIPTION}</p>
    </div>
  );
};
