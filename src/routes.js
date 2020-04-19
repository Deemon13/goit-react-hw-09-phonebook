import { lazy } from "react";

export default [
  {
    path: "/",
    label: "home",
    exact: true,
    component: lazy(() => import("./views/HomepageView")),
  },
  {
    path: "/register",
    label: "register",
    exact: true,
    component: lazy(() => import("./views/RegisterUserView")),
  },
  {
    path: "/login",
    label: "login",
    exact: true,
    component: lazy(() => import("./views/LoginUserView")),
  },
  {
    path: "/profile",
    label: "profile",
    exact: true,
    component: lazy(() => import("./views/ProfileUserView")),
  },
  {
    path: "/contacts",
    label: "contacts",
    exact: true,
    component: lazy(() => import("./views/ContactsUserContainer")),
  },
  {
    path: "/tasks",
    label: "tasks",
    exact: true,
    component: lazy(() => import("./views/TasksUserView")),
  },
];
