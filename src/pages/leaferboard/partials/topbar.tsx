import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

const LeaferboardTopbar = () => {
    const navigate = useNavigate();

    return (
        <header className="flex items-center justify-between gap-2">
            <Button
                variant="gooeyRight"
                onClick={() => navigate(-1)}
                className="rounded-full h-12 w-12"
            >
                <ArrowLeft className="size-4" />
            </Button>

            <h1 className="font-semibold">Leaferboard</h1>

            <div className="w-12"></div>
        </header>
    );
};

export default LeaferboardTopbar;
