import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/typography";
import { useGetWallet } from "@/features/wallet/api/get-wallet";
import { Leaf } from "lucide-react";

const Dashboard = () => {
    const { data, isLoading, isError, error } = useGetWallet();

    if (isLoading) {
        return <div>Loading wallet info...</div>;
    }
    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="space-y-4">
            <section className="flex gap-2 items-center">
                <Leaf />
                <H1>{data.balance}</H1>
            </section>

            <section className="flex gap-2">
                <Button>Deposit</Button>
                <Button variant="secondary">Expenses</Button>
            </section>
        </div>
    );
};

export default Dashboard;
