import { RouteObject } from "react-router-dom";
import { Home, Login, Register } from "@/pages";
import NotFound from "@/pages/not-found";
import AuthLayout from "@/layouts/auth";

export const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
