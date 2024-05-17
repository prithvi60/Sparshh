import { get5KTo10K, getUpto5K, get10KTo15K } from "@/constants/FetchData";
import TabComponent from "./TabComponent";

const ProductReels = async () => {
  const priceRange1 = await getUpto5K();
  const priceRange2 = await get5KTo10K();
  const priceRange3 = await get10KTo15K();

  // console.log(priceRange3);

  const reels = [
    { range: "upto 5k", data: priceRange1 },
    { range: "5k - 10k", data: priceRange2 },
    { range: "10k - 15k", data: priceRange3 },
  ];

  return (
    <section className="h-full px-6 py-5 max-w-screen-2xl mx-auto sm:px-10 md:py-8 xl:py-10 relative">
      <div className="flex flex-col w-full">
      <h4 className="text-lg text-left sm:text-center md:absolute md:top-10 xl:top-12 md:right-[455px]">Filters</h4>
        <TabComponent reels={reels} />
      </div>
    </section>
  );
};

export default ProductReels;
