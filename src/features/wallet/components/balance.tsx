import NumberTicker from "@/components/number-ticker";
import { useWallet } from "../contexts/use-wallet";

const Balance = () => {
    const { wallet, isLoading, isError, error } = useWallet();

    if (isLoading) {
        return <div>Loading wallet info...</div>;
    }
    if (isError) {
        return <div>Error: {error?.message}</div>;
    }
    if (!wallet) {
        return <div>No wallet found</div>;
    }

    return (
        <section
            className={`flex gap-2 items-center justify-center ${
                wallet.balance < 0 && "text-red-500"
            }`}
        >
            🍃
            <NumberTicker
                value={wallet.balance}
                className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
            />
        </section>
    );
};

export default Balance;
