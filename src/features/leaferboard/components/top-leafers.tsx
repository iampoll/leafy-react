import { Badge } from "@/components/ui/badge";
import { useLeaferboard } from "../contexts/use-leaferboard";

const TopLeafers = () => {
    const { leaferboard, isLoading } = useLeaferboard();

    if (isLoading) return <div>Loading top leafers...</div>;
    if (!leaferboard) return null;

    const topOneLeafer = leaferboard[0];
    const topTwoLeafer = leaferboard[1];
    const topThreeLeafer = leaferboard[2];

    const topLeafers = [topTwoLeafer, topOneLeafer, topThreeLeafer];

    return (
        <div className="flex items-center justify-between gap-2 py-4 mb-4">
            {topLeafers.map((leafer) => (
                <section
                    className={`relative flex flex-col items-center justify-between gap-4 ${
                        leafer.rank === 1 ? "-mt-12" : ""
                    }`}
                >
                    <Badge className="rounded-full h-2 w-2 p-3 text-xs flex justify-center items-center absolute top-[80px]">
                        {leafer.rank}
                    </Badge>

                    {leafer.rank === 1 && (
                        <div className="absolute -top-4 text-2xl">👑</div>
                    )}

                    <p className="rounded-full bg-muted h-24 aspect-square flex justify-center items-center border border-foreground/20">
                        {leafer.name.slice(0, 1).toUpperCase()}
                    </p>

                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-xs font-bold text-ellipsis whitespace-nowrap overflow-hidden max-w-[100px]">
                            {leafer.name}
                        </h1>
                        <p className="text-xs">
                            {leafer.totalExperiencePoints}
                        </p>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default TopLeafers;
