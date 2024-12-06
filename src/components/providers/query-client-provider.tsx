import {
  QueryClient,
  QueryClientProvider as QueryClientProviderPrimary,
} from "@tanstack/react-query";

export function QueryClientProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProviderPrimary client={queryClient}>
      {children}
    </QueryClientProviderPrimary>
  );
}
