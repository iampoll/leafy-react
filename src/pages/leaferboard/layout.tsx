import BlurFade from "@/components/ui/blur-fade";
import LeaferboardTopbar from "./partials/topbar";
import { LeaferboardProvider } from "@/features/leaferboard/contexts/use-leaferboard";

const LeaferboardLayout = ({ children }: { children: React.ReactNode }) => {
    const isLoggedIn = localStorage.getItem("token");

    return (
        <div className="max-w-sm p-4 mx-auto space-y-8">
            {isLoggedIn && (
                <BlurFade delay={0.15} inView>
                    <LeaferboardTopbar />
                </BlurFade>
            )}

            {!isLoggedIn && <div className="h-12"></div>}

            <LeaferboardProvider>
                <BlurFade delay={0.25} inView>
                    {children}
                </BlurFade>
            </LeaferboardProvider>
        </div>
    );
};

export default LeaferboardLayout;
