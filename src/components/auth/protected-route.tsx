import { Navigate, Outlet } from "react-router-dom";
import { UserProvider, useUser } from "@/hooks/use-user";

const ProtectedRouteContent = () => {
    const { user, isLoading } = useUser();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
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
