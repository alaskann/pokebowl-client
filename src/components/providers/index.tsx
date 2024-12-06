import * as React from "react";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "./query-client-provider";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider>
      <ThemeProvider>{children}</ThemeProvider>
      <TanStackRouterDevtools position="bottom-left" />
      <ReactQueryDevtools initialIsOpen={false} position="right" />
    </QueryClientProvider>
  );
}
