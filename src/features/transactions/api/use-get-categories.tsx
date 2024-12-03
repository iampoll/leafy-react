import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/client";

export function useGetCategories() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const { data } = await api.get("/api/transactions/categories");
            return data;
        },
    });
}
