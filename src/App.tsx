import Routes from "@/routes";
import { Toaster } from "./components/ui/sonner";

function App() {
    return (
        <div className="App">
            <Routes />

            <Toaster />
        </div>
    );
}

export default App;
