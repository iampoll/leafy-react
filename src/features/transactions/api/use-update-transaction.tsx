import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api/client";
import { UpdateTransactionParams } from "../types";

export function useUpdateTransaction() {
    return useMutation({
        mutationFn: async (params: UpdateTransactionParams) => {
            const response = await api.patch(`/api/transactions/${params.id}`, {
                isExpense: params.isExpense,
                amount: params.amount,
                category: Number(params.category),
            });
            return response.data;
        },
    });
}
