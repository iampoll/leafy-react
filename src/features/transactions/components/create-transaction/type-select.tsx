import {
    Select,
    SelectItem,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Frown, Laugh } from "lucide-react";

export function TransactionTypeSelect({
    isExpense,
    setIsExpense,
}: {
    isExpense: boolean;
    setIsExpense: (isExpense: boolean) => void;
}) {
    return (
        <Select
            defaultValue={isExpense ? "true" : "false"}
            onValueChange={(value) => setIsExpense(value === "true")}
        >
            <SelectTrigger
                className={`rounded-full py-6 px-6 ${
                    isExpense ? "bg-red-200" : "bg-green-200"
                }`}
            >
                <SelectValue placeholder="Select a transaction type" />
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="true">
                    <span className="flex gap-2 items-center">
                        <Frown className="size-4" />
                        Expense
                    </span>
                </SelectItem>
                <SelectItem value="false">
                    <span className="flex gap-2 items-center">
                        <Laugh className="size-4" />
                        Income
                    </span>
                </SelectItem>
            </SelectContent>
        </Select>
    );
}
