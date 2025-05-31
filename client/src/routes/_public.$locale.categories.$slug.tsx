import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { getCategory } from '@/services/category';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/$locale/categories/$slug')({
  loader: async ({ params }) => await getCategory(params.slug),
  component: RouteComponent,
})

function RouteComponent() {

  const category = Route.useLoaderData();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl text-center font-bold">{category.name}</h1>
      <ProductGrid products={category.products} />
    </div>
  );
}
