import { lazy } from "react";

const Home = lazy(() => import("@/pages/home"));

const Login = lazy(() => import("@/pages/(auth)/login"));

const Register = lazy(() => import("@/pages/(auth)/register"));

const DashboardIndex = lazy(() => import("@/pages/dashboard"));

export { Home, Login, Register, DashboardIndex };
