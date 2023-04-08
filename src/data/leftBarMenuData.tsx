import { about, goals, team } from './svgStore';

export const leftBarMenu = [
  {
    id: '1',
    link: '/about',
    title: 'Ми',
    src: `${about}`,
  },
  {
    id: '2',
    link: '/employees',
    title: 'Команда',
    src: `${team}`,
  },
  {
    id: '3',
    link: '/goals',
    title: 'Цілі',
    src: `${goals}`,
  },
];
