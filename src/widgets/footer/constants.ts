import { routerConfig } from "@/shared/lib/routerConfig";

export const PRODUCT_INFO =
  "Стоимость программного обеспечения рассчитывается индивидуально. Для точного расчета стоимости отправьте заявку.";

export const CONTACTS = [
  { text: "По вопросам:", link: null },
  { text: "hi@refni.ru", link: "mailto:hi@refni.ru" },
  { text: "Tg: e_selivanov92", link: "https://t.me/e_selivanov92" },
];

export const DOCUMENTS = [
  {
    text: "Согласие на обработку персональных данных",
    link: routerConfig.CONSENT_TO_PERSONAL_DATA_PROCESSING,
  },
  {
    text: "Политика обработки персональных данных",
    link: routerConfig.PERSONAL_DATA_PROCESSING_POLICY,
  },
];

export const companyDetails = [
  "ООО Рефни",
  "ИНН: 5041213705",
  "ОГРН: 1225000121411",
];
