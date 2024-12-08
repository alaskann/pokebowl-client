import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getWinLossRatios } from "~/data";
import { Table } from "./-components/table";
import { Button } from "@mui/material";

export const Route = createFileRoute("/(main)/_main/_protected/stats/")({
  component: RouteComponent,
});

function RouteComponent() {
  const query = useQuery({
    queryKey: ["stats"],
    queryFn: getWinLossRatios,
    staleTime: Infinity,
    refetchOnMount: true,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="px-std-content w-full space-y-std-sm">
      {query.data && <Table data={query.data} />}
      <div className="flex justify-end">
        <Button className="" onClick={() => query.refetch()}>
          Refresh
        </Button>
      </div>
    </div>
  );
}
