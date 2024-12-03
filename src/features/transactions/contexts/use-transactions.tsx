import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/client";
import { Transaction } from "../components/list-transactions/types";

interface TransactionsContextType {
    transactions: Transaction[];
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    refetchTransactions: () => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextType | undefined>(
    undefined
);

export function TransactionsProvider({ children }: { children: ReactNode }) {
    const {
        data: transactions,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["transactions"],
        queryFn: async () => {
            const { data } = await api.get("/api/transactions");
            return data;
        },
    });

    const refetchTransactions = async () => {
        await refetch();
    };

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                isLoading,
                isError,
                error: error as Error | null,
                refetchTransactions,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);
    if (context === undefined) {
        throw new Error(
            "useTransactions must be used within a TransactionsProvider"
        );
    }
    return context;
}
