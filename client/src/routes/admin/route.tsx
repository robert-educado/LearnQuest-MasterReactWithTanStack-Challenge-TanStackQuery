import { Sidebar } from '@/components/Sidebar/Sidebar';
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="text-stone-950 bg-stone-100">
      <div className="grid gap-4 p-4 grid-cols-[220px_1fr]">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

