"use client";
import { Card, CardHeader } from "@nextui-org/card";
import { Clip } from "./Clip";
import Link from "next/link";

const ProductCard = ({ reels }) => {
  return (
    <div className="w-full h-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center py-5">
      {reels.map((reel, idx) => (
        <Card
          as={Link}
          href={"#"}
          className="h-96 md:h-[500px] aspect-clip group"
          key={idx}
        >
          <CardHeader className="group-hover:translate-y-0 absolute z-10 top-2 left-2 flex-col !items-start duration-1000 ease-in group-hover:block md:opacity-0 transition-all md:-translate-y-20 md:duration-1000 opacity-100 translate-y-0 md:group-hover:opacity-100 md:group-hover:translate-y-0">
            <p className="text-tiny text-white/90 uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium text-large">
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
