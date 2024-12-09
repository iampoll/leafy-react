import { H1 } from "./ui/typography";
import astralite from "@/assets/astralite.png";
import BlurFade from "./ui/blur-fade";
import { useLevelUp } from "@/providers/use-level-up";

const ShowLeveledUp = () => {
    const { isOpen, levelData } = useLevelUp();

    if (!isOpen) return null;

    return (
        <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 h-[100svh] w-[100svw]  p-4  bg-background overflow-hidden">
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50  p-4 rounded-lg shadow-lg overflow-hidden">
                <BlurFade delay={0.25}>
                    <div className="text-center">
                        <H1 className="mb-4 ">
                            Level {levelData.currentLevel.toString()}
                        </H1>
                        {/* <p className="text-sm mb-4">
                        You have earned {levelData.currentLevel * 100}+ points!
                    </p> */}

                        <img
                            src={astralite}
                            alt="level-up"
                            className="mx-auto"
                            width={100}
                            height={100}
                        />
                    </div>
                </BlurFade>
            </div>
        </section>
    );
};

export default ShowLeveledUp;
