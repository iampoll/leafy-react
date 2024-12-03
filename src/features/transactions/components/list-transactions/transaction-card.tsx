import { format } from "date-fns";
import { Transaction } from "./types";
import { Leaf } from "lucide-react";
import { emojisWithBackground } from "@/config";

type TransactionCardProps = {
    transaction: Transaction;
};

const TransactionCard = ({ transaction }: TransactionCardProps) => {
    const formattedDate = format(new Date(transaction.createdAt), "MMM dd");
    const amountColor = transaction.isExpense
        ? "text-red-600"
        : "text-green-600";

    return (
        <section className="flex justify-between items-center py-2">
            <div className="flex gap-2 items-center">
                <div
                    className={`size-10 rounded-full flex items-center justify-center ${
                        emojisWithBackground[transaction.category]
                            .backgroundColor
                    }`}
                >
                    {emojisWithBackground[transaction.category - 1].emoji}
                </div>
                <div>
                    <h3 className="font-medium ">{transaction.categoryName}</h3>
                    <p className="text-sm text-muted-foreground">
                        {formattedDate}
                    </p>
                </div>
            </div>
            <p
                className={`flex gap-1 items-center text-lg font-bold ${amountColor}`}
            >
                <Leaf className="size-2" /> {transaction.amount}
            </p>
        </section>
    );
};

export default TransactionCard;
