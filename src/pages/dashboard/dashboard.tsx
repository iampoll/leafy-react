import { Button } from "@/components/ui/button";
import LogoutButton from "@/features/auth/components/logout-button";

import Balance from "@/features/wallet/components/balance";

const Dashboard = () => {
    return (
        <div className="space-y-4">
            <Balance />

            <section className="flex gap-2">
                <Button>Deposit</Button>
                <Button variant="secondary">Expenses</Button>
            </section>

            <LogoutButton />
        </div>
    );
};

export default Dashboard;
