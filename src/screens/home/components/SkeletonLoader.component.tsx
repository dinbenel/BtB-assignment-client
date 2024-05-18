import { Skeleton } from "@/shared/ui/skeleton";
import { useId } from "react";

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-3 gap-2 md:max-h-[calc(100vh-350px)] lg:max-h-[calc(100vh-300px)] sm:max-h-[calc(100vh-510px)]">
      {Array(6)
        .fill(1)
        .map(() => {
          return (
            <div key={useId()} className="flex flex-col gap-2">
              <Skeleton className="h-48 w-48" />
              <div className="space-y-2">
                <Skeleton className="h-10 w-[190px]" />
                <Skeleton className="h-10 w-[190px]" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SkeletonLoader;
