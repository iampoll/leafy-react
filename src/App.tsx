import Routes from "@/routes";
import { Toaster } from "./components/ui/sonner";
import ShowLeveledUp from "@/components/show-leveled-up";

function App() {
    return (
        <div className="App">
            <ShowLeveledUp />
            <Toaster />

            <Routes />
        </div>
    );
}

export default App;
