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
import confetti from "canvas-confetti";
import { FadeIn } from "@/components/fade-in";

export function CreateTransactionDrawer() {
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
                    scrollToTop();
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
                <div className="mx-auto w-full max-w-xs">
                    <FadeIn
                        framerProps={{
                            show: { transition: { delay: 0.25 } },
                        }}
                    >
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
                    </FadeIn>

                    <FadeIn
                        framerProps={{
                            show: { transition: { delay: 0.5 } },
                        }}
                    >
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
                                    disabled={isPending}
                                >
                                    <Plus />
                                    <span className="sr-only">Increase</span>
                                </Button>
                            </div>
                        </div>
                    </FadeIn>

                    <Numpad
                        isPending={isPending}
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

const scrollToTop = () => {
    const scroll = () => {
        const currentPosition = window.pageYOffset;
        const duration = 1000;
        const start = performance.now();

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);

            const easeInOutCubic = (progress: number) => {
                return progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            };

            window.scrollTo({
                top: currentPosition * (1 - easeInOutCubic(progress)),
                behavior: "auto",
            });

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    scroll();
};
