import BlurFade from "@/components/ui/blur-fade";
import Topbar from "./topbar";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-sm p-4 mx-auto space-y-8">
            <BlurFade delay={0.15} inView>
                <Topbar />
            </BlurFade>

            <BlurFade delay={0.25} inView>
                {children}
            </BlurFade>
        </div>
    );
};

export default ProfileLayout;
