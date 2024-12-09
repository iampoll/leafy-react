import { H1 } from "./ui/typography";
import BlurFade from "./ui/blur-fade";
import { useLevelUp } from "@/providers/use-level-up";
import { useTheme } from "@/providers/theme-provider";

import Meteors from "./ui/meteors";
import { useEffect, useState } from "react";
import Particles from "./ui/particles";

import astraliteDark from "@/assets/astralite.png";
import astraliteLight from "@/assets/astralite-light.png";
import stellarion from "@/assets/stellarion.png";
import stellarionLight from "@/assets/stellarion-light.png";
import nebulaflare from "@/assets/nebulaflare.png";
import nebulaflareLight from "@/assets/nebulaflare-light.png";

const ShowLeveledUp = () => {
    const [color, setColor] = useState("#ffffff");
    const { isOpen, levelData } = useLevelUp();
    const { theme } = useTheme();

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    const calculatePoints = (level: number) => {
        const basePoints = 100;
        const increasePerLevel = 1.1;
        return Math.round(basePoints * Math.pow(increasePerLevel, level - 1));
    };

    if (!isOpen) return null;

    const image = theme === "light" ? astraliteLight : astraliteDark;
    const image2 = theme === "light" ? stellarionLight : stellarion;
    const image3 = theme === "light" ? nebulaflareLight : nebulaflare;

    let finalImage;

    switch (levelData.currentLevel) {
        case 1:
            finalImage = image;
            break;
        case 2:
            finalImage = image2;
            break;
        default:
            finalImage = image3;
            break;
    }

    return (
        <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 h-[100svh] w-[100svw]  p-4  bg-background overflow-hidden">
            <Meteors number={90} />
            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />

            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50  p-16 rounded-lg  overflow-hidden">
                <div className="text-center">
                    <BlurFade delay={0.25}>
                        <H1 className="mb-4 ">
                            Level {levelData.currentLevel}
                        </H1>
                    </BlurFade>

                    <BlurFade delay={0.25}>
                        <p className="text-xs mb-4">
                            You have earned{" "}
                            {calculatePoints(levelData.currentLevel)}+ points!
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.5}>
                        <img
                            src={finalImage}
                            alt="level-up"
                            className="mx-auto"
                            width={150}
                            height={150}
                        />
                    </BlurFade>
                </div>
            </div>
        </section>
    );
};

export default ShowLeveledUp;
