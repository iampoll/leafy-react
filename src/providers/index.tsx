import React from "react";
import { ThemeProvider } from "./theme-provider";
import { ReactQueryProvider } from "./react-query-provider";
import { AuthProvider } from "./auth-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactQueryProvider>
            <ThemeProvider>
                <AuthProvider>
                    <>{children}</>
                </AuthProvider>
            </ThemeProvider>
        </ReactQueryProvider>
    );
};

export default Providers;
