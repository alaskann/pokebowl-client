import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "~/components/nav";
import { Providers } from "~/components/providers";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Providers>
      <div className="flex justify-center w-full h-screen antialiased">
        <div className="max-w-2xl w-full box-border">
          <Nav />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <Toaster />
    </Providers>
  );
}
