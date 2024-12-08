import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { PokemonBattleStats } from "~/lib/schemas/pokemon";
import { columns } from "./table.definitions";
import Paper from "@mui/material/Paper";
import MUITable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { useState } from "react";

export function Table({ data: rows }: { data: PokemonBattleStats[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    columns,
    data: rows,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    rowCount: rows.length,
    onSortingChange: setSorting,
    state: {
      sorting,
    },
    initialState: {
      sorting: [
        {
          id: "wins",
          desc: true,
        },
      ],
      pagination,
    },
  });

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 520 }}>
        <MUITable stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {table.getHeaderGroups()[0].headers.map((header) => {
                return (
                  <TableCell key={header.id}>
                    <TableSortLabel
                      active={header.column.getIsSorted() as boolean}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder
                        ? null
                        : (header.column.columnDef.header as string)}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.renderValue() as string}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </MUITable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={table.getRowCount()}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        onPageChange={(event: unknown, newPage: number) => {
          table.setPagination((last) => ({
            pageIndex: newPage,
            pageSize: last.pageSize,
          }));
        }}
        onRowsPerPageChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          table.setPageSize(Number(event.target.value));
        }}
      />
    </Paper>
  );
}
