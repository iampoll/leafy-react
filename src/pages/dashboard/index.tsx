import Onboarding from "@/features/onboarding/components";
import Dashboard from "./dashboard";

const DashboardIndex = () => {
    const isOnboarded = false;
    return <div>{isOnboarded ? <Dashboard /> : <Onboarding />}</div>;
};

export default DashboardIndex;
