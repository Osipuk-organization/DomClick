import Hello from 'components/Hello';

export default [
  {
    path: '/',
    component: Hello,
    exact: true
    },
  {
    path: '*',
    component: Hello,
    exact: true
    },
]
