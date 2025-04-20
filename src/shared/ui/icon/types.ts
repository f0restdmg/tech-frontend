import { SVGProps } from "react";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
    name: string;
    section?: string;
}
