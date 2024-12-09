import { Navigate } from "react-router-dom";
import { useUser } from "@/providers/user-provider";
import Topbar from "./partials/topbar";
import { WalletProvider } from "@/features/wallet/contexts/use-wallet";
import BlurFade from "@/components/ui/blur-fade";
import DashboardSkeleton from "./loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoading } = useUser();

    if (isLoading) {
        return <DashboardSkeleton />;
    }

    if (!user) {
        return null;
    }

    if (!user.isOnboarded) {
        return <Navigate to="/onboarding" replace />;
    }

    return (
        <WalletProvider>
            <div className="max-w-sm p-4 mx-auto space-y-8">
                <BlurFade delay={0} inView>
                    <Topbar />
                </BlurFade>

                {children}
            </div>
        </WalletProvider>
    );
};

export default DashboardLayout;
