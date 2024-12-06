const OnboardingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen w-screen justify-center items-center px-4">
            <div className="max-w-[33rem]">{children}</div>
        </div>
    );
};

export default OnboardingLayout;
