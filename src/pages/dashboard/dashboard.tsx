import useUser from "@/hooks/use-user";

import { Button } from "@/components/ui/button";
import { useGetWallet } from "@/features/wallet/api/get-wallet";

const Dashboard = () => {
    const { handleLogout } = useUser();
    const { data, isLoading, isError, error } = useGetWallet();

    if (isLoading) {
        return <div>Loading wallet info...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    console.log(data);

    return (
        <div>
            <p>Dashboard</p>
            <Button onClick={handleLogout}>Logout</Button>
            <p> Wallet balance: {data.balance}</p>
        </div>
    );
};

export default Dashboard;
