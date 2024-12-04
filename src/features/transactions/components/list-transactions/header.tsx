import Filter from "./filter";

const ListTransactionsHeader = () => {
    return (
        <header className="flex justify-between items-center">
            <h1 className="font-semibold">Transactions</h1>

            <Filter />
        </header>
    );
};

export default ListTransactionsHeader;
