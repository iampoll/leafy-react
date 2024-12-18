import LeaferboardCards from "@/features/leaferboard/components/leaferboard-cards";
import LeaferboardLayout from "./layout";
import TopLeafers from "@/features/leaferboard/components/top-leafers";
import BlurFade from "@/components/ui/blur-fade";

const Leaferboard = () => {
    return (
        <LeaferboardLayout>
            <BlurFade delay={0.25} inView>
                <TopLeafers />
            </BlurFade>

            <LeaferboardCards />
        </LeaferboardLayout>
    );
};

export default Leaferboard;
