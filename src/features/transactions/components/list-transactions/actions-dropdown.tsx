"use client";

import * as React from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Transaction } from "./types";
import { useDeleteTransaction } from "../../api/use-delete-transaction";
import { useTransactions } from "../../contexts/use-transactions";
import { toast } from "sonner";

export function ActionsDropdown({
    children,
    transaction,
}: {
    children: React.ReactNode;
    transaction: Transaction;
}) {
    const { mutate: deleteTransaction } = useDeleteTransaction();
    const { refetchTransactions } = useTransactions();

    function handleDeleteTransaction() {
        deleteTransaction(
            { id: transaction.id },
            {
                onSuccess: () => {
                    toast.success("Transaction deleted successfully");
                    refetchTransactions();
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
                <DropdownMenuItem>📝 Edit</DropdownMenuItem>
                <DropdownMenuItem onClick={handleDeleteTransaction}>
                    ❌ Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
