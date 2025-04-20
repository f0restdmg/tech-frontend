import { useTranslations } from "next-intl";
import clsx from "clsx";
import styles from "./main.module.css";

export const Main = () => {
  const t = useTranslations("Home");

  return (
    <div className={clsx(styles.main, "container")}>
      <h1>{t("title")}</h1>
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
    </div>
  );
};
