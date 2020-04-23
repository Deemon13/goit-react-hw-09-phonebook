import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'home',
    exact: true,
    component: lazy(() => import('./views/HomePage/Homepage')),
    private: false,
    restricted: false,
  },
  {
    path: '/register',
    label: 'register',
    exact: true,
    component: lazy(() => import('./views/Register/Register')),
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    label: 'login',
    exact: true,
    component: lazy(() => import('./views/Login/Login')),
    private: false,
    restricted: true,
  },
  {
    path: '/profile',
    label: 'profile',
    exact: true,
    component: lazy(() => import('./views/Profile/Profile')),
    private: true,
    restricted: false,
  },
  {
    path: '/contacts',
    label: 'contacts',
    exact: true,
    component: lazy(() => import('./views/Contacts/ContactsContainer')),
    private: true,
    restricted: false,
  },
  {
    path: '/tasks',
    label: 'tasks',
    exact: true,
    component: lazy(() => import('./views/Tasks/Tasks')),
    private: true,
    restricted: false,
  },
];
