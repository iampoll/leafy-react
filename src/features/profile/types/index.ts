export interface GetProfileByNameResponse {
    name: string;
    level: {
        currentLevel: number;
        experiencePoints: number;
        experienceThreshold: number;
    };
}
