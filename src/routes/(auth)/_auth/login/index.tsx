import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "./-components/login-form";

export const Route = createFileRoute("/(auth)/_auth/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-std-md">
      <h1 className="text-center text-lg">Login to PokeBowl</h1>
      <LoginForm />
    </div>
  );
}
