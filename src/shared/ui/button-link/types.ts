import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    href?: string;
    className?: string;
    ariaLabel?: string;
    disabled?: boolean;
}
