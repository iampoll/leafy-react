import { useState } from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { useTransactions } from "@/features/transactions/contexts/use-transactions";
import { FilterTrigger } from "./filter-trigger";
import { createFilterOptions } from "./utils";
import { FilterProps } from "./types";

export default function Filter({ column }: FilterProps) {
    const { transactions, setActiveFilters } = useTransactions();
    const [selectedValues, setSelectedValues] = useState<Set<number>>(
        new Set([])
    );
    const options = createFilterOptions(transactions);

    const handleFilterChange = (newSelectedValues: Set<number>) => {
        setSelectedValues(newSelectedValues);
        const filterValues = Array.from(newSelectedValues);
        setActiveFilters(filterValues.map(String));
        column?.setFilterValue(
            filterValues.length ? filterValues.map(String) : undefined
        );
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="h-8 border-dashed"
                >
                    <FilterTrigger
                        selectedValues={selectedValues}
                        options={options}
                    />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[12.5rem] p-0" align="start">
                <Command>
                    <CommandInput placeholder="Filter" />
                    <CommandList className="max-h-full">
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup className="max-h-[18.75rem] overflow-y-auto overflow-x-hidden">
                            {options.map((option) => {
                                const isSelected = selectedValues.has(
                                    option.value
                                );
                                return (
                                    <CommandItem
                                        key={option.value}
                                        onSelect={() => {
                                            const newSelectedValues = new Set(
                                                selectedValues
                                            );
                                            if (isSelected) {
                                                newSelectedValues.delete(
                                                    option.value
                                                );
                                            } else {
                                                newSelectedValues.add(
                                                    option.value
                                                );
                                            }
                                            handleFilterChange(
                                                newSelectedValues
                                            );
                                        }}
                                    >
                                        <div
                                            className={cn(
                                                "mr-2 flex size-4 items-center justify-center rounded-sm border border-primary",
                                                isSelected
                                                    ? "bg-primary text-primary-foreground"
                                                    : "opacity-50 [&_svg]:invisible"
                                            )}
                                        >
                                            <Check
                                                className="size-4"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <span>{option.label}</span>
                                        {option.count && (
                                            <span className="ml-auto flex size-4 items-center justify-center font-mono text-xs">
                                                {option.count}
                                            </span>
                                        )}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>

                        {selectedValues.size > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={() => {
                                            setSelectedValues(new Set([]));
                                            setActiveFilters([]);
                                            column?.setFilterValue(undefined);
                                        }}
                                        className="justify-center text-center"
                                    >
                                        Clear filters
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
