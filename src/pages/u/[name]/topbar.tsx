import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

const Topbar = () => {
    const navigate = useNavigate();

    return (
        <header>
            <Button
                variant="gooeyRight"
                onClick={() => navigate(-1)}
                className="rounded-full h-12 w-12"
            >
                <ArrowLeft className="size-4" />
            </Button>
        </header>
    );
};

export default Topbar;
