import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { getNewProducts } from '@/services/product';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/$locale/news')({
  loader: async ({ params }) => await getNewProducts(params.locale),
  component: RouteComponent,
})

function RouteComponent() {

  const products = Route.useLoaderData();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl text-center font-bold">News</h1>
      <ProductGrid products={products} /> 
    </div>
  );
}

