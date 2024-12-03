import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const CreateTransactionButton = () => {
    return (
        <section className="flex gap-2 justify-center">
            <Button className="rounded-full" size="lg">
                <Plus className="mr-2 size-4" />
                Create Transaction
            </Button>
        </section>
    );
};

export default CreateTransactionButton;
