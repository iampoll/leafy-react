import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api/client";

export function useCreateWallet() {
    return useMutation({
        mutationFn: async (balance: number) => {
            const response = await api.post("/api/wallet", { balance });
            return response.data;
        },
    });
}
