import Balance from "@/features/wallet/components/balance";
import { CreateTransactionDrawer } from "@/features/transactions/components/create-transaction/drawer";
import TransactionCards from "@/features/transactions/components/list-transactions";
import { TransactionsProvider } from "@/features/transactions/contexts/use-transactions";
import BlurFade from "@/components/ui/blur-fade";
import Navbar from "./partials/navbar";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";

const Dashboard = () => {
    return (
        <TransactionsProvider>
            <BlurFade delay={0.25} inView className="space-y-2">
                <Balance />

                <div className="w-fit mx-auto">
                    <CreateTransactionDrawer />
                </div>
            </BlurFade>

            <BlurFade delay={0.25} inView>
                <TransactionCards />
            </BlurFade>

            <ScrollToTopButton />
            <Navbar />
        </TransactionsProvider>
    );
};

export default Dashboard;
