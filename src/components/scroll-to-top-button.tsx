import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
    const scrolled = useScrollTop();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Button
            className={cn(
                "hover:scale-110 fixed md:hidden bottom-12 right-1/2 translate-x-1/2 md:right-6 md:translate-x-0 rounded-full px-4 py-8 transition-opacity",
                scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            onClick={scrollToTop}
        >
            <ArrowUp className="size-4" />
        </Button>
    );
}
