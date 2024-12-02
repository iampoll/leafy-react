import { Menu } from "lucide-react";

const Topbar = () => {
    return (
        <header>
            <div className="flex items-center justify-between gap-2">
                <span>Leafy</span>

                <Menu />
            </div>
        </header>
    );
};

export default Topbar;
