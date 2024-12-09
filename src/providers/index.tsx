import React from "react";
import { ThemeProvider } from "./theme-provider";
import { ReactQueryProvider } from "./react-query-provider";
import { AuthProvider } from "./auth-provider";
import { LevelUpNotificationProvider } from "@/providers/use-level-up";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactQueryProvider>
            <ThemeProvider>
                <AuthProvider>
                    <LevelUpNotificationProvider>
                        <>{children}</>
                    </LevelUpNotificationProvider>
                </AuthProvider>
            </ThemeProvider>
        </ReactQueryProvider>
    );
};

export default Providers;
