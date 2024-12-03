import { siteConfig } from "@/config";
import LogoutButton from "@/features/auth/components/logout-button";

const Topbar = () => {
    return (
        <header>
            <div className="flex items-center justify-between gap-2">
                <span className="font-bold uppercase tracking-tighter">
                    {siteConfig.name}
                </span>

                <LogoutButton />
            </div>
        </header>
    );
};

export default Topbar;
