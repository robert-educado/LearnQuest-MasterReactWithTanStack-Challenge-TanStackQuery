import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { getProducts } from '@/services/product';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/')({
  loader: async () => await getProducts("en"),
  component: RouteComponent,
})

function RouteComponent() {

  const products = Route.useLoaderData();

  return (
    <div className="container mx-auto px-4">
      <ProductGrid products={products} /> 
    </div>
  );
}
