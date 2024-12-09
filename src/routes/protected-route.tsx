import { Navigate, Outlet } from "react-router-dom";
import { UserProvider, useUser } from "@/providers/user-provider";
import DashboardSkeleton from "@/pages/dashboard/loading";

const ProtectedRouteContent = () => {
    const { user, isLoading } = useUser();
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (isLoading) {
        return <DashboardSkeleton />;
    }

    if (!user) {
        return null;
    }

    return <Outlet />;
};

const ProtectedRoute = () => {
    return (
        <UserProvider>
            <ProtectedRouteContent />
        </UserProvider>
    );
};

export default ProtectedRoute;
