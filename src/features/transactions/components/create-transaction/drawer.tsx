"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer";
import CreateTransactionButton from "./button";
import { useCreateTransaction } from "../../api/use-create-transaction";
import { toast } from "sonner";
import { useWallet } from "@/features/wallet/contexts/use-wallet";
import Numpad from "./numpad";
import { TransactionTypeSelect } from "./type-select";

export function CreateTransactionDrawer() {
    const { mutate: createTransaction } = useCreateTransaction();
    const { refetchWallet } = useWallet();

    const [transactionAmount, setTransactionAmount] = React.useState(0);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isExpense, setIsExpense] = React.useState(true);

    function onClick(adjustment: number) {
        setTransactionAmount(
            Math.max(0, Math.min(10000, transactionAmount + adjustment))
        );
    }

    function onSubmit() {
        createTransaction(
            { isExpense: isExpense, amount: transactionAmount },
            {
                onSuccess: () => {
                    toast.success("Transaction created successfully");
                    refetchWallet();
                    setIsOpen(false);
                    setTransactionAmount(0);
                },
            }
        );
    }

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger className="w-full">
                <CreateTransactionButton />
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <TransactionTypeSelect
                            isExpense={isExpense}
                            setIsExpense={setIsExpense}
                        />
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
