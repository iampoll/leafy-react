import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/client";

export function useGetWallet() {
    return useQuery({
        queryKey: ["wallet"],
        queryFn: async () => {
            const { data } = await api.get("/api/wallets");
            return data;
        },
    });
}
