import Hello from 'components/Hello';
import { Index } from 'layouts/index';
import { Card } from 'layouts/card';

export default [
  {
    path: '/',
    component: Index,
    exact: true
  },
  {
    path: '/card/:id',
    component: Card,
    exact: true
  },
  {
    path: '*',
    component: Hello,
    exact: true
  },
]
