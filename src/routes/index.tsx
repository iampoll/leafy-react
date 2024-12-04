import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routesConfig } from "./config";
import DashboardSkeleton from "@/pages/dashboard/loading";

const AppRoutes = () => {
    const routes = useRoutes(routesConfig);
    return routes;
};

const Routes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<DashboardSkeleton />}>
                <AppRoutes />
            </Suspense>
        </BrowserRouter>
    );
};

export default Routes;
