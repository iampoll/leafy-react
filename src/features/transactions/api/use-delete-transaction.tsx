import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api/client";
import { DeleteTransactionParams } from "../types";

export function useDeleteTransaction() {
    return useMutation({
        mutationFn: async (params: DeleteTransactionParams) => {
            const response = await api.delete(`/api/transactions/${params.id}`);
            return response.data;
        },
    });
}
