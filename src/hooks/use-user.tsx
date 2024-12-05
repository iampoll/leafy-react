import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/client";
import { useNavigate } from "react-router-dom";

interface User {
    id: string;
    email: string;
    isOnboarded: boolean;
}

interface UserContextType {
    user: User | null;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    refetchUser: () => Promise<void>;
    handleLogout: () => Promise<void>;
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
