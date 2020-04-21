import { lazy } from "react";

export default [
  {
    path: "/",
    label: "home",
    exact: true,
    component: lazy(() => import("./views/HomepageView")),
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    label: "register",
    exact: true,
    component: lazy(() => import("./views/RegisterUserView")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "login",
    exact: true,
    component: lazy(() => import("./views/LoginUserView")),
    private: false,
    restricted: true,
  },
  {
    path: "/profile",
    label: "profile",
    exact: true,
    component: lazy(() => import("./views/ProfileUserView")),
    private: true,
    restricted: false,
  },
  {
    path: "/contacts",
    label: "contacts",
    exact: true,
    component: lazy(() => import("./views/ContactsUserContainer")),
    private: true,
    restricted: false,
  },
  {
    path: "/tasks",
    label: "tasks",
    exact: true,
    component: lazy(() => import("./views/TasksUserView")),
    private: true,
    restricted: false,
  },
];
