import { routerConfig } from "@/shared/config/routerConfig";

export const headerLinks = [
  {
    label: "Процессоры",
    items: [
      { label: "Сравнить процессоры", href: routerConfig.CPU_COMPARE },
      { label: "Рейтинг процессоров", href: routerConfig.CPU_RATING },
      { label: "Рейтинг Intel", href: `${routerConfig.CPU_RATING}/intel` },
      { label: "Рейтинг AMD", href: `${routerConfig.CPU_RATING}/amd` },
    ],
  },
  {
    label: "Видеокарты",
    items: [
      { label: "Сравнить видеокарты", href: routerConfig.GPU_COMPARE },
      { label: "Рейтинг видеокарт", href: routerConfig.GPU_RATING },
      { label: "Рейтинг NVIDIA", href: `${routerConfig.GPU_RATING}/nvidia` },
      { label: "Рейтинг AMD", href: `${routerConfig.GPU_RATING}/amd` },
    ],
  },
];
