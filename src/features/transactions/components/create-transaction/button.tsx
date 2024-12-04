import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const CreateTransactionButton = () => {
    return (
        <section className="flex gap-2 justify-center">
            {/* <Button variant="gooeyLeft" className="rounded-full" size="lg">
                <Plus className="mr-2 size-4" />
                Create Transaction
            </Button> */}

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
