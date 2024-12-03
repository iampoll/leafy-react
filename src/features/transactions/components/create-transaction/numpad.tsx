import { Button } from "@/components/ui/button";
import { Check, Delete } from "lucide-react";

const Numpad = ({
    transactionAmount,
    setTransactionAmount,
    onSubmit,
}: {
    transactionAmount: number;
    setTransactionAmount: (amount: number) => void;
    onSubmit: () => void;
}) => {
    const handleNumberClick = (num: number) => {
        const newAmount = Number(transactionAmount.toString() + num);
        setTransactionAmount(newAmount);
    };

    const handleDelete = () => {
        const amountStr = transactionAmount.toString();
        if (amountStr.length <= 1) {
            setTransactionAmount(0);
        } else {
            const newAmount = Number(amountStr.slice(0, -1));
            setTransactionAmount(newAmount);
        }
    };

    return (
        <div className="mt-4">
            <section className="flex justify-around ">
                <Button
                    className="w-full rounded-3xl aspect-square h-20 text-2xl"
                    variant="secondary"
                    onClick={() => handleNumberClick(1)}
                >
                    1
                </Button>
                <Button
                    className="w-full rounded-3xl aspect-square h-20 text-2xl"
                    variant="secondary"
                    onClick={() => handleNumberClick(2)}
                >
                    2
                </Button>
                <Button
                    className="w-full rounded-3xl aspect-square h-20 text-2xl"
                    variant="secondary"
                    onClick={() => handleNumberClick(3)}
                >
                    3
                </Button>
                <Button
                    className="w-full rounded-3xl aspect-square h-20 text-2xl bg-red-200"
                    variant="secondary"
                    onClick={handleDelete}
                >
                    <Delete />
                </Button>
            </section>

            <section className="flex w-full">
                <div className="w-[75%]">
                    <section className="flex justify-around ">
                        <Button
                            className="w-full rounded-3xl aspect-square h-20 text-2xl"
                            variant="secondary"
                            onClick={() => handleNumberClick(4)}
                        >
                            4
                        </Button>
                        <Button
                            className="w-full rounded-3xl aspect-square h-20 text-2xl"
                            variant="secondary"
                            onClick={() => handleNumberClick(5)}
                        >
                            5
                        </Button>
                        <Button
                            className="w-full rounded-3xl aspect-square h-20 text-2xl"
                            variant="secondary"
                            onClick={() => handleNumberClick(6)}
                        >
                            6
                        </Button>
                    </section>
                    <section className="flex justify-around ">
                        <Button
                            className="w-full rounded-3xl aspect-square h-20 text-2xl"
                            variant="secondary"
                            onClick={() => handleNumberClick(7)}
                        >
                            7
                        </Button>
                        <Button
                            className="w-full rounded-3xl aspect-square h-20 text-2xl"
                            variant="secondary"
                            onClick={() => handleNumberClick(8)}
                        >
                            8
                        </Button>
                        <Button
                            className="w-full rounded-3xl aspect-square h-20 text-2xl"
                            variant="secondary"
                            onClick={() => handleNumberClick(9)}
                        >
                            9
                        </Button>
                    </section>
                    <section className="flex justify-around ">
                        <Button
                            className="w-full rounded-3xl aspect-square h-20 text-2xl bg-yellow-200"
                            variant="secondary"
                        ></Button>
                        <Button
                            className="w-full rounded-3xl aspect-square h-20 text-2xl"
                            variant="secondary"
                            onClick={() => handleNumberClick(0)}
                        >
                            0
                        </Button>
                        <Button
                            className="w-full rounded-3xl aspect-square h-20 text-2xl bg-orange-200"
                            variant="secondary"
                        ></Button>
                    </section>
                </div>

                <div className="flex justify-around w-[25%]">
                    <Button
                        className="w-full rounded-3xl h-full"
                        onClick={onSubmit}
                        disabled={transactionAmount === 0}
                    >
                        <Check />
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Numpad;
