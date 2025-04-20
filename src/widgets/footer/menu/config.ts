import { routerConfig } from "@/shared/lib/routerConfig";

interface MenuItem {
  name: string;
  slug: string;
}

export const footerMenu: MenuItem[] = [
  {
    name: "Процессоры",
    slug: routerConfig.HOME,
  },
  {
    name: "Видеокарты",
    slug: routerConfig.HOME,
  },
  {
    name: "О сайте",
    slug: routerConfig.HOME,
  },
];
