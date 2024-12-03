import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/typography";
import { useWallet } from "@/features/wallet/contexts/use-wallet";
import { Leaf } from "lucide-react";

const Dashboard = () => {
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
        <div className="space-y-4">
            <section className="flex gap-2 items-center">
                <Leaf />
                <H1>{wallet.balance}</H1>
            </section>

            <section className="flex gap-2">
                <Button>Deposit</Button>
                <Button variant="secondary">Expenses</Button>
            </section>
        </div>
    );
};

export default Dashboard;
