import {
    Select,
    SelectItem,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function ExpenseCategorySelect({
    category,
    setCategory,
}: {
    category: string;
    setCategory: (category: string) => void;
}) {
    return (
        <Select
            defaultValue={category}
            onValueChange={(value) => setCategory(value)}
        >
            <SelectTrigger className="rounded-full py-6 px-6">
                <SelectValue placeholder="Select category" />
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="rent">🏠 Rent</SelectItem>
                <SelectItem value="utilities">💧 Utilities</SelectItem>
                <SelectItem value="internet">🌐 Internet</SelectItem>

                <SelectItem value="groceries">🍽️ Groceries</SelectItem>
                <SelectItem value="food">🍴 Food</SelectItem>

                <SelectItem value="transport">🚗 Transportation</SelectItem>
                <SelectItem value="fuel">🛢️ Fuel</SelectItem>

                <SelectItem value="books">📚 Books & Supplies</SelectItem>
                <SelectItem value="courses">🎓 Course Fees</SelectItem>

                <SelectItem value="health">🏥 Healthcare</SelectItem>
                <SelectItem value="personal">🧼 Personal Care</SelectItem>
                <SelectItem value="laundry">🧺 Laundry</SelectItem>

                <SelectItem value="entertainment">🎭 Entertainment</SelectItem>
                <SelectItem value="subscriptions">📺 Subscriptions</SelectItem>

                <SelectItem value="other">💰 Other</SelectItem>
            </SelectContent>
        </Select>
    );
}
