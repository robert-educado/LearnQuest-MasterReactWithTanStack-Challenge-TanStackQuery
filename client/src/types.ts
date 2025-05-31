export type GetProductsResponse = {
  products: Product[];
  meta: {
    total: number;
    locale: string;
    status: string;
    page: number;
    pageSize: number;
  };
};

export type GetProductDetailsResponse = Product;

export type GetCategoryResponse = {
  id: number;
  name: string;
  slug: string;
  locale: string;
  products: Product[]
}

export type GetAboutPageResponse = {
  title: string;
  sections: Section[];
};

export interface Section {
  heading: string;
  content: string | Section[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  brand: string;
  sku: string;
  price: number;
  new: boolean;
  locale: string;
  slug: string;
}
