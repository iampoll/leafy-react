import BlurFade from "@/components/ui/blur-fade";
import Topbar from "./partials/topbar";
import { WalletProvider } from "@/features/wallet/contexts/use-wallet";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <WalletProvider>
            <div className="max-w-sm p-4 mx-auto space-y-4">
                <BlurFade delay={0} inView>
                    <Topbar />
                </BlurFade>

                {children}
            </div>
        </WalletProvider>
    );
};

export default DashboardLayout;
