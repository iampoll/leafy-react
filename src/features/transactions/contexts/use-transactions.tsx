import { createContext, useContext, ReactNode, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/client";
import { Transaction } from "../types";

interface TransactionsContextType {
    transactions: Transaction[];
    filteredTransactions: Transaction[];
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    refetchTransactions: () => Promise<void>;
    setActiveFilters: (filters: string[]) => void;
}

const TransactionsContext = createContext<TransactionsContextType | undefined>(
    undefined
);

export function TransactionsProvider({ children }: { children: ReactNode }) {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    const {
        data: transactions = [],
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

    const filteredTransactions = useMemo(() => {
        if (!activeFilters.length) return transactions;

        return transactions.filter((transaction) =>
            activeFilters.includes(String(transaction.category))
        );
    }, [transactions, activeFilters]);

    const refetchTransactions = async () => {
        await refetch();
    };

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                filteredTransactions,
                isLoading,
                isError,
                error: error as Error | null,
                refetchTransactions,
                setActiveFilters,
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
