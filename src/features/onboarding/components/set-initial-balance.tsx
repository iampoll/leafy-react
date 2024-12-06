import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import NumberInput from "@/components/number-input";
import { useState } from "react";
import { useCreateWallet } from "@/features/wallet/api/use-create-wallet";
import { useUser } from "@/providers/user-provider";
import SparklesText from "@/components/sparkles-text";

const SetInitialBalance = () => {
    const { refetchUser } = useUser();

    const [balance, setBalance] = useState(0);
    const { mutate: createWallet, isPending } = useCreateWallet();

    const handleSetBalance = (value: number) => {
        setBalance(value);
    };

    const handleCreateWallet = () => {
        try {
            createWallet(balance, {
                onSuccess: async () => {
                    await Promise.all([refetchUser()]);
                },
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="space-y-4">
            <SparklesText text="Set initial balance" />

            <NumberInput onValueChange={handleSetBalance} />

            <Button
                size="lg"
                variant="expandIcon"
                Icon={ArrowRightIcon}
                iconPlacement="right"
                className="w-full border-black border-2 font-bold h-12"
                onClick={handleCreateWallet}
                disabled={isPending || balance === 0}
            >
                Set balance
            </Button>
        </div>
    );
};

export default SetInitialBalance;
