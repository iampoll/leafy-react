import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api/client";

interface DeleteTransactionParams {
    id: number;
}

export function useDeleteTransaction() {
    return useMutation({
        mutationFn: async (params: DeleteTransactionParams) => {
            const response = await api.delete(`/api/transactions/${params.id}`);
            return response.data;
        },
    });
}
