import { createContext, useContext, ReactNode, useState } from "react";

interface LevelUpData {
    currentLevel: number;
    isLeveledUp: boolean;
}

interface LevelUpContextType {
    isOpen: boolean;
    levelData: LevelUpData;
    showLevelUp: (data: LevelUpData) => void;
}

const LevelUpContext = createContext<LevelUpContextType | undefined>(undefined);

export function LevelUpNotificationProvider({
    children,
}: {
    children: ReactNode;
}) {
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

    return (
        <LevelUpContext.Provider value={{ isOpen, levelData, showLevelUp }}>
            {children}
        </LevelUpContext.Provider>
    );
}

export function useLevelUp() {
    const context = useContext(LevelUpContext);
    if (context === undefined) {
        throw new Error(
            "useLevelUp must be used within LevelUpNotificationProvider"
        );
    }
    return context;
}
