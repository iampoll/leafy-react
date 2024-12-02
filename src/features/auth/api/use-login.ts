import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/lib/api/auth";
import { LoginFormValues } from "../types";

export function useLogin() {
    return useMutation({
        mutationFn: async (credentials: LoginFormValues) => {
            const response = await authApi.login(credentials);
            localStorage.setItem("token", response.accessToken);
            return response;
        },
    });
}
