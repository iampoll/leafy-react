import { useTransactions } from "../../contexts/use-transactions";
import ListTransactionsHeader from "./header";
import TransactionCard from "./transaction-card";
import { Transaction } from "./types";

const TransactionCards = () => {
    const { transactions, isLoading, error } = useTransactions();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!transactions?.length) return <div>Create your first transaction</div>;

    const sortedTransactionsByDate = transactions.sort(
        (a: Transaction, b: Transaction) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return (
        <div className="space-y-3 py-8 ">
            <ListTransactionsHeader />

            {sortedTransactionsByDate.map((transaction: Transaction) => (
                <TransactionCard
                    key={transaction.id}
                    transaction={transaction}
                />
            ))}
        </div>
    );
};

export default TransactionCards;
