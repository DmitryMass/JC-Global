import { about, goals, team } from './svgStore';

export const leftBarMenu = [
  {
    id: '1',
    link: '/about',
    title: 'Мы',
    src: `${about}`,
  },
  {
    id: '2',
    link: '/goals',
    title: 'Цели',
    src: `${goals}`,
  },
  {
    id: '3',
    link: '/employees',
    title: 'Команда',
    src: `${team}`,
  },
];
