import Link from "next/link";
import { commonTexts } from "@/shared/config/commonTexts";
import { routerConfig } from "@/shared/lib/routerConfig";
import { Icon } from "@/shared/ui/icon";
import { LogoProps } from "./types";

export const Logo = ({ className, width = 150, height = 36 }: LogoProps) => {
  return (
    <Link
      className={className}
      href={routerConfig.HOME}
      aria-label={commonTexts.PROJECT_NAME}
    >
      <Icon name={"logo"} width={width} height={height} />
    </Link>
  );
};
