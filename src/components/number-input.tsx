import { Input } from "@/components/ui/input";

export default function NumberInput() {
    return (
        <div className="space-y-2 font-bold">
            <div className="relative">
                <Input
                    className="peer pe-12 ps-6 w-full border-black border-2 font-bold h-12"
                    placeholder="0.00"
                    type="number"
                />
                <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm text-muted-foreground peer-disabled:opacity-50">
                    ₱
                </span>
                <span className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm text-muted-foreground peer-disabled:opacity-50">
                    PHP
                </span>
            </div>
        </div>
    );
}
