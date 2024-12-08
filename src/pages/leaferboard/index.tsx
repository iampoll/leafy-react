import LeaferboardCards from "@/features/leaferboard/components/leaferboard-cards";
import LeaferboardLayout from "./layout";
import TopLeafers from "@/features/leaferboard/components/top-leafers";

const Leaferboard = () => {
    return (
        <LeaferboardLayout>
            <TopLeafers />

            <LeaferboardCards />
        </LeaferboardLayout>
    );
};

export default Leaferboard;
