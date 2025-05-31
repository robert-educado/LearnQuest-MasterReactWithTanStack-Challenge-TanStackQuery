import type { GetAboutPageResponse } from "@/types";

export async function getAboutPage(locale: string) {
  
  const response = await fetch(
    `http://localhost:3000/api/about?locale=${locale}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch about page for " + locale);
  }

  const page = (await response.json()) as GetAboutPageResponse;

  return page;
}
