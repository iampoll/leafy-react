import { api } from "./client";
import { LoginFormValues } from "@/features/auth/types";

interface LoginResponse {
    tokenType: string;
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
}

export const authApi = {
    login: async (credentials: LoginFormValues) => {
        const { data } = await api.post<LoginResponse>("/login", credentials);
        return data;
    },
};
