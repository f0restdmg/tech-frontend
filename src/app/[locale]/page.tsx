import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@mantine/core";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <Container size="lg">
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <ul>
        <li>
          h1 - Блок выбора сравнений видеокарт, процессоров как у -
          https://technical.city/en
        </li>
        <li>
          Опционально - Только с дизайном, рекламный блок топ распродаж как у -
          https://cpu.userbenchmark.com/
        </li>
        <li>Топ 10 процессоров новых последних выпущенных</li>
        <li>Топ 10 процессоров по просмотрам</li>
        <li>Топ 10 видеокарт новых последних выпущенных</li>
        <li>Топ 10 видеокарт по просмотрам</li>
        <li>Топ 10 стравнений по популярности</li>
      </ul>
    </Container>
  );
}
