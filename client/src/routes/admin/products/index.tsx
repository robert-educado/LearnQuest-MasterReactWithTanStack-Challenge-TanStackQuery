import { createFileRoute } from "@tanstack/react-router";

async function fetchProducts() {
    
  const locale = "en";

    const response = await fetch(`/api/products?locale=${locale}`);

    const { products } = await response.json();

    return products
}

export const Route = createFileRoute("/admin/products/")({
  loader: async () => {

    const products = await fetchProducts();
    return products;
  },
  component: RouteComponent,
});

function RouteComponent() {

  const products = Route.useLoaderData();

  return (
    <div className="bg-white rounded-lg pb-4 shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Products</h1>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded">
            New product
          </button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search product"
            className="border border-gray-300 rounded px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-2 font-medium">Name</th>
                <th className="text-left px-4 py-2 font-medium">SKU</th>
                <th className="text-left px-4 py-2 font-medium">Price</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, idx) => (
                <tr
                  key={product.sku}
                  className={idx % 2 === 0 ? "bg-gray-50" : ""}
                >
                  <td className="px-4 py-2 cursor-pointer hover:underline">
                    {product.name}
                  </td>
                  <td className="px-4 py-2">{product.sku}</td>
                  <td className="px-4 py-2">{product.price}</td>
                  <td className="px-4 py-2">
                    <button className="bg-red-200 hover:bg-red-300 text-red-800 font-medium py-1 px-3 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


