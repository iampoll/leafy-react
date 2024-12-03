import Balance from "@/features/wallet/components/balance";
import { CreateTransactionDrawer } from "@/features/transactions/components/create-transaction/drawer";
import TransactionCards from "@/features/transactions/components/list-transactions";
import { TransactionsProvider } from "@/features/transactions/contexts/use-transactions";

const Dashboard = () => {
    return (
        <TransactionsProvider>
            <div className="space-y-4">
                <Balance />
                <CreateTransactionDrawer />
            </div>

            <TransactionCards />
        </TransactionsProvider>
    );
};

export default Dashboard;
