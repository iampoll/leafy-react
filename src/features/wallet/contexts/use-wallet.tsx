import { createContext, useContext, ReactNode } from "react";
import { useGetWallet } from "../api/use-get-wallet";

interface WalletContextType {
    wallet: {
        balance: number;
    } | null;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    refetchWallet: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
    const { data: wallet, isLoading, isError, error, refetch } = useGetWallet();

    const refetchWallet = async () => {
        await refetch();
    };

    return (
        <WalletContext.Provider
            value={{
                wallet,
                isLoading,
                isError,
                error: error as Error | null,
                refetchWallet,
            }}
        >
            {children}
        </WalletContext.Provider>
    );
}

export function useWallet() {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
}
