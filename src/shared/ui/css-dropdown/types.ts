import { ReactNode } from "react";

export interface CssDropdownProps {
  label: ReactNode;
  items: CssDropdownItem[];
  className?: string;
}

export interface CssDropdownItem {
  label: ReactNode;
  href: string;
}
