import { useParams } from "react-router-dom";
import { useGetProfileByName } from "@/features/profile/api/use-get-profile-by-name";
import NotFound from "@/pages/not-found";
import ProfileLayout from "./layout";
import { ExperienceDonutChart } from "./partials/experience-donut-chart";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";

import rankAstralite from "@/assets/rank-astralite.png";
import rankStellarion from "@/assets/rank-stellarion.png";
import rankNebulaflare from "@/assets/rank-nebulaflare.png";

const ProfilePage = () => {
    const { name } = useParams();
    const { data, isLoading, isError } = useGetProfileByName(name as string);

    if (isLoading) return <div>fetching profile...</div>;
    if (!data || isError) return <NotFound />;

    const firstLetter = data.name.charAt(0);

    const beamColors = getBeamColors(data.level.currentLevel);

    return (
        <ProfileLayout>
            <section className="flex flex-col justify-center items-center gap-4">
                <div className="relative font-bold rounded-full bg-muted h-32 w-32 flex justify-center items-center">
                    {firstLetter}
                    <BorderBeam
                        size={128}
                        duration={8}
                        delay={0}
                        colorFrom={beamColors.colorFrom}
                        colorTo={beamColors.colorTo}
                        className="rounded-full"
                        borderWidth={2}
                        anchor={50}
                    />
                </div>

                <div className="absolute top-28">
                    <Badge className="rounded-full">
                        Level {data.level.currentLevel}
                    </Badge>
                </div>

                <ExperienceDonutChart
                    experiencePoints={data.level.experiencePoints}
                    experienceThreshold={data.level.experienceThreshold}
                />

                <div className="text-sm font-bold">{data.name}</div>

                <RankImage level={data.level.currentLevel} />
            </section>
        </ProfileLayout>
    );
};

export default ProfilePage;

const RankImage = ({ level }: { level: number }) => {
    let image;

    switch (level) {
        case 1:
            image = rankAstralite;
            break;
        case 2:
            image = rankStellarion;
            break;
        default:
            image = rankNebulaflare;
            break;
    }

    return <img src={image} alt="rank" className="w-16 h-16 -mt-4" />;
};

const getBeamColors = (level: number) => {
    const intensity = 0.2 + (Math.min(level, 10) - 1) * 0.08;

    return {
        colorFrom: `#ffaa40${Math.round(intensity * 255)
            .toString(16)
            .padStart(2, "0")}`,
        colorTo: `#9c40ff${Math.round(intensity * 255)
            .toString(16)
            .padStart(2, "0")}`,
    };
};
