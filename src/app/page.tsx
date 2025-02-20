import { Container } from "@mantine/core";

export default function Home() {
  return (
    <Container size="lg">
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
