import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/client";
import { GetProfileByNameResponse } from "../types";

export function useGetProfileByName(name: string) {
    return useQuery({
        queryKey: ["user", name],
        queryFn: async () => {
            const { data } = await api.get<GetProfileByNameResponse>(
                `/api/users/${name}`
            );
            return data;
        },
    });
}
