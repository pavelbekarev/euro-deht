import history__card1 from "~/public/assets/history__card1.jpg";
import history__card2 from "~/public/assets/history__card2.jpg";
import history__card3 from "~/public/assets/history__card3.jpg";
import type { FeatHistory } from "../types";

export const featHistories: FeatHistory[] = [
  {
    id: 1,
    title: "Исправление прикуса",
    boxContent: [
      {
        subtitle: "Диагноз:",
        answer: "Глубокий прикус. Ретрузия резцов. Сужение челюсти.",
      },
      {
        subtitle: "Метод лечения:",
        answer: "Брекет-система Damon. Эластики.",
      },
      {
        subtitle: "Длительность:",
        answer: "14 месяцев.",
      },
    ],
    image: history__card1,
  },
  {
    id: 2,
    title: "Имплантация зубов",
    boxContent: [
      {
        subtitle: "Проблема:",
        answer: "Отсутствие 6-го зуба. Атрофия кости.",
      },
      {
        subtitle: "Решение:",
        answer: "Имплант Straumann. Костная пластика.",
      },
      {
        subtitle: "Результат:",
        answer: "Полное восстановление за 8 месяцев.",
      },
    ],
    image: history__card2,
  },
  {
    id: 3,
    title: "Реставрация улыбки",
    boxContent: [
      {
        subtitle: "Ситуация:",
        answer: "Сколы эмали. Дисколорит фронтальных зубов.",
      },
      {
        subtitle: "Работа:",
        answer: "Виниры E-max. Микропротезирование.",
      },
      {
        subtitle: "Срок:",
        answer: "3 недели.",
      },
    ],
    image: history__card3,
  },
];
