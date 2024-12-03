import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/client";

export function useGetTransactions() {
    return useQuery({
        queryKey: ["transactions"],
        queryFn: async () => {
            const { data } = await api.get("/api/transactions");
            return data;
        },
    });
}
