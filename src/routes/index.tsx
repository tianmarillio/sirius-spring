import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },

  // {
  //   path: '/auth',
  //   children: [
  //     {
  //       path: 'login',
  //       element: <Login />,
  //     },
  //     {
  //       path: 'register',
  //       element: <Register />,
  //     },
  //   ],
  // },
];
