import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/ui/cool-mode";
import { FadeIn } from "@/components/fade-in";

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
            <FadeIn
                framerProps={{
                    show: { transition: { delay: 0.75 } },
                }}
            >
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
                        <FadeIn
                            direction="right"
                            framerProps={{
                                show: { transition: { delay: 1.75 } },
                            }}
                            className="w-full"
                        >
                            ⌫
                        </FadeIn>
                    </Button>
                </section>
            </FadeIn>

            <section className="flex w-full">
                <div className="w-[75%]">
                    <FadeIn
                        framerProps={{
                            show: { transition: { delay: 1 } },
                        }}
                    >
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
                    </FadeIn>
                    <FadeIn
                        framerProps={{
                            show: { transition: { delay: 1.25 } },
                        }}
                    >
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
                    </FadeIn>
                    <FadeIn
                        framerProps={{
                            show: { transition: { delay: 1.75 } },
                        }}
                    >
                        <section className="flex justify-around ">
                            <CoolMode>
                                <Button
                                    className="w-full rounded-3xl aspect-square h-20 text-2xl bg-bg"
                                    variant="secondary"
                                >
                                    🔴
                                </Button>
                            </CoolMode>
                            <Button
                                className="w-full rounded-3xl aspect-square h-20 text-2xl"
                                variant="secondary"
                                onClick={() => handleNumberClick(0)}
                            >
                                0
                            </Button>
                            <CoolMode
                                options={{
                                    particle:
                                        "https://png.pngtree.com/png-vector/20230215/ourmid/pngtree-dizzy-funny-leaf-facial-expression-emoji-icon-png-image_6601965.png",
                                }}
                            >
                                <Button
                                    className="w-full rounded-3xl aspect-square h-20 text-2xl bg-bg"
                                    variant="secondary"
                                >
                                    🍃
                                </Button>
                            </CoolMode>
                        </section>
                    </FadeIn>
                </div>

                <div className="flex justify-around w-[25%]">
                    <FadeIn
                        direction="right"
                        framerProps={{
                            show: { transition: { delay: 2 } },
                        }}
                        className="w-full"
                    >
                        <Button
                            className="w-full rounded-3xl h-full"
                            onClick={onSubmit}
                            disabled={transactionAmount === 0}
                        >
                            <Check />
                        </Button>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Numpad;
