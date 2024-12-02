import LogoutButton from "@/features/auth/components/logout-button";
import { useGetWallet } from "@/features/wallet/api/get-wallet";

const Dashboard = () => {
    const { data, isLoading, isError, error } = useGetWallet();

    if (isLoading) {
        return <div>Loading wallet info...</div>;
    }
    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <p>Dashboard</p>
            <LogoutButton />
            <p> Wallet balance: {data.balance}</p>
        </div>
    );
};

export default Dashboard;
