import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api/client";
import { CreateTransactionParams } from "../types";

export function useCreateTransaction() {
    return useMutation({
        mutationFn: async (params: CreateTransactionParams) => {
            const response = await api.post("/api/transactions", params);
            return response.data;
        },
    });
}
