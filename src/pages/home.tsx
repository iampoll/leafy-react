import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <span>Home</span>

            <Link to="/login">
                <Button>Login</Button>
            </Link>
        </div>
    );
};

export default Home;
