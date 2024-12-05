import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { FadeIn } from "@/components/fade-in";
import { CreateTransactionDrawer } from "@/features/transactions/components/create-transaction/drawer";

const Navbar = () => {
    const scrolled = useScrollTop();

    const scrollToTop = () => {
        const currentPosition = window.pageYOffset;
        const duration = 1000;
        const start = performance.now();

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);

            const easeInOutCubic = (progress: number) => {
                return progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            };

            window.scrollTo({
                top: currentPosition * (1 - easeInOutCubic(progress)),
                behavior: "auto",
            });

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    if (!scrolled) return null;

    return (
        <section className="hidden md:block fixed bottom-12 right-1/2 translate-x-1/2 bg-background border-2 border-border text-foreground p-4 rounded-full w-[350px]">
            <div className="flex items-center justify-between gap-2">
                <FadeIn direction="down" className="w-full">
                    <CreateTransactionDrawer />
                </FadeIn>

                <FadeIn direction="down">
                    <Button
                        variant="gooeyRight"
                        onClick={scrollToTop}
                        className="rounded-full h-12 aspect-square hover:mb-2"
                    >
                        <ArrowUp className="size-4 group-hover:animate-pulse" />
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
};

export default Navbar;
