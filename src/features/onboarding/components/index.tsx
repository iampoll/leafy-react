import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/typography";
import OnboardingLayout from "@/layouts/onboarding";
import NumberInput from "@/components/number-input";

const Onboarding = () => {
    return (
        <OnboardingLayout>
            <div className="space-y-4">
                <H1>Set your initial balance</H1>
                {/* <Input
                    type="number"
                    className="w-full border-black border-2 font-bold h-12"
                    placeholder="1000"
                /> */}

                <NumberInput />

                <Button
                    size="lg"
                    variant="expandIcon"
                    Icon={ArrowRightIcon}
                    iconPlacement="right"
                    className="w-full border-black border-2 font-bold h-12"
                >
                    Set balance
                </Button>
            </div>
        </OnboardingLayout>
    );
};

export default Onboarding;
