import { ChevronDown, LogOut, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useUser } from "@/providers/user-provider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/auth-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const UserButton = () => {
    const { user } = useUser();
    const { logout } = useAuth();

    const navigate = useNavigate();

    if (!user) {
        return null;
    }

    const handleLogout = async () => {
        await logout();

        navigate("/login");
    };

    const firstLetter = user.name.charAt(0).toUpperCase();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>
                    <Button
                        variant="ghost"
                        className="gap-4 text-xs px-0 items-center md:hidden"
                    >
                        <span className="h-8 w-8 p-4 flex justify-center items-center rounded-full border border-border">
                            {firstLetter}
                        </span>
                    </Button>

                    <Button
                        variant="ghost"
                        className="gap-2 text-xs px-4 py-0 items-center hidden md:flex"
                    >
                        <span>{user?.name}</span>

                        <ChevronDown className="size-4" />
                    </Button>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="max-w-[10rem]" align="end">
                <ThemeToggle />

                <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                    onClick={() => navigate(`/u/${user.nameSlug}`)}
                >
                    <User className="size-4" />
                    Profile
                </Button>

                <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                    onClick={handleLogout}
                >
                    <LogOut className="size-4" />
                    Logout
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserButton;
