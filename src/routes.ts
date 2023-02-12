import Home from "./pages/Home";
import { Routes } from "./types";

export const routes: Routes[] = [
    {
      path: "/",
      exact: true,
      component: Home
    },
    {
        path: "/home",
        exact: true,
        component: Home
      },
  ];