import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "~/routes/(main)/_main/-components/nav";

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
