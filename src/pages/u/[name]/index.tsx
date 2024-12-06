import { useParams } from "react-router-dom";
import { useGetProfileByName } from "@/features/profile/api/use-get-profile-by-name";
import NotFound from "@/pages/not-found";

const ProfilePage = () => {
    const { name } = useParams();
    const { data, isLoading, isError } = useGetProfileByName(name as string);

    if (isLoading) return <div>fetching profile...</div>;
    if (!data || isError) return <NotFound />;

    return <div>{data.name}</div>;
};

export default ProfilePage;
