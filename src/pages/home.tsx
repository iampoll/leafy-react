import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { siteConfig } from "@/config";
import { LogIn } from "lucide-react";

const Home = () => {
    return (
        <div className="h-[100svh] flex flex-col items-center justify-center">
            <motion.div
                initial={{ scale: 2, y: 0 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                    },
                }}
            >
                <Logo />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex flex-col items-center gap-4 mt-8"
            >
                <span className="text-2xl font-bold uppercase">
                    {siteConfig.name}
                </span>

                <span className="text-sm text-muted-foreground">
                    {siteConfig.description}
                </span>

                <Link to="/login">
                    <Button variant="gooeyLeft">
                        Sign in
                        <LogIn className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </motion.div>
        </div>
    );
};

export default Home;

const Logo = () => {
    return (
        <div className="w-24 aspect-square" id="logo">
            <svg
                fill="#000000"
                viewBox="0 0 256 256"
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M162.44678,203.00293a87.1861,87.1861,0,0,1-45.79834,12.84473c-1.1084,0-2.21826-.01954-3.33545-.05957-15.95691-.56855-32.06445-5.22327-47.96338-13.8238L165.65674,101.65674a7.99984,7.99984,0,0,0-11.31348-11.31348L54.03589,190.65027c-8.60083-15.89911-13.25537-32.00647-13.824-47.96326A87.32048,87.32048,0,0,1,52.99756,93.55322C79.05371,50.53076,140.15625,27.521,216.46973,32.01367a8.00074,8.00074,0,0,1,7.5166,7.5166C228.47461,115.83447,205.46924,176.94629,162.44678,203.00293ZM57.14014,196.11621c-1.09119-1.8186-2.11719-3.64123-3.10425-5.46594l-19.69263,19.6925a8.00018,8.00018,0,0,0,11.31348,11.31446l19.69287-19.69294c-1.82446-.98693-3.647-2.01287-5.46533-3.10394A7.99592,7.99592,0,0,1,57.14014,196.11621Z"></path>{" "}
                </g>

                <motion.path
                    d="M162.44678,203.00293a87.1861,87.1861,0,0,1-45.79834,12.84473c-1.1084,0-2.21826-.01954-3.33545-.05957-15.95691-.56855-32.06445-5.22327-47.96338-13.8238L165.65674,101.65674a7.99984,7.99984,0,0,0-11.31348-11.31348L54.03589,190.65027c-8.60083-15.89911-13.25537-32.00647-13.824-47.96326A87.32048,87.32048,0,0,1,52.99756,93.55322C79.05371,50.53076,140.15625,27.521,216.46973,32.01367a8.00074,8.00074,0,0,1,7.5166,7.5166C228.47461,115.83447,205.46924,176.94629,162.44678,203.00293ZM57.14014,196.11621c-1.09119-1.8186-2.11719-3.64123-3.10425-5.46594l-19.69263,19.6925a8.00018,8.00018,0,0,0,11.31348,11.31446l19.69287-19.69294c-1.82446-.98693-3.647-2.01287-5.46533-3.10394A7.99592,7.99592,0,0,1,57.14014,196.11621Z"
                    stroke="white"
                    fill="transparant"
                    initial={{
                        pathLength: 0,
                        pathOffset: 1,
                    }}
                    animate={{
                        pathLength: 1,
                        pathOffset: 0,
                    }}
                    transition={{ duration: 0.75 }}
                />
                <motion.path
                    d="M162.44678,203.00293a87.1861,87.1861,0,0,1-45.79834,12.84473c-1.1084,0-2.21826-.01954-3.33545-.05957-15.95691-.56855-32.06445-5.22327-47.96338-13.8238L165.65674,101.65674a7.99984,7.99984,0,0,0-11.31348-11.31348L54.03589,190.65027c-8.60083-15.89911-13.25537-32.00647-13.824-47.96326A87.32048,87.32048,0,0,1,52.99756,93.55322C79.05371,50.53076,140.15625,27.521,216.46973,32.01367a8.00074,8.00074,0,0,1,7.5166,7.5166C228.47461,115.83447,205.46924,176.94629,162.44678,203.00293ZM57.14014,196.11621c-1.09119-1.8186-2.11719-3.64123-3.10425-5.46594l-19.69263,19.6925a8.00018,8.00018,0,0,0,11.31348,11.31446l19.69287-19.69294c-1.82446-.98693-3.647-2.01287-5.46533-3.10394A7.99592,7.99592,0,0,1,57.14014,196.11621Z"
                    stroke="transparant"
                    pathLength={0}
                    initial={{
                        fill: "rgba(255,255,255,0)",
                    }}
                    animate={{
                        fill: "rgba(255,255,255,1)",
                    }}
                    transition={{ delay: 1, duration: 0.75 }}
                />
            </svg>
        </div>
    );
};
