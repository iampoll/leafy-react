import { format } from "date-fns";
import { Transaction } from "./types";
import { Leaf, EllipsisVertical } from "lucide-react";
import { ActionsDropdown } from "./actions-dropdown";
import { Button } from "@/components/ui/button";
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
        <section className="flex justify-between items-center py-2 border border-border pr-2 pl-2 rounded-l-full">
            <div className="flex gap-2 items-center">
                {transaction.isExpense && (
                    <div
                        className={`size-10 rounded-full flex items-center justify-center ${
                            emojisWithBackground[transaction.category]
                                .backgroundColor
                        }`}
                    >
                        {emojisWithBackground[transaction.category - 1].emoji}
                    </div>
                )}

                {!transaction.isExpense && (
                    <div className="size-10 rounded-full flex items-center justify-center bg-green-200">
                        💰
                    </div>
                )}

                <div>
                    <h3 className="font-medium ">
                        {transaction.isExpense
                            ? transaction.categoryName
                            : "Income"}
                    </h3>
                    <p className="text-xs tracking-tight text-muted-foreground">
                        {formattedDate}
                    </p>
                </div>
            </div>
            <p
                className={`flex gap-2 items-center text-lg font-bold ${amountColor}`}
            >
                <Leaf className="size-2" />

                {transaction.amount}
                <ActionsDropdown transaction={transaction}>
                    <Button variant="outline" size="icon">
                        <EllipsisVertical className="size-4 text-foreground" />
                    </Button>
                </ActionsDropdown>
            </p>
        </section>
    );
};

export default TransactionCard;
