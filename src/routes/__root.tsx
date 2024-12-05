import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Session } from "better-auth/types";
import { Toaster } from "sonner";
import { Nav } from "~/components/nav";
import { Providers } from "~/components/providers";
import { useSession } from "~/lib/auth-client";

interface RouterContext {
  session: ReturnType<typeof useSession>;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Providers>
      <div className="flex justify-center w-full h-screen antialiased">
        <div className="max-w-2xl w-full box-border">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </Providers>
  );
}

// <Nav />
// <div>
//   <Outlet />
// </div>
