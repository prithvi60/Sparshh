export default {
  name: "price_range_upto_5k",
  title: "Price Range Upto 5K",
  type: "document",
  fields: [
    {
      name: "price",
      title: "Price",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "brand_name",
      title: "Brand Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "thumbnail_image",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
        storeOriginalFilename: true,
        accept: "image/*",
      },
    },
    {
      name: "video",
      type: "file",
      title: "Reels / Video Upload",
      validation: (Rule) => Rule.required(),
      options: {
        accept: "video/*",
        storeOriginalFilename: true,
      },
    },
  ],
};
