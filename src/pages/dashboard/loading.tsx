import { Skeleton } from "@/components/ui/skeleton";

const DashboardSkeleton = () => {
    return (
        <div className="max-w-sm mx-auto">
            <section className="flex items-center justify-between gap-2 p-4">
                <Skeleton className="h-10 w-[10ch]" />
                <Skeleton className="h-10 w-[10ch]" />
            </section>

            <section className="flex flex-col justify-center items-center gap-4">
                <Skeleton className="h-[40px] md:h-[50px] w-[20ch]" />
                <Skeleton className="h-[40px] md:h-[50px] w-[30ch]" />
            </section>

            <section className="flex items-center justify-between gap-2 p-4 mt-8">
                <Skeleton className="h-10 w-[10ch]" />
                <Skeleton className="h-10 w-[10ch]" />
            </section>

            <section className="flex flex-col gap-2 px-4">
                <Skeleton className="h-[62px] w-full" />
            </section>
        </div>
    );
};

export default DashboardSkeleton;
