// "use client";
import { Card, CardHeader } from "@nextui-org/card";
import { Clip } from "./Clip";
import Link from "next/link";

const ProductCard = ({ reels }) => {
  return (
    <div className="grid w-full h-full grid-cols-2 gap-4 py-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 place-items-center">
      {reels.map((reel, idx) => (
        <Card
          as={Link}
          href={"#"}
          className="h-[17.5rem] md:h-[380px] xl:h-[500px] w-40 md:w-full aspect-clip group"
          key={idx}
        >
          <CardHeader className="group-hover:translate-y-0 absolute z-10 top-2 left-2 flex-col !items-start duration-1000 ease-in group-hover:block md:opacity-0 transition-all md:-translate-y-20 md:duration-1000 opacity-100 translate-y-0 md:group-hover:opacity-100 md:group-hover:translate-y-0">
            <p className="font-bold uppercase text-tiny text-white/90">
              What to watch
            </p>
            <h4 className="font-medium text-white text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Clip videoSrc={reel} key={idx} />
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
