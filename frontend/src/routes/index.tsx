import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <div>Home</div> ,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/register",
    element:  <div>register</div>,
  },
  {
    path: "/dashboard",
    element: <div>Dashboard</div>,
  },
  
];
