import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { getSession } from "~/lib/auth-client";
import { AuthHead } from "./_auth/-components/auth-head";

export const Route = createFileRoute("/(auth)/_auth")({
  component: RouteComponent,
  beforeLoad: async () => {
    const { data: session, error } = await getSession();
    if (session)
      throw redirect({
        to: "/",
      });
  },
});

function RouteComponent() {
  return (
    <>
      <AuthHead />
      <Outlet />
    </>
  );
}
