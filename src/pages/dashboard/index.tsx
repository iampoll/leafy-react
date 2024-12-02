import Onboarding from "@/features/onboarding/components";
import Dashboard from "./dashboard";
import useUser from "@/hooks/use-user";
import DashboardLayout from "./layout";

const DashboardIndex = () => {
    const { user, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (!user) return <div>User not found</div>;

    return (
        <div>
            {user?.isOnboarded ? (
                <DashboardLayout>
                    <Dashboard />
                </DashboardLayout>
            ) : (
                <Onboarding />
            )}
        </div>
    );
};

export default DashboardIndex;
