import BlurFade from "@/components/ui/blur-fade";
import Topbar from "./topbar";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    const isLoggedIn = localStorage.getItem("token");

    return (
        <div className="max-w-sm p-4 mx-auto space-y-8">
            {isLoggedIn && (
                <BlurFade delay={0.15} inView>
                    <Topbar />
                </BlurFade>
            )}

            {!isLoggedIn && <div className="h-4"></div>}

            <BlurFade delay={0.25} inView>
                {children}
            </BlurFade>
        </div>
    );
};

export default ProfileLayout;
