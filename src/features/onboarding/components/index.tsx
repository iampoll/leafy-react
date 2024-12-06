import OnboardingLayout from "@/layouts/onboarding";
import { useUser } from "@/hooks/use-user";
import SetInitialBalance from "./set-initial-balance";
import SetName from "./set-name";

const Onboarding = () => {
    const { user } = useUser();

    if (!user) {
        return null;
    }

    const isHaveName = user.name !== "";

    return (
        <OnboardingLayout>
            {isHaveName ? <SetInitialBalance /> : <SetName />}
        </OnboardingLayout>
    );
};

export default Onboarding;
