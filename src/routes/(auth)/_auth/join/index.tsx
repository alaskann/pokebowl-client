import { createFileRoute, Link } from "@tanstack/react-router";
import { JoinForm } from "./-components/join-form";

export const Route = createFileRoute("/(auth)/_auth/join/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-std-md">
      <h1 className="text-center text-lg">Join PokeBowl</h1>
      <div className="space-y-std-content">
        <JoinForm />
        <div className="text-right">
          Alright have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>{" "}
          instead.
        </div>
      </div>
    </div>
  );
}
