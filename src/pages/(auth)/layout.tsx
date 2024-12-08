import { Navigate, Outlet } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const AuthLayout = () => {
    const isHaveToken = localStorage.getItem("token");

    if (isHaveToken) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <section className="h-[100svh] flex flex-col justify-around p-4 lg:px-16">
            <header>
                <Button variant="ghost" onClick={() => history.back()}>
                    <ChevronLeft />
                    Back
                </Button>
            </header>

            <div className="w-full max-w-md mx-auto">
                <Outlet />
            </div>

            <div></div>
        </section>
    );
};

export default AuthLayout;
