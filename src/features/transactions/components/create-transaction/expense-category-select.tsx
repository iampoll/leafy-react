import {
    Select,
    SelectItem,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useGetCategories } from "../../api/use-get-categories";

type Category = {
    id: string;
    name: string;
};

export function ExpenseCategorySelect({
    category,
    setCategory,
}: {
    category: string;
    setCategory: (category: string) => void;
}) {
    const { data: categories, isLoading, isError, error } = useGetCategories();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error?.message}</div>;

    const emojis = [
        "🏠",
        "💧",
        "🌐",
        "🍽️",
        "🍴",
        "🚗",
        "🛢️",
        "📚",
        "🎓",
        "🏥",
        "🧼",
        "🧺",
        "🎭",
        "📺",
        "💰",
    ];

    return (
        <Select
            defaultValue={category}
            onValueChange={(value) => setCategory(value)}
        >
            <SelectTrigger className="rounded-full py-6 px-6">
                <SelectValue placeholder="Select category" />
            </SelectTrigger>

            <SelectContent>
                {categories?.map((category: Category, index: number) => (
                    <SelectItem value={category.id}>
                        {emojis[index]} {category.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
