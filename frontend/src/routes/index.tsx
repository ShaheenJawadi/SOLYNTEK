import { RouteObject } from "react-router-dom";
import GuardRoute from "./guard";
import Login from "../pages/login";
import Register from "../pages/register";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <div>Home</div> ,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element:  <Register/>,
  },
  {
    path: "/dashboard",
    element: (
    <GuardRoute requiredRole="admin">
      <div>Dashboard</div>
    </GuardRoute>),
  },
  
];
