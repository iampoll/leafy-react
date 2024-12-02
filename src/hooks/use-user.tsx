import { api } from "@/lib/api/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface User {
    id: string;
    email: string;
    isOnboarded: boolean;
}

const useUser = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { data: user, isLoading } = useQuery<User>({
        queryKey: ["user"],
        queryFn: async () => {
            const { data } = await api.get("/api/manage/info");
            return data;
        },
    });

    const refetchUser = () => {
        queryClient.invalidateQueries({ queryKey: ["user"] });
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return { user, isLoading, refetchUser, handleLogout };
};

export default useUser;
