import Balance from "@/features/wallet/components/balance";
import { CreateTransactionDrawer } from "@/features/transactions/components/create-transaction/drawer";

const Dashboard = () => {
    return (
        <div className="space-y-4">
            <Balance />

            <CreateTransactionDrawer />
        </div>
    );
};

export default Dashboard;
