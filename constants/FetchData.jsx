"use server";
import { client } from "@/sanity/lib/client";

export async function getUpto5K() {
  const query = `*[_type == "price_range_upto_5k"]
  | order(_createdAt asc){
  _id,
  brand_name,
    price,
    "thumbnail_image" : thumbnail_image.asset->url,
   "videoSrc" : video.asset->url,
     _createdAt
}`;
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const fetchData = await client.fetch(query, { revalidate: 0 });
  // setIsLoading(false)
  return fetchData;
}

export async function get5KTo10K() {
  const query = `*[_type == "price_range_5k_to_10k"]{
            brand_name,
            price,
            "thumbnail_image" : thumbnail_image.asset->url,
           "videoSrc" : video.asset->url
        }`;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const fetchData = await client.fetch(query, { revalidate: 0 });
  // setIsLoading(false)
  return fetchData;
}

export async function get10KTo15K() {
  const query = `*[_type == "price_range_10k_to_15k"]{
            brand_name,
            price,
            "thumbnail_image" : thumbnail_image.asset->url,
           "videoSrc" : video.asset->url
        }`;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const fetchData = await client.fetch(query, { revalidate: 0 });
  // setIsLoading(false)
  return fetchData;
}

// Infinite scrolling Data

export async function getUpto5KForPagination(pageNum) {
  const query = `*[_type == "price_range_upto_5k"]
  | order(_id) [${pageNum}...${pageNum * 2}]{
  _id,
  brand_name,
    price,
    "thumbnail_image" : thumbnail_image.asset->url,
   "videoSrc" : video.asset->url,
     _createdAt
}`;
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const fetchData = await client.fetch(query, { revalidate: 0 });
  // setIsLoading(false)
  return fetchData;
}

export async function get5KTo10KForPagination(pageNum) {
  const query = `*[_type == "price_range_upto_5k"]
  | order(_id) [${pageNum}...${pageNum * 2}]{
  _id,
  brand_name,
    price,
    "thumbnail_image" : thumbnail_image.asset->url,
   "videoSrc" : video.asset->url,
     _createdAt
}`;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const fetchData = await client.fetch(query, { revalidate: 0 });
  // setIsLoading(false)
  return fetchData;
}

export async function get10KTo15KForPagination(pageNum) {
  const query = `*[_type == "price_range_upto_5k"]
  | order(_id) [${pageNum}...${pageNum * 2}]{
  _id,
  brand_name,
    price,
    "thumbnail_image" : thumbnail_image.asset->url,
   "videoSrc" : video.asset->url,
     _createdAt
}`;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const fetchData = await client.fetch(query, { revalidate: 0 });
  // setIsLoading(false)
  return fetchData;
}
