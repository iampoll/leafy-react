import { createContext, useContext, ReactNode } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AxiosError } from "axios";

interface User {
    id: string;
    email: string;
    isOnboarded: boolean;
    name: string;
}

interface UpdateUser {
    name: string;
}

interface UserContextType {
    user: User | null;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    refetchUser: () => Promise<void>;
    handleLogout: () => Promise<void>;
    updateUser: (user: UpdateUser) => void;
    isUpdatingUser: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const {
        data: user,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const { data } = await api.get("/api/users");
            return data;
        },
    });

    const { mutate: updateUser, isPending: isUpdatingUser } = useMutation({
        mutationFn: async (user: UpdateUser) => {
            const { data } = await api.patch("/api/users", user);
            return data;
        },
        onSuccess: () => {
            refetch();
        },
        onError: (error: AxiosError) => {
            toast.error(error.response?.data as string);
        },
    });

    const refetchUser = async () => {
        await refetch();
    };

    const handleLogout = async () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <UserContext.Provider
            value={{
                user,
                isLoading,
                isError,
                error: error as Error | null,
                refetchUser,
                handleLogout,
                updateUser,
                isUpdatingUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}
