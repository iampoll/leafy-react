import { createContext, useContext, ReactNode } from "react";
import { useLogin } from "@/features/auth/api/use-login";
import { useRegister } from "@/features/auth/api/use-register";
import { LoginFormValues, RegisterFormValues } from "@/features/auth/types";
import { useQueryClient } from "@tanstack/react-query";

interface AuthContextType {
    login: (credentials: LoginFormValues) => Promise<void>;
    register: (credentials: RegisterFormValues) => Promise<void>;
    isLoggingIn: boolean;
    isRegistering: boolean;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const queryClient = useQueryClient();

    const { mutateAsync: loginMutation, isPending: isLoggingIn } = useLogin();
    const { mutateAsync: registerMutation, isPending: isRegistering } =
        useRegister();

    const login = async (credentials: LoginFormValues) => {
        await loginMutation(credentials);
    };

    const register = async (credentials: RegisterFormValues) => {
        await registerMutation(credentials);
    };

    const logout = async () => {
        localStorage.removeItem("token");
        queryClient.invalidateQueries({ queryKey: ["user"] });
        queryClient.invalidateQueries({ queryKey: ["transactions"] });
        queryClient.invalidateQueries({ queryKey: ["categories"] });
        queryClient.invalidateQueries({ queryKey: ["wallet"] });
    };

    return (
        <AuthContext.Provider
            value={{
                login,
                register,
                isLoggingIn,
                isRegistering,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
