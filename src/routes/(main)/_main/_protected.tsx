import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/_main/_protected")({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    const { data: session, isPending } = context.session;
    if (!session) {
      throw redirect({
        to: "/join",
      });
    }
  },
});

function RouteComponent() {
  return (
    <div>
      PROTECTED LAYOUT <Outlet />
    </div>
  );
}
