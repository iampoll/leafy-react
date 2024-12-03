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
import CreateTransactionButton from "./button";
import { useCreateTransaction } from "../../api/use-create-transaction";
import { toast } from "sonner";
import { useWallet } from "@/features/wallet/contexts/use-wallet";
import Numpad from "./numpad";
import { TransactionTypeSelect } from "./type-select";
import { ExpenseCategorySelect } from "./expense-category-select";
import { useTransactions } from "../../contexts/use-transactions";

export function CreateTransactionDrawer() {
    const { mutate: createTransaction } = useCreateTransaction();
    const { refetchTransactions } = useTransactions();
    const { refetchWallet } = useWallet();

    const [isOpen, setIsOpen] = React.useState(false);

    const [transactionAmount, setTransactionAmount] = React.useState(0);
    const [isExpense, setIsExpense] = React.useState(true);
    const [category, setCategory] = React.useState("");

    function onClick(adjustment: number) {
        setTransactionAmount(
            Math.max(0, Math.min(10000, transactionAmount + adjustment))
        );
    }

    function onSubmit() {
        createTransaction(
            {
                isExpense: isExpense,
                amount: transactionAmount,
                // if isExpense is false, i want to set the category to 0
                // category: isExpense ? category : "0",
                category: category,
            },
            {
                onSuccess: () => {
                    toast.success("Transaction created successfully");
                    refetchWallet();
                    refetchTransactions();
                    setIsOpen(false);
                    setTransactionAmount(0);
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

            <DrawerTrigger className="w-full">
                <CreateTransactionButton />
            </DrawerTrigger>

            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader className="flex justify-between">
                        <TransactionTypeSelect
                            isExpense={isExpense}
                            setIsExpense={setIsExpense}
                        />

                        {isExpense ? (
                            <ExpenseCategorySelect
                                category={category}
                                setCategory={setCategory}
                            />
                        ) : (
                            <div className="w-full"></div>
                        )}
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
                                disabled={transactionAmount >= 10000}
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
