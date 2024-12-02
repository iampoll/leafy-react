import { RouteObject } from "react-router-dom";

import NotFound from "@/pages/not-found";
import AuthLayout from "@/layouts/auth";
import { Home, Login, Register, Dashboard } from "@/pages";
import { ProtectedRoute } from "@/components/auth/protected-route";

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
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
