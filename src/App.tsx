import Routes from "@/routes";
import { Toaster } from "./components/ui/sonner";

function App() {
    return (
        <div className="App">
            <Toaster />

            <Routes />
        </div>
    );
}

export default App;
