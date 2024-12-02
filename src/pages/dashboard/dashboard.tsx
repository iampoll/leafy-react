import useUser from "@/hooks/use-user";

import { Button } from "@/components/ui/button";

const Dashboard = () => {
    const { handleLogout } = useUser();

    return (
        <div>
            <p>Dashboard</p>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default Dashboard;
