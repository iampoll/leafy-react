const OnboardingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen w-screen justify-center items-center px-4">
            {children}
        </div>
    );
};

export default OnboardingLayout;
