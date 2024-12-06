import {
    Select,
    SelectItem,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useGetCategories } from "../../api/use-get-categories";
import { emojisWithBackground } from "@/config";
import { Category } from "../../types";

export function ExpenseCategorySelect({
    category,
    setCategory,
}: {
    category: number;
    setCategory: (category: number) => void;
}) {
    const { data: categories, isLoading, isError, error } = useGetCategories();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error?.message}</div>;
    if (!categories) return <div>No categories found</div>;

    return (
        <Select
            defaultValue={category.toString()}
            onValueChange={(value) => setCategory(Number(value))}
        >
            <SelectTrigger className="rounded-full py-6 px-6 bg-purple-200 border-none text-black">
                <SelectValue placeholder="Select category" />
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="16" disabled>
                    <span className="flex gap-2 items-center">
                        Select category
                    </span>
                </SelectItem>
                {categories
                    ?.filter((category: Category) => Number(category.id) !== 16)
                    .map((category: Category, index: number) => (
                        <SelectItem
                            value={category.id.toString()}
                            key={category.id}
                        >
                            {emojisWithBackground[index].emoji} {category.name}
                        </SelectItem>
                    ))}
            </SelectContent>
        </Select>
    );
}
