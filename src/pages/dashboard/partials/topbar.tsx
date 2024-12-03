import LogoutButton from "@/features/auth/components/logout-button";
// import { Menu } from "lucide-react";

const Topbar = () => {
    return (
        <header>
            <div className="flex items-center justify-between gap-2">
                <span className="font-bold uppercase tracking-tighter">
                    Leafy
                </span>

                {/* <Menu /> */}
                <LogoutButton />
            </div>
        </header>
    );
};

export default Topbar;
