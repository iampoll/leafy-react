export interface FilterOption {
    value: number;
    label: string;
    count: number;
}

export interface FilterProps {
    column?: {
        setFilterValue: (value: string[] | undefined) => void;
    };
}
