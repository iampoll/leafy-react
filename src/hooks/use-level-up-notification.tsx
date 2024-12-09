import { useState } from "react";

interface LevelUpData {
    currentLevel: number;
    isLeveledUp: boolean;
}

export function useLevelUpNotification() {
    const [isOpen, setIsOpen] = useState(false);
    const [levelData, setLevelData] = useState<LevelUpData>({
        currentLevel: 1,
        isLeveledUp: false,
    });

    const showLevelUp = (data: LevelUpData) => {
        if (data.isLeveledUp) {
            setLevelData(data);
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 3000);
        }
    };

    return {
        isOpen,
        levelData,
        showLevelUp,
    };
}
