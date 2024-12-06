import BlurFade from "@/components/ui/blur-fade";
import { useTransactions } from "../../contexts/use-transactions";
import ListTransactionsHeader from "./header";
import TransactionCard from "./transaction-card";
import { Transaction } from "./types";

const TransactionCards = () => {
    const { filteredTransactions, isLoading, error } = useTransactions();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!filteredTransactions?.length) return null;

    const sortedTransactionsByDate = filteredTransactions.sort(
        (a: Transaction, b: Transaction) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return (
        <div className="space-y-3 pb-8 pt-4 mb-20">
            <ListTransactionsHeader />

            {sortedTransactionsByDate.map(
                (transaction: Transaction, idx: number) => (
                    <BlurFade
                        key={transaction.id}
                        delay={0.25 + idx * 0.05}
                        inView
                    >
                        <TransactionCard
                            key={transaction.id}
                            transaction={transaction}
                        />
                    </BlurFade>
                )
            )}
        </div>
    );
};

export default TransactionCards;
