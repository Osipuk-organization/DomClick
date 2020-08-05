import { Index } from "./layouts/index";
import { Card } from "./layouts/card";
import { AddProduct } from "./layouts/AddProduct";
import { Registration } from "./layouts/registration";
import { SignIn } from "@/layouts/sign-in";

export default [
  {
    path: "/",
    component: Index,
    exact: true,
  },
  {
    path: "/card/add",
    component: AddProduct,
    exact: true,
  },
  {
    path: "/card/:id",
    component: Card,
    exact: true,
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

  // {
  //   path: '*',
  //   component: Hello,
  //   exact: true
  // },
];
