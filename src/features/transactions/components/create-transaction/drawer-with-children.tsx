import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { useCreateTransaction } from "../../api/use-create-transaction";
import { toast } from "sonner";
import { useWallet } from "@/features/wallet/contexts/use-wallet";
import Numpad from "./numpad";
import { TransactionTypeSelect } from "./type-select";
import { ExpenseCategorySelect } from "./expense-category-select";
import { useTransactions } from "../../contexts/use-transactions";
import confetti from "canvas-confetti";

export function CreateTransactionDrawerWithChildren({
    children,
}: {
    children: React.ReactNode;
}) {
    const { mutate: createTransaction, isPending } = useCreateTransaction();
    const { refetchTransactions } = useTransactions();
    const { refetchWallet } = useWallet();

    const [isOpen, setIsOpen] = React.useState(false);

    const [transactionAmount, setTransactionAmount] = React.useState(0);
    const [isExpense, setIsExpense] = React.useState(true);
    const [category, setCategory] = React.useState(16);

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
                category: category,
            },
            {
                onSuccess: () => {
                    toast.success("Transaction created successfully");
                    refetchWallet();
                    refetchTransactions();

                    setTransactionAmount(0);
                    setCategory(16);

                    setIsOpen(false);
                    triggerConfetti(isExpense);
                },
                onError: () => {
                    toast.error("Please select a category");
                },
            }
        );
    }

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTitle className="hidden">Create Transaction</DrawerTitle>
            <DrawerDescription className="hidden">
                Create a new transaction to track your spending and income.
            </DrawerDescription>

            <DrawerTrigger className="w-full">{children}</DrawerTrigger>

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

const triggerConfetti = (isExpense: boolean) => {
    const scalar = 2;
    const unicorn = confetti.shapeFromText({
        text: isExpense ? "🍃" : "😃",
        scalar,
    });

    const defaults = {
        spread: 360,
        ticks: 60,
        gravity: 0,
        decay: 0.96,
        startVelocity: 20,
        shapes: [unicorn],
        scalar,
    };

    const shoot = () => {
        confetti({
            ...defaults,
            particleCount: 30,
        });

        confetti({
            ...defaults,
            particleCount: 5,
        });

        confetti({
            ...defaults,
            particleCount: 15,
            scalar: scalar / 2,
            shapes: ["circle"],
        });
    };

    if (isExpense) {
        setTimeout(shoot, 0);
    } else {
        confetti({
            origin: {
                x: 0.5,
                y: 0.5,
            },
        });
    }
};
