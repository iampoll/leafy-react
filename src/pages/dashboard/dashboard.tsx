import Balance from "@/features/wallet/components/balance";
import { CreateTransactionDrawer } from "@/features/transactions/components/create-transaction/drawer";
import TransactionCards from "@/features/transactions/components/list-transactions";
import { TransactionsProvider } from "@/features/transactions/contexts/use-transactions";
import BlurFade from "@/components/ui/blur-fade";

const Dashboard = () => {
    return (
        <TransactionsProvider>
            <BlurFade delay={0.25} inView className="space-y-2">
                <Balance />

                <CreateTransactionDrawer />
            </BlurFade>

            <BlurFade delay={0.25} inView>
                <TransactionCards />
            </BlurFade>
        </TransactionsProvider>
    );
};

export default Dashboard;
