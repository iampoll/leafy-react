import { useNavigate } from "react-router-dom";
import { useLeaferboard } from "../contexts/use-leaferboard";
import { GetLeaferboardResponse } from "../types";
import BlurFade from "@/components/ui/blur-fade";

const LeaferboardCards = () => {
    const { leaferboard, isLoading } = useLeaferboard();

    if (isLoading) return <div>Loading...</div>;
    if (!leaferboard) return <div>No data</div>;

    return (
        <div className="space-y-2">
            {leaferboard.map((user, idx: number) => (
                <BlurFade key={user.nameSlug} delay={0.25 + idx * 0.05} inView>
                    <LeaferboardCard key={user.nameSlug} user={user} />
                </BlurFade>
            ))}
        </div>
    );
};

export default LeaferboardCards;

const LeaferboardCard = ({ user }: { user: GetLeaferboardResponse }) => {
    const navigate = useNavigate();

    return (
        <section
            className="flex items-center justify-between border border-border rounded-full p-4 cursor-pointer hover:border-2"
            onClick={() => {
                navigate(`/u/${user.nameSlug}`);
            }}
        >
            <div className="flex items-center gap-1 text-xs font-bold">
                <p className="mr-3">
                    🚀
                    {user.rank}
                </p>
                <p className="rounded-full bg-muted h-8 w-8 flex justify-center items-center">
                    {user.nameSlug.slice(0, 1).toUpperCase()}
                </p>
                <h1>{user.name}</h1>
            </div>

            <p className="">{user.totalExperiencePoints}🍀</p>
        </section>
    );
};
