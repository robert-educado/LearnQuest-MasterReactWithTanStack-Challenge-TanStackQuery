import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/$locale/search')({
  loaderDeps: ({ search }: { search: { q?: string }}) => {
    return {
      query: search.q  
    }
  },
  loader: async ({ params, deps }) => {

    const { locale } = params;
    const { query } = deps;

    const response  = await fetch(`/api/search?q=${query}&locale=${locale}`);

    if (!response.ok) {
      throw new Error("Unable to search for products");
    }

    const { results: products } = await response.json(); 

    return {
      products,
      query 
    }
  },
  component: RouteComponent,
})

function RouteComponent() {

  const { products, query } = Route.useLoaderData();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-6">
        Result: {query}
      </h1>
      <div className="flex gap-2">
        <button className="border border-gray-400 px-2 py-1 rounded-md text-sm">
          Clothing
        </button>
        <button className="border border-gray-400 px-2 py-1 rounded-md text-sm">
          Accessories
        </button>
      </div>
      <ProductGrid products={products} />
    </div>
  );
}
