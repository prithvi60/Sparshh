import { Skeleton } from "@nextui-org/skeleton";
import { Card } from "@nextui-org/card";

const SkeletonComponent = () => {
  return (
    <div className="grid w-full h-full grid-cols-2 gap-4 py-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 place-items-center">
      {[...Array(4)].fill(null).map((_, index) => (
        <Card
          className="overflow-hidden h-[17.5rem] md:h-[380px] lg:h-[460px] xl:h-[500px] w-40 md:w-full aspect-clip p-5"
          radius="lg"
          key={index}
        >
          <div className="pb-10 space-y-3">
            <Skeleton className="w-full rounded-lg ">
              <div className="w-4/5 h-6 rounded-lg !animate-pulse"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="w-3/5 h-6 rounded-lg !animate-pulse"></div>
            </Skeleton>
          </div>
          <Skeleton className="rounded-lg">
            <div className="rounded-lg h-96 !animate-pulse"></div>
          </Skeleton>
        </Card>
     ))} 
     </div>
  );
};

export default SkeletonComponent;
