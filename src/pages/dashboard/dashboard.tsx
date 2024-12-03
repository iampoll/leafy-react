import Balance from "@/features/wallet/components/balance";
import { CreateTransactionDrawer } from "@/features/transactions/components/create-transaction/drawer";
import TransactionCards from "@/features/transactions/components/list-transactions";

const Dashboard = () => {
    return (
        <>
            <div className="space-y-4">
                <Balance />

                <CreateTransactionDrawer />
            </div>

            <TransactionCards />
        </>
    );
};

export default Dashboard;
