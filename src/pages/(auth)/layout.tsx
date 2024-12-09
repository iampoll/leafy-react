import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const AuthLayout = () => {
    const navigate = useNavigate();
    const isHaveToken = localStorage.getItem("token");

    useEffect(() => {
        if (isHaveToken) {
            navigate("/dashboard");
        }
    }, [isHaveToken, navigate]);

    return (
        <section className="h-[100svh] flex flex-col justify-around p-4 lg:px-16">
            <header>
                <Button variant="ghost" onClick={() => navigate(-1)}>
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
