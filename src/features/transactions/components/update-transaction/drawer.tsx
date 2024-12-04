"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { toast } from "sonner";
import { useWallet } from "@/features/wallet/contexts/use-wallet";
import { useTransactions } from "../../contexts/use-transactions";
import { useUpdateTransaction } from "../../api/use-update-transaction";
import { Transaction } from "../list-transactions/types";
import { TransactionTypeSelect } from "../create-transaction/type-select";
import { ExpenseCategorySelect } from "../create-transaction/expense-category-select";
import Numpad from "../create-transaction/numpad";

export function UpdateTransactionDrawer({
    children,
    transaction,
}: {
    children: React.ReactNode;
    transaction: Transaction;
}) {
    const { mutate: updateTransaction, isPending } = useUpdateTransaction();
    const { refetchTransactions } = useTransactions();
    const { refetchWallet } = useWallet();

    const [transactionAmount, setTransactionAmount] = React.useState(
        transaction.amount
    );
    const [isExpense, setIsExpense] = React.useState(transaction.isExpense);
    const [category, setCategory] = React.useState(transaction.category);
    const [isOpen, setIsOpen] = React.useState(false);

    function onClick(adjustment: number) {
        setTransactionAmount(
            Math.max(0, Math.min(10000, transactionAmount + adjustment))
        );
    }

    function onSubmit() {
        updateTransaction(
            {
                id: transaction.id,
                isExpense: isExpense,
                amount: transactionAmount,
                category: category,
            },
            {
                onSuccess: () => {
                    toast.success("Transaction updated successfully");
                    refetchWallet();
                    refetchTransactions();
                    setIsOpen(false);
                },
                onError: () => {
                    toast.error("Please select a category");
                },
            }
        );
    }

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTitle></DrawerTitle>
            <DrawerTrigger className="w-full">{children}</DrawerTrigger>

            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader className="flex justify-between">
                        <TransactionTypeSelect
                            isExpense={isExpense}
                            setIsExpense={setIsExpense}
                        />

                        {isExpense && (
                            <ExpenseCategorySelect
                                category={category}
                                setCategory={(value) => setCategory(value)}
                            />
                        )}

                        {!isExpense && <div className="w-full"></div>}
                    </DrawerHeader>

                    <div className="p-4 pb-0">
                        <div className="flex items-center justify-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 shrink-0 rounded-full"
                                onClick={() => onClick(-10)}
                                disabled={transactionAmount <= 0}
                            >
                                <Minus />
                                <span className="sr-only">Decrease</span>
                            </Button>

                            <div className="flex-1 text-center">
                                <div className="text-7xl font-bold tracking-tighter">
                                    {transactionAmount}
                                </div>
                                <div className="text-[0.70rem] uppercase text-muted-foreground">
                                    Leaves
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 shrink-0 rounded-full"
                                onClick={() => onClick(10)}
                                disabled={
                                    transactionAmount >= 10000 || isPending
                                }
                            >
                                <Plus />
                                <span className="sr-only">Increase</span>
                            </Button>
                        </div>
                    </div>

                    <Numpad
                        transactionAmount={transactionAmount}
                        onSubmit={onSubmit}
                        setTransactionAmount={setTransactionAmount}
                    />
                    <DrawerFooter></DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
