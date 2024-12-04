import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useTransactions } from "../../contexts/use-transactions";
import { RainbowButton } from "@/components/rainbow-button";
import SparklesText from "@/components/sparkles-text";

const CreateTransactionButton = () => {
    const { filteredTransactions } = useTransactions();

    if (!filteredTransactions?.length)
        return (
            <RainbowButton>
                <SparklesText
                    text="Create your first transaction"
                    className="text-sm"
                />
            </RainbowButton>
        );

    return (
        <section className="flex gap-2 justify-center">
            <Button
                variant="expandIcon"
                Icon={Plus}
                iconPlacement="left"
                className="rounded-full w-full"
                size="lg"
            >
                <SparklesText text="Create Transaction" className="text-sm" />
            </Button>
        </section>
    );
};

export default CreateTransactionButton;
