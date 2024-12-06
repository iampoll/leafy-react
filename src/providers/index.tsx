import React from "react";
import { ThemeProvider } from "./theme-provider";
import { ReactQueryProvider } from "./react-query-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactQueryProvider>
            <ThemeProvider>
                <>{children}</>
            </ThemeProvider>
        </ReactQueryProvider>
    );
};

export default Providers;
