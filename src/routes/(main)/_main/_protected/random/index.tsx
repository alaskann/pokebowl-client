import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/_main/_protected/random/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>RANDOM PAGE! WELCOME!</div>;
}
