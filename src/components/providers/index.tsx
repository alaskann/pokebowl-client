import * as React from "react";
import { Outlet } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "mui-sonner";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Nav } from "~/components/nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
      <TanStackRouterDevtools position="bottom-left" />
      <ReactQueryDevtools initialIsOpen={false} position="right" />
    </QueryClientProvider>
  );
}
