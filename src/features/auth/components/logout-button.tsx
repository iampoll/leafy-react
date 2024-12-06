import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/auth-provider";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
    const { logout } = useAuth();

    return (
        <Button onClick={logout} size="sm" variant="ghost">
            <LogOut className="mr-2 rotate-180 size-4" />
            Logout
        </Button>
    );
}
