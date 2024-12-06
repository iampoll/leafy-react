import BlurFade from "@/components/ui/blur-fade";
import { WalletProvider } from "@/features/wallet/contexts/use-wallet";
import Topbar from "./partials/topbar";

import { Navigate } from "react-router-dom";
import { useUser } from "@/providers/user-provider";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { isError } = useUser();

    if (isError) return <Navigate to="/login" />;

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
