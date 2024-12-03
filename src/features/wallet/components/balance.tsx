import { Leaf } from "lucide-react";

import { useWallet } from "../contexts/use-wallet";
import { H1 } from "@/components/ui/typography";

const Balance = () => {
    const { wallet, isLoading, isError, error } = useWallet();

    if (isLoading) {
        return <div>Loading wallet info...</div>;
    }
    if (isError) {
        return <div>Error: {error?.message}</div>;
    }
    if (!wallet) {
        return <div>No wallet found</div>;
    }

    return (
        <section className="flex gap-2 items-center">
            <Leaf />
            <H1>{wallet.balance}</H1>
        </section>
    );
};

export default Balance;
