import { routerConfig } from "@/shared/lib/routerConfig";

interface MenuItem {
  key: string;
  link: string;
}

export const footerMenu: MenuItem[] = [
  {
    key: "cpus",
    link: routerConfig.CPUS,
  },
  {
    key: "gpus",
    link: routerConfig.GPUS,
  },
  {
    key: "about",
    link: routerConfig.ABOUT,
  },
];
