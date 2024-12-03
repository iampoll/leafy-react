"use client";

import * as React from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Transaction } from "./types";
import { useDeleteTransaction } from "../../api/use-delete-transaction";
import { useTransactions } from "../../contexts/use-transactions";
import { toast } from "sonner";
import { useWallet } from "@/features/wallet/contexts/use-wallet";
import { UpdateTransactionDrawer } from "../update-transaction/drawer";
import { Button } from "@/components/ui/button";

export function ActionsDropdown({
    children,
    transaction,
}: {
    children: React.ReactNode;
    transaction: Transaction;
}) {
    const { mutate: deleteTransaction } = useDeleteTransaction();
    const { refetchTransactions } = useTransactions();
    const { refetchWallet } = useWallet();

    function handleDeleteTransaction() {
        deleteTransaction(
            { id: transaction.id },
            {
                onSuccess: () => {
                    toast.success("Transaction deleted successfully");
                    refetchTransactions();
                    refetchWallet();
                },
            }
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <UpdateTransactionDrawer transaction={transaction}>
                    <Button variant="ghost" className="w-full justify-start">
                        📝 Edit
                    </Button>
                </UpdateTransactionDrawer>

                <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={handleDeleteTransaction}
                >
                    ❌ Delete
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
