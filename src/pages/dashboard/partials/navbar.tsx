import { ArrowUp, Plus } from "lucide-react";

import { CreateTransactionDrawerWithChildren } from "@/features/transactions/components/create-transaction/drawer-with-children";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { FadeIn } from "@/components/fade-in";

const Navbar = () => {
    const scrolled = useScrollTop();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!scrolled) return null;

    return (
        <section className="hidden md:block fixed bottom-12 right-1/2 translate-x-1/2 bg-background border-2 border-border text-foreground p-4 rounded-full w-[350px]">
            <div className="flex items-center justify-between gap-2">
                <CreateTransactionDrawerWithChildren>
                    <FadeIn direction="down">
                        <Button
                            variant="expandIcon"
                            Icon={Plus}
                            iconPlacement="left"
                            className="rounded-full h-12 w-full"
                        >
                            Create Transaction
                        </Button>
                    </FadeIn>
                </CreateTransactionDrawerWithChildren>

                <FadeIn direction="down">
                    <Button
                        variant="gooeyRight"
                        onClick={scrollToTop}
                        className="rounded-full h-12 aspect-square"
                    >
                        <ArrowUp className="size-4 group-hover:animate-pulse" />
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
};

export default Navbar;
