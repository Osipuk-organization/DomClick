import { lazy } from 'react';

const Index = lazy(() => import('layouts/index'));
const Card = lazy(() => import('layouts/card'));
const AddProduct = lazy(() => import('layouts/addProduct'));
const Registration = lazy(() => import('layouts/registration'));
const SignIn = lazy(() => import('layouts/sign-in'));
const Profile = lazy(() => import('layouts/profile'));


export default [
  {
    path: '/',
    component: Index,
    exact: true
  },
  {
    path: '/card/add',
    component: AddProduct,
    exact: true,
  },
  {
    path: '/card/:id',
    component: Card,
    exact: true
  },
  {
    path: "/registration",
    component: Registration,
    exact: true,
  },
  {
    path: "/sign-in",
    component: SignIn,
    exact: true,
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
  },
  {
    path: '*',
    component: Index,
    exact: true
  },
]
