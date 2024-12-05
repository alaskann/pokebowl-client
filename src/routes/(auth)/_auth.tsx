import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useSession } from "~/lib/auth-client";

export const Route = createFileRoute("/(auth)/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: session, isPending } = useSession();
  const navigate = useNavigate();

  if (session) navigate({ to: "/" });

  if (isPending) return;

  return (
    <div>
      Hello "/(auth)/_layout"! <Outlet />
    </div>
  );
}
