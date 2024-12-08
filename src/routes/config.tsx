import { RouteObject } from "react-router-dom";

import NotFound from "@/pages/not-found";
import AuthLayout from "@/pages/(auth)/layout";
import {
    DashboardIndex,
    Home,
    Leaferboard,
    Login,
    ProfilePage,
    Register,
} from "@/pages";

import ProtectedRoute from "./protected-route";

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
        path: "leaferboard",
        element: <Leaferboard />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
