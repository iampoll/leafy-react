import { lazy } from "react";

const Home = lazy(() => import("@/pages/home"));

const Login = lazy(() => import("@/pages/(auth)/login"));

const Register = lazy(() => import("@/pages/(auth)/register"));

const Dashboard = lazy(() => import("@/pages/dashboard"));

export { Home, Login, Register, Dashboard };
