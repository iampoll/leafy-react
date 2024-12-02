import Onboarding from "@/features/onboarding/components";
import Dashboard from "./dashboard";
import useUser from "@/hooks/use-user";

const DashboardIndex = () => {
    const { user, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (!user) return <div>User not found</div>;

    return <div>{user?.isOnboarded ? <Dashboard /> : <Onboarding />}</div>;
};

export default DashboardIndex;
