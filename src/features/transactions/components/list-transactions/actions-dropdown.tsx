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

export function ActionsDropdown({ children }: { children: React.ReactNode }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>📝 Edit</DropdownMenuItem>
                <DropdownMenuItem>❌ Delete</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
