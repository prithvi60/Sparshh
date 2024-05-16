import priceRange10kTo15K from "./schema/priceRange10kTo15K";
import priceRange5kTo10K from "./schema/priceRange5kTo10K";
import priceUpto5K from "./schema/priceUpto5K";

export const schema = {
  types: [priceUpto5K, priceRange5kTo10K, priceRange10kTo15K],
};
