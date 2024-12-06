import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    if (theme === "dark") {
        return (
            <Button
                className="w-full justify-start gap-2 px-4"
                variant="ghost"
                size="icon"
                onClick={() => setTheme("light")}
            >
                <Sun className="size-4" /> Light
            </Button>
        );
    }

    return (
        <Button
            className="w-full justify-start gap-2 px-4"
            variant="ghost"
            size="icon"
            onClick={() => setTheme("dark")}
        >
            <Moon className="size-4" /> Dark
        </Button>
    );
}
