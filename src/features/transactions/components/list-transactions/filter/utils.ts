import { Transaction } from "../types";

export function createFilterOptions(transactions: Transaction[]) {
    return Array.from(
        new Map(
            transactions.map((transaction) => [
                transaction.category,
                {
                    value: transaction.category,
                    label: transaction.categoryName,
                    count: transactions.filter(
                        (t) => t.category === transaction.category
                    ).length,
                },
            ])
        ).values()
    );
}
