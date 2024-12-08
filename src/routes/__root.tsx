import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Session } from "better-auth/types";
import { Toaster } from "sonner";
import { Nav } from "~/routes/(main)/_main/-components/nav";
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
      <div className="flex justify-center w-full min-h-[2000px] antialiased">
        <div className="max-w-2xl w-full box-border">
          <Outlet />
        </div>
      </div>
    </Providers>
  );
}

// <Nav />
// <div>
//   <Outlet />
// </div>
