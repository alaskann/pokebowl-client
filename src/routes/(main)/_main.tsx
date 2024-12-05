import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "~/components/nav";

export const Route = createFileRoute("/(main)/_main")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
