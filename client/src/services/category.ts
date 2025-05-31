import type { GetCategoryResponse } from "@/types";

export async function getCategory(slug: string) {

  const response = await fetch(`/api/categories/${slug}`);

  if (!response.ok) {
    throw new Error("Unable to fetch category " + slug);
  }

  const category = (await response.json()) as GetCategoryResponse;

  return category;
}