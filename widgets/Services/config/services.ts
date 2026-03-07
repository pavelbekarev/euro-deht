import card1 from "~/public/assets/card1.jpg";
import card2 from "~/public/assets/card2.jpg";
import card3 from "~/public/assets/card3.jpg";
import card4 from "~/public/assets/card4.jpg";
import card5 from "~/public/assets/card5.jpg";
import card6 from "~/public/assets/card6.jpg";
import card7 from "~/public/assets/card7.jpg";
import card8 from "~/public/assets/card8.jpg";
import card9 from "~/public/assets/card9.jpg";
import card10 from "~/public/assets/card10.jpg";
import type { Service } from "~/entities/Service";

export const services: Service[] = [
  {
    id: 1,
    title: "Лечение зубов",
    price: 7500,
    img: "assets/card1.jpg",
  },
  {
    id: 2,
    title: "Консультация стоматолога",
    price: 1080,
    img: "assets/card2.jpg",
  },
  {
    id: 3,
    title: "Консультация ортодонта",
    price: 1200,
    img: "assets/card3.jpg",
  },
  {
    id: 4,
    title: "Удаление зубов",
    price: 2100,
    img: "assets/card4.jpg",
  },
  {
    id: 5,
    title: "Имплатнация",
    price: 5900,
    img: "assets/card5.jpg",
  },
  {
    id: 6,
    title: "Детская стоматология",
    price: 1080,
    img: "assets/card6.jpg",
  },
  {
    id: 7,
    title: "Протезирование",
    price: 16810,
    img: "assets/card7.jpg",
  },
  {
    id: 8,
    title: "Отбеливание зубов",
    price: 12235,
    img: "assets/card8.jpg",
  },
  {
    id: 9,
    title: "Гигиена и профилактика",
    price: 5900,
    img: "assets/card9.jpg",
  },
  {
    id: 10,
    title: "Протезирование на 4 имплантах",
    price: 22000,
    img: "assets/card10.jpg",
    description: "В рассрочку на 12 месяцев",
  },
];
