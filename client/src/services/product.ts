import type { GetProductDetailsResponse, GetProductsResponse } from "@/types";

export async function getProducts(locale: string, isNew?: boolean) {
  let url = `http://localhost:3000/api/products?locale=${locale}`;

  if (isNew) {
    url += `&status=new`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to fetch products");
  }

  const { products } = (await response.json()) as GetProductsResponse;

  return products;
}

export function getNewProducts(locale: string) {
  return getProducts(locale, true);
}

export async function getProduct(slug: string) {
  
  const response = await fetch(`/api/products/${slug}`);

  if (!response.ok) {
    throw new Error("Unable to fetch product");
  }

  const product = (await response.json()) as GetProductDetailsResponse;

  return product;
}
