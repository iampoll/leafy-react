export type Transaction = {
    id: number;
    amount: number;
    category: number;
    categoryName: string;
    isExpense: boolean;
    createdAt: string;
};

export type Category = {
    id: string;
    name: string;
};

export interface CreateTransactionParams {
    isExpense: boolean;
    amount: number;
    category: number;
}

export interface UpdateTransactionParams {
    id: number;
    isExpense: boolean;
    amount: number;
    category: number;
}

export interface DeleteTransactionParams {
    id: number;
}
