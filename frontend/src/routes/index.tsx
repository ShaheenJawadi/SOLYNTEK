import { RouteObject } from "react-router-dom";
import GuardRoute from "./guard";

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
    element: (
    <GuardRoute requiredRole="admin">
      <div>Dashboard</div>
    </GuardRoute>),
  },
  
];
