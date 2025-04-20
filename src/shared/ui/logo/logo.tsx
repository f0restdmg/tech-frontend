import Link from "next/link";
import { LogoProps } from "./types";
import { routerConfig } from "@/shared/lib/routerConfig";
import { Icon } from "@/shared/ui/icon";

export const Logo = ({ className, width = 120, height = 36 }: LogoProps) => {
    return (
        <Link className={className} href={routerConfig.HOME} aria-label="Джун">
            <Icon name={"logo"} width={width} height={height} />
        </Link>
    );
};
