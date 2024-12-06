import { Button } from "@/components/ui/button";
import { useUser } from "@/providers/user-provider";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
    const { handleLogout } = useUser();

    return (
        <Button onClick={handleLogout} size="sm" variant="ghost">
            <LogOut className="mr-2 rotate-180 size-4" />
            Logout
        </Button>
    );
}
