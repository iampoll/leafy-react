import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api/client";

interface CreateTransactionParams {
    isExpense: boolean;
    amount: number;
    category: string;
}

export function useCreateTransaction() {
    return useMutation({
        mutationFn: async (params: CreateTransactionParams) => {
            const response = await api.post("/api/transaction", params);
            return response.data;
        },
    });
}
