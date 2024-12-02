import { lazy } from "react";

const Home = lazy(() => import("@/pages/home"));

const Login = lazy(() => import("@/pages/(auth)/login"));

const Register = lazy(() => import("@/pages/(auth)/register"));

export { Home, Login, Register };
