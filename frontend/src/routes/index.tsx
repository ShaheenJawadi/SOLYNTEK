import { RouteObject } from "react-router-dom";
import GuardRoute from "./guard";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home/> ,
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
