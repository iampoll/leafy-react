import { Button } from "@/components/ui/button";
import useUser from "@/hooks/use-user";

export default function LogoutButton() {
    const { handleLogout } = useUser();
    return <Button onClick={handleLogout}>Logout</Button>;
}
