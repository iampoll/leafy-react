import { PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FilterOption } from "./types";

interface FilterTriggerProps {
    selectedValues: Set<number>;
    options: FilterOption[];
}

export function FilterTrigger({ selectedValues, options }: FilterTriggerProps) {
    return (
        <>
            {selectedValues?.size > 0 && (
                <>
                    <Badge
                        variant="secondary"
                        className="rounded-sm px-1 font-normal lg:hidden"
                    >
                        {selectedValues.size}
                    </Badge>
                    <div className="hidden space-x-1 lg:flex">
                        {selectedValues.size > 2 ? (
                            <Badge
                                variant="secondary"
                                className="rounded-sm px-1 font-normal"
                            >
                                {selectedValues.size} selected
                            </Badge>
                        ) : (
                            options
                                .filter((option) =>
                                    selectedValues.has(option.value)
                                )
                                .map((option) => (
                                    <Badge
                                        variant="secondary"
                                        key={option.value}
                                        className="rounded-sm px-1 font-normal"
                                    >
                                        {option.label}
                                    </Badge>
                                ))
                        )}
                    </div>
                    <Separator orientation="vertical" className="mx-2 h-4" />
                </>
            )}
            <PlusCircle className="mr-2 size-4" />
            Filter
        </>
    );
}
