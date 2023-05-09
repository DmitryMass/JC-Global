import { details, done } from './svgStore';
import { about, admin, goals, mainPage, team } from './svgStore';

export const leftBarMenu = [
  {
    id: '1',
    link: '/',
    title: 'Головна',
    src: `${admin}`,
  },
  {
    id: '2',
    link: '/about',
    title: 'Ми',
    src: `${about}`,
  },
  {
    id: '3',
    link: '/team',
    title: 'Команда',
    src: `${team}`,
  },
  {
    id: '4',
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
    link: '/admin/resetpassword',
    title: 'Відновлення паролю',
    src: `${details}`,
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
