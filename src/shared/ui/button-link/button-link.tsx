import Link from "next/link";
import clsx from "clsx";
import { ButtonLinkProps } from "./types";
import styles from "./button-link.module.css";

export const ButtonLink = ({
  children,
  href,
  className,
  onClick,
  ariaLabel,
  disabled = false,
  ...props
}: ButtonLinkProps) => {
  return href ? (
    <Link
      href={href}
      prefetch={false}
      className={clsx(styles["button-link"], className)}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  ) : (
    <button
      className={clsx(styles["button-link"], className)}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
