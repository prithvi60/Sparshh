export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-05-16";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const useCdn = process.env.NODE_ENV === "development" ? true : false;
export const webHooks = process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET;
