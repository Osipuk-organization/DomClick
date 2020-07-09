import Hello from 'components/Hello';
import { Index } from 'layouts/index';

export default [
  {
    path: '/',
    component: Index,
    exact: true
    },
  {
    path: '*',
    component: Hello,
    exact: true
    },
]
