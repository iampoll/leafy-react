import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/client";

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
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const {
        data: user,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const { data } = await api.get("/api/manage/info");
            return data;
        },
    });

    const refetchUser = async () => {
        await refetch();
    };

    return (
        <UserContext.Provider
            value={{
                user,
                isLoading,
                isError,
                error: error as Error | null,
                refetchUser,
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
