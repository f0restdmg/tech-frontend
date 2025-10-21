import clsx from "clsx";

import { routerConfig } from "@/shared/config/routerConfig";
import { PROJECT_NAME } from "@/shared/config/textsConstants";
import { Icon } from "@/shared/ui/icon";

import { LogoProps } from "./types";

import styles from "./logo.module.css";

export const Logo = ({ className, width = 222, height = 35 }: LogoProps) => {
  return (
    <a
      className={clsx(className, styles.logo)}
      href={routerConfig.HOME}
      aria-label={PROJECT_NAME}
    >
      <Icon name={"logo"} width={width} height={height} />
    </a>
  );
};
