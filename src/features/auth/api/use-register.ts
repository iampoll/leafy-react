import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/lib/api/auth";
import { RegisterFormValues } from "../types";

export function useRegister() {
    return useMutation({
        mutationFn: async (credentials: RegisterFormValues) => {
            const response = await authApi.register(credentials);
            return response;
        },
    });
}
