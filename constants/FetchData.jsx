import { client } from "@/sanity/lib/client";

export async function getUpto5K() {
  const query = `*[_type == "price_range_upto_5k"]{
          brand_name,
          price,
          "thumbnail_image" : thumbnail_image.asset->url,
         "videoSrc" : video.asset->url
      }`;
  const fetchData = await client.fetch(query);
  return fetchData;
}

export async function get5KTo10K() {
    const query = `*[_type == "price_range_5k_to_10k"]{
            brand_name,
            price,
            "thumbnail_image" : thumbnail_image.asset->url,
           "videoSrc" : video.asset->url
        }`;
    const fetchData = await client.fetch(query);
    return fetchData;
  }

  export async function get10KTo15K() {
    const query = `*[_type == "price_range_10k_to_15k"]{
            brand_name,
            price,
            "thumbnail_image" : thumbnail_image.asset->url,
           "videoSrc" : video.asset->url
        }`;
    const fetchData = await client.fetch(query);
    return fetchData;
  }
