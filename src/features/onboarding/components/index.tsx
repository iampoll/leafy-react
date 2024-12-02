import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/typography";
import OnboardingLayout from "@/layouts/onboarding";
import NumberInput from "@/components/number-input";
import { useState } from "react";
import { useCreateWallet } from "@/features/wallet/api/create-wallet";

const Onboarding = () => {
    const [balance, setBalance] = useState(0);
    const { mutate: createWallet, isPending } = useCreateWallet();

    const handleSetBalance = (value: number) => {
        setBalance(value);
    };

    const handleCreateWallet = () => {
        try {
            createWallet(balance);

            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <OnboardingLayout>
            <div className="space-y-4">
                <H1>Set your initial balance</H1>
                {/* <Input
                    type="number"
                    className="w-full border-black border-2 font-bold h-12"
                    placeholder="1000"
                /> */}

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
        </OnboardingLayout>
    );
};

export default Onboarding;
