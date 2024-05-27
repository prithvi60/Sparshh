import { groq } from "next-sanity";

export const priceRangeUpto5k = groq`
*[_type == "price_range_upto_5k"]
  | order(_createdAt asc){
  _id,
  brand_name,
    price,
    "thumbnail_image" : thumbnail_image.asset->url,
   "videoSrc" : video.asset->url,
     _createdAt
}`;

export const priceRange5kTo10k = groq`*[_type == "price_range_5k_to_10k"]{
    brand_name,
    price,
    "thumbnail_image" : thumbnail_image.asset->url,
   "videoSrc" : video.asset->url
}`;

export const priceRange10kTo15k = groq`*[_type == "price_range_10k_to_15k"]{
    brand_name,
    price,
    "thumbnail_image" : thumbnail_image.asset->url,
   "videoSrc" : video.asset->url
}`;

