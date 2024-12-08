import { siteConfig } from "@/config";
import UserButton from "./user-button";
import { ChartNoAxesColumn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
    const navigate = useNavigate();

    return (
        <header>
            <div className="flex items-center justify-between gap-2">
                <span className="font-bold uppercase tracking-tighter">
                    {siteConfig.name}
                </span>

                <div className="flex items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => navigate("/leaferboard")}
                    >
                        <ChartNoAxesColumn />
                    </Button>

                    <UserButton />
                </div>
            </div>
        </header>
    );
};

export default Topbar;
