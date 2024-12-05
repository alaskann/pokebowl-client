import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/_main")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      MAIN LAYOUT <Outlet />
    </div>
  );
}
