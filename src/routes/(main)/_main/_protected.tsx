import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { getSession } from "~/lib/auth-client";

export const Route = createFileRoute("/(main)/_main/_protected")({
  component: RouteComponent,
  beforeLoad: async () => {
    const { data: session, error } = await getSession();
    console.log("data", session);
    if (!session) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function RouteComponent() {
  return (
    <>
      protected
      <Outlet />
    </>
  );
}
