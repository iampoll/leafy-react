import { createContext, useContext, ReactNode, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/client";
import { GetLeaferboardResponse } from "../types";

interface LeaferboardContextType {
    leaferboard: GetLeaferboardResponse[];
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    refetchLeaferboard: (newLimit?: number) => Promise<void>;
    limit: number;
    setLimit: (limit: number) => void;
}

const LeaferboardContext = createContext<LeaferboardContextType | undefined>(
    undefined
);

export function LeaferboardProvider({ children }: { children: ReactNode }) {
    const [limit, setLimit] = useState(10);

    const {
        data: leaferboard = [],
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["leaferboard", limit],
        queryFn: async () => {
            const { data } = await api.get(
                `/api/levels/leaderboard?limit=${limit}`
            );
            return data;
        },
    });

    const refetchLeaferboard = async (newLimit?: number) => {
        if (newLimit) setLimit(newLimit);
        await refetch();
    };

    return (
        <LeaferboardContext.Provider
            value={{
                leaferboard,
                isLoading,
                isError,
                error: error as Error | null,
                refetchLeaferboard,
                limit,
                setLimit,
            }}
        >
            {children}
        </LeaferboardContext.Provider>
    );
}

export function useLeaferboard() {
    const context = useContext(LeaferboardContext);
    if (context === undefined) {
        throw new Error(
            "useLeaferboard must be used within a LeaferboardProvider"
        );
    }
    return context;
}
