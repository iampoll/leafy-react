import Topbar from "./partials/topbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-sm p-4 mx-auto space-y-4">
            <Topbar />

            {children}
        </div>
    );
};

export default DashboardLayout;
