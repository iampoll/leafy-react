import { useLeaferboard } from "../contexts/use-leaferboard";
import { GetLeaferboardResponse } from "../types";

const LeaferboardCards = () => {
    const { leaferboard, isLoading } = useLeaferboard();

    if (isLoading) return <div>Loading...</div>;
    if (!leaferboard) return <div>No data</div>;

    return (
        <div className="space-y-2">
            {leaferboard.map((user) => (
                <LeaferboardCard key={user.nameSlug} user={user} />
            ))}
        </div>
    );
};

export default LeaferboardCards;

const LeaferboardCard = ({ user }: { user: GetLeaferboardResponse }) => {
    return (
        <section className="flex items-center justify-between border border-border rounded-full p-4">
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
