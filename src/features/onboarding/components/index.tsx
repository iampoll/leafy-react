import { useUser } from "@/providers/user-provider";
import SetInitialBalance from "./set-initial-balance";
import SetName from "./set-name";
import OnboardingLayout from "./layout";

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
