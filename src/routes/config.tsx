import { RouteObject } from "react-router-dom";

import NotFound from "@/pages/not-found";
import AuthLayout from "@/pages/(auth)/layout";
import { DashboardIndex, Home, Login, Register } from "@/pages";
import ProtectedRoute from "@/components/auth/protected-route";
import ProfilePage from "@/pages/u/[name]";

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
        path: "dashboard",
        element: <ProtectedRoute />,
        children: [
            {
                path: "",
                element: <DashboardIndex />,
            },
        ],
    },
    {
        path: "u/:name",
        element: <ProfilePage />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
