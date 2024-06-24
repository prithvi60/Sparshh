import TabComponent from "./TabComponent";
import { sanityFetch } from "@/sanity/lib/client";
import {
  priceRange10kTo15k,
  priceRange5kTo10k,
  priceRangeUpto5k,
} from "@/sanity/lib/query";

const ProductReels = async () => {
  const priceRange1 = await sanityFetch({
    query: priceRangeUpto5k,
    tags: ["price_range_upto_5k"],
  });
  const priceRange2 = await sanityFetch({
    query: priceRange5kTo10k,
    tags: ["price_range_5k_to_10k"],
  });
  const priceRange3 = await sanityFetch({
    query: priceRange10kTo15k,
    tags: ["price_range_10k_to_15k"],
  });


  const reels = [
    { range: "upto 5k", data: priceRange1 },
    { range: "5k - 10k", data: priceRange2 },
    { range: "10k - 15k", data: priceRange3 },
  ];

  return (
    <section className="relative h-full px-3 py-5 mx-auto max-w-screen-2xl sm:px-10 md:py-8 xl:py-10">
      <div className="block w-full">
        <TabComponent reels={reels} />
      </div>
    </section>
  );
};

export default ProductReels;
