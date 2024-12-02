import { api } from "@/lib/api/client";
import { useQuery } from "@tanstack/react-query";

interface User {
    id: string;
    email: string;
    isOnboarded: boolean;
}

const useUser = () => {
    const { data: user, isLoading } = useQuery<User>({
        queryKey: ["user"],
        queryFn: async () => {
            const { data } = await api.get("/api/manage/info");
            return data;
        },
    });

    return { user, isLoading };
};

export default useUser;
