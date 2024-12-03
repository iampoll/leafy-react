import { useGetTransactions } from "../../api/use-get-transactions";
import TransactionCard from "./transaction-card";
import { Transaction } from "./types";

const TransactionCards = () => {
    const { data: transactions, isLoading, error } = useGetTransactions();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!transactions?.length) return <div>No transactions found</div>;

    const sortedTransactionsByDate = transactions.sort(
        (a: Transaction, b: Transaction) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return (
        <div className="space-y-3 mt-6">
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
