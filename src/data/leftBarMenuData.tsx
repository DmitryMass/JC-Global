import { done } from './svgStore';
import { about, admin, goals, mainPage, team } from './svgStore';

export const leftBarMenu = [
  {
    id: '1',
    link: '/about',
    title: 'Ми',
    src: `${about}`,
  },
  {
    id: '2',
    link: '/team',
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

export const adminMenu = [
  {
    id: '1',
    link: '/admin',
    title: 'Адмін',
    src: `${mainPage}`,
  },
  {
    id: '2',
    link: '/admin/empregister',
    title: 'Співробітники',
    src: `${done}`,
  },
  {
    id: '3',
    link: '/admin/empregistew',
    title: 'Заглушка',
    src: `${done}`,
  },
  {
    id: '4',
    link: '/admin/wer',
    title: 'Заглушка',
    src: `${done}`,
  },
  {
    id: '5',
    link: '/admin/emp',
    title: 'Заглушка',
    src: `${done}`,
  },
];
