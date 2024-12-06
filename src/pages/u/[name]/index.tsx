import { useParams } from "react-router-dom";
import { useGetProfileByName } from "@/features/profile/api/use-get-profile-by-name";
import NotFound from "@/pages/not-found";
import ProfileLayout from "./layout";

const ProfilePage = () => {
    const { name } = useParams();
    const { data, isLoading, isError } = useGetProfileByName(name as string);

    if (isLoading) return <div>fetching profile...</div>;
    if (!data || isError) return <NotFound />;

    const firstLetter = data.name.charAt(0);

    return (
        <ProfileLayout>
            <section className="flex flex-col justify-center items-center gap-4">
                <div className="font-bold rounded-full bg-muted h-24 w-24 flex justify-center items-center">
                    {firstLetter}
                </div>

                <div className="text-sm font-bold">{data.name}</div>
                <div className="text-sm text-muted-foreground">
                    Level {data.level.currentLevel}
                </div>
            </section>
        </ProfileLayout>
    );
};

export default ProfilePage;
