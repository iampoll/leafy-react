import {
    Select,
    SelectItem,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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
                <SelectItem value="true">Expense</SelectItem>
                <SelectItem value="false">Income</SelectItem>
            </SelectContent>
        </Select>
    );
}
