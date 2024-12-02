import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routesConfig } from "./config";

const AppRoutes = () => {
  const routes = useRoutes(routesConfig);
  return routes;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
