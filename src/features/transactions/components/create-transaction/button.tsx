import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useTransactions } from "../../contexts/use-transactions";
import { RainbowButton } from "@/components/rainbow-button";

const CreateTransactionButton = () => {
    const { filteredTransactions } = useTransactions();

    if (!filteredTransactions?.length)
        return <RainbowButton>Create your first transaction</RainbowButton>;

    return (
        <section className="flex gap-2 justify-center">
            <Button
                variant="expandIcon"
                Icon={Plus}
                iconPlacement="left"
                className="rounded-full"
                size="lg"
            >
                Create Transaction
            </Button>
        </section>
    );
};

export default CreateTransactionButton;
