import { Skeleton } from "@/components/ui/skeleton";

export default function Loading({ count = 20 }: { count?: number }) {
  return (
    <div className="">
      <SkeletonDemo count={count} />
    </div>
  );
}

export function SkeletonDemo({ count }: { count: number }) {
  // Create an array of the desired count to map over
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
      {Array.from({ length: count }).map((_, index) => (
           <div key={index}  className="grid grid-cols-4 gap-5">
          < Skeleton className="h-32 w-12 col-span-4" />
          </div>
      ))}
      </div>
    </div>
  );
}
